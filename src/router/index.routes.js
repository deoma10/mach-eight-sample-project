const express = require('express');
const router = express.Router();
const {pagesController} = require("../controller");

router.get('/', pagesController.getIndex);
router.post('/result', pagesController.postIndex);

module.exports = router;