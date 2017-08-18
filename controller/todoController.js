var calendars = require('../models/todoCalendar');

exports.getall = function (req,res){
calendars.find({},function(err,data){
    if(err) 
        res.send(err);
    res.json(data);
    });
};

exports.saveit = function(req,res){
    var reqbod = new calendars(req.body);
    reqbod.save(function(err){
        if(err){
            res.send(err);
        }
        res.send("Event added to the calendar");
    });
};

exports.update = function(req, res, next){
    var reqbod = new calendars(req.body);
    var nameId = req.body.name;
    
    calendars.update({name:nameId}, req.body,{multi: true} ,function (err, post){
        if (err)
        {
            res.send(err);
        }
    res.send("Calendar updated");
    });
};

exports.delete = function(req,res){
    
    calendars.find({name:req.body.name},function(err,records){
        
        if(err){
            res.send(err);
        }
        records.forEach(function(record){
                record.remove();}
                );
    res.send("Documents Deleted by name "+req.body.name);    
    }
       
    ); 
};
/**
calendars.findOneAndRemove({name:req.body.name},{multi:true},function(err,data){
        if(err){
            res.send('error');
        }
        res.send("Documents Deleted by name "+req.body.name);
**/