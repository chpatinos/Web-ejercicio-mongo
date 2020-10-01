const { MongoClient } = require("mongodb");

const url = "mongodb+srv://user:password@host";

const conn = MongoClient.connect(url, { useUnifiedTopology: true });

module.exports = conn;
