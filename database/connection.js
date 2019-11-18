const mongoose = require('mongoose');
// require('dotenv').config();
mongoose.Promise=global.Promise;
// console.log(process.env.MONGOURI);
mongoose.connect("mongodb://localhost:27017/curd",{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
