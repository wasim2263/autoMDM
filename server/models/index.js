module.exports.connect = uri => {
  const mongoose = require("mongoose");
  mongoose.Promise = require("bluebird");
  mongoose.connect(uri, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
  });
  /*   // plug in the promise library:
  mongoose.Promise = global.Promise;
 */
  mongoose.connection.on("error", err => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require("./eclass");
  require("./eu-match");
  require("./iig");
  require("./parts");
  require("./taric");
  require("./tree-filter");
  require("./unspsc");
  require("./User");
};
