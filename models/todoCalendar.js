var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var calendar = new Schema({
    name :{
        type: String
    },
    
    description:{
        type: String
    },
    
    duedate:{
        type: String
    },
    status:{
        type: String
    }
});
var calendar = mongoose.model('calendar',calendar,"calendars");
module.exports = calendar;