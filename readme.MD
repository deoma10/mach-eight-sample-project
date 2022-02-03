# Mach Eight Sample Project

_Este proyecto hace parte de una prueba técnica para Prometo Talent en la cual desarrollé un pequeño aplicativo que toma datos de un API con información sobre jugadores profesionales de la NBA, una vez es importada la data, se ejecuta una función que dependiendo de la entrada ingresada por el usuario sobre una altura en pulgadas(in) encuentra todos los pares de jugadores cuya altura en pulgadas es la suma de la entrada ingresada por el usuario._


## Comenzando 🚀

_Para ejecutar el proyecto en tu maquina por favor realiza un git clone de este repositorio y utiliza el comando npm install y luego npm start para iniciar el servidor en tu localhost en el puerto 3000_

_Tambien puedes ver el proyecto en linea en el siguiente enlace: https://mach-eight-sample-project.herokuapp.com_


## El algoritmo
_El algoritmo que desarrollé para encontrar los pares de jugadores esta dividido en dos etapas, en una primera etapa se itera sobre el array y se encuentra los valores mínimo y máximo de altura en pulgadas, esto para poder conocer los limites o el rango en el cual se podrian encontrar pares, en una segunda fase se realiza una nueva iteración anidada donde se hace uso de un condicional que comprueba la condición de igualdad con respecto al valor ingresado por el usuario en el frontend, para reducir el consumo de recursos por parte de la maquina esta iteración se ejecuta si y solo si el numero ingresado se encuentra dentro del rango construido con los valores máximo y mínimo_

_El algoritmo que resuelve el ejercicio se encuentra en la siguiente ubicación src/controller/pagesController, especificamento en el método postIndex_



## Construido con 🛠️

_Herramientas que utilicé para crear el proyecto_

* [Axios](https://www.npmjs.com/package/axios) - Usado para hacer peticiones HTTP a una API
* [NPM](https://www.npmjs.com/) - Usado para gestionar los paquetes
* [NODE](https://nodejs.org/es/thub.io/rome/) - Usado para ejecutar JavaScript del lado del servidor
* [HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Usado para la estructura web del proyecto
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Usado para generar los estilos de la web

## Autor ✒️

* **Daniel Ospina** - [deoma10](https://github.com/deoma10)


