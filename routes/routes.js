var express = require('express');
var router = express.Router();
var reqControl = require('../controller/todoController');

  // todoList Routes
router.route('/')
   .get(reqControl.getall)
   .post(reqControl.saveit)
   .put(reqControl.update)
   .delete(reqControl.delete);
   
module.exports = router;