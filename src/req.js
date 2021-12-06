const hosts = new Map();
hosts.set(
  "skolakoda",
  "https://programming-quotes-api.herokuapp.com/Quotes/random"
);
hosts.set("cataas", "https://cataas.com/cat/says/");

const host = (key) => hosts.get(key);
module.exports = { host };
