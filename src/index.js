const express = require("express");
const { stringifyErr } = require("./core");
const { randomQuote } = require("./quotes");
const { mashup } = require("./cataas");
const app = express();

const showImage = (buff, res) => {
  res.writeHead(200, { "content-type": "image/png" });
  buff.body.pipe(res);
};
const showErr = (err, res) => {
  res.writeHead(500, { "content-type": "text/plain" });
  res.send(stringifyErr(err));
};

app.get("/", (req, res) => {
  randomQuote().fork(
    (error) => {
      mashup("me when I'm unable to think of a random quote").fork(
        (err) => showErr(err, res),
        (data) => showImage(data, res)
      );
    },
    (quote) => {
      mashup(quote).fork(
        (err) => showErr(err, res),
        (d) => showImage(d, res)
      );
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log("pbsco test task up and listening");
});
