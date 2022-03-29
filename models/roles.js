const mongoose = require("mongoose");
const Usuario = mongoose.model("users");
const Schema = mongoose.Schema;

const RolesSchema = new Schema({
  name: String,
  user_type: String,
});

module.exports = mongoose.model("roles", RolesSchema);
