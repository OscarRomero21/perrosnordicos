const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/razas",
{
useUniFiedTopology:true,
useNewUrlParser: true

})
.then((db) => console.log("db is conected"))
.catch((err) => console.error(err))