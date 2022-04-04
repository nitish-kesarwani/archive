const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const http = require("http");

const app = express();
const server = http.createServer(app);
const PORT = 5000;
const {
  REACT_APP_URI,
  REACT_APP_CLIENT_ID,
  REACT_APP_OIDC_REDIRECT_URI,
  REACT_APP_SCOPE,
  REACT_APP_STATE,
  REACT_APP_RESPONSE_TYPE,
} = process.env;

const corsOption = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.options("*", cors());
app.use(cors(corsOption));
app.use(
  bodyParser.json({
    limit: "1mb",
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/oauth/redirect", (req, res) => {
  const urlObj = {
    auth_redirect_url: `${REACT_APP_URI}/connect/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_OIDC_REDIRECT_URI}&response_type=${REACT_APP_RESPONSE_TYPE}&scope=${REACT_APP_SCOPE}&state=${REACT_APP_STATE}`,
  };
  res.json(urlObj);
});

server.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
