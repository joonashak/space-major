const root = "/";
const operation = "operation";
const settings = "settings";

const pathParams = {
  operationSlug: ":operationId",
};

const path = (...pieces: string[]) => ["", ...pieces].join("/");

const ROUTES = {
  _ROOT: root,
  _PATH: root,
  OPERATION: {
    _ROOT: operation,
    _PATH: path(operation),
    BY_ID: {
      _ROOT: pathParams.operationSlug,
      _PATH: path(operation, pathParams.operationSlug),
    },
  },
  PROFITABILITY: {
    _ROOT: settings,
    _PATH: path(settings),
  },
};

export default ROUTES;
