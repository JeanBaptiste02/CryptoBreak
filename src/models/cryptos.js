const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const cryptosShema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

cryptosShema.plugin(uniqueValidator);

module.exports = mongoose.model("Cryptos", cryptosShema);
