const { checkQuote } = require("./quotes")
const { compose, id } = require("./core")
const fetch = require("node-fetch")
const { host } = require("./req")
const Task = require("data.task")

const cataas = (quote) => {
  return new Task((rej, res) => {
    const url = compose((addr) => `${addr}${quote}`, host)
    fetch(url("cataas")).then(id).then(res).catch(rej)
  });
};
const mashup = compose(cataas, checkQuote)

module.exports = { cataas, mashup };
