const path = require('path');
const axios = require('axios');

const routePath = (route) => {
    return path.resolve(__dirname, '..', 'views', 'pages', route);
};



const pagesController = {
    getIndex: (req, res) => {
        let players = [];
        let find = '';
        res.render(routePath('index'), { players, find });

    },
    postIndex: async (req, res) => {
        let response = await axios.get('https://mach-eight.uc.r.appspot.com/');
        let data = response.data;
        let players = [];
        let minimo = 200;
        let maximo = 0;
        let find = '';
        let numero = req.body.number;

        for (let i = 0; i < data.values.length; i++) {
            if (parseInt(data.values[i].h_in) < minimo) {
                minimo = parseInt(data.values[i].h_in)
            }
            if (parseInt(data.values[i].h_in) > maximo) {
                maximo = parseInt(data.values[i].h_in)
            }
        }

        if (numero >= (minimo * 2) && numero <= (maximo * 2)) {
            for (let i = 0; i < data.values.length - 1; i++) {
                for (let j = i + 1; j < data.values.length; j++) {
                    if ((parseInt(data.values[i].h_in) + parseInt(data.values[j].h_in)) == numero) {
                        players.push({
                            first_name1: `${data.values[i].first_name} ${data.values[i].last_name} `,
                            h_in1: data.values[i].h_in,
                            first_name2: `${data.values[j].first_name} ${data.values[j].last_name} `,
                            h_in2: data.values[j].h_in,
                        })
                    }
                }
            }
            if (players.length < 1 ) {
                find = 'No se encontraron resultados'
                res.render(routePath('index'), { players, find });
            }
            else{
                res.render(routePath('index'), { players, find });
            }
        }
        else {
            find = 'No se encontraron resultados'
            res.render(routePath('index'), { players, find });
        }
    }

}

module.exports = pagesController;