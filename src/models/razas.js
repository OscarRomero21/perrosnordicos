const { Schema, model } = require('mongoose')

const razaSchema = new Schema(

{
  Caracteristicas: {type: String},
  Nombre: {type: String},
  LugarOrigen: {type: String},

},

{
timestamps: true,
versionKey: false

}

)


module.exports = model("Razas", razaSchema)