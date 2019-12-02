const mongoose = require('mongoose');
var moment = require('moment');

const event_schema = mongoose.Schema({
    name:String,
    date:Date,
    image:String
});
event_schema.path('date').get(function (d) {
    return  moment(d.date).format('YYYY-MM-DD');
  });
module.exports= mongoose.model('event',event_schema)