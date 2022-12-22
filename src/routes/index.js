const songsRoutes = require("./songs");

const middlewares = (app) => {
  app.use("/api", songsRoutes);
};

module.exports = middlewares;
