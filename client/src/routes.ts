const root = "/";
const operation = "operation";
const settings = "settings";

const path = (...pieces: string[]) => ["", ...pieces].join("/");

const ROUTES = {
  _ROOT: root,
  _PATH: root,
  OPERATION: {
    _ROOT: operation,
    _PATH: path(operation),
  },
  PROFITABILITY: {
    _ROOT: settings,
    _PATH: path(settings),
  },
};

export default ROUTES;
