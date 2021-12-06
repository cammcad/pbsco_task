/* Core Types & Functions (which enable functional programs) */

/* Functors */

const None = (x) => ({
  type: "None",
  contents: () => x,
  chain: (f) => None(x),
  map: (f) => None(x),
  fold: (f, g) => f(x),
  inspect: () => `None(${x})`,
});

const Some = (x) => ({
  type: "Some",
  contents: () => x,
  chain: (f) => f(x),
  map: (f) => Some(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Some(${x})`,
});

/* Functions */

const fmap = (f) => (functor) => functor.map(f);
const compose = (f, g) => (x) => f(g(x));
const fromNullable = (x) => (x != null || undefined ? Some(x) : None(null));
const trace = (x) => {
  console.log(x);
  return x;
};
const stringifyErr = (x) => (x instanceof TypeError ? x.message : x);
const id = (x) => x;
const prop = (name) => (x) => x[name]; // get a property name

module.exports = {
  Some,
  None,
  fromNullable,
  id,
  compose,
  prop,
  trace,
  stringifyErr,
  fmap,
};
