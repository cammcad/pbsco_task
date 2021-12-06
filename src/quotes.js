const fetch = require("node-fetch");
const Task = require("data.task");
const { compose, fmap, prop } = require("./core");
const { host } = require("./req");

const fetchQuote = () => {
  return new Task((rej, res) => {
    fetch(host("skolakoda"))
      .then((d) => d.json())
      .then(res)
      .catch(rej);
  });
};
const randomQuote = compose(fmap(prop("en")), fetchQuote);
const checkQuote = (quote) =>
  quote instanceof TypeError
    ? "me when I can't come up with a random quote"
    : quote;

module.exports = { randomQuote, checkQuote };
