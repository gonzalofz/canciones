const express = require("express");
const middlewares = require("./routes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Response Json
app.use(express.json());

//CORS
app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled 🎈" });
});

app.use(
  cors({
    origin: "*",
  })
);

// middlewares
middlewares(app);

// Listen
app.listen(port, () => console.log(`server listening on port ${port}`));
