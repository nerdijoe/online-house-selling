var express = require('express')
var router = express.Router()
var postController = require('../controllers/postController')

router.post('/', postController.create);


module.exports = router;
