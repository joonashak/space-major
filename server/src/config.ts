export const NODE_ENV = process.env.NODE_ENV;
export const MONGO_URL = process.env.MONGO_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_LIFETIME = process.env.JWT_LIFETIME || "30d";
export const SSO_CALLBACK_URL = process.env.SSO_CALLBACK_URL;
export const SSO_CLIENT_ID = process.env.SSO_CLIENT_ID;
export const SSO_SECRET_KEY = process.env.SSO_SECRET_KEY;
export const ENABLE_DEVTOOLS = process.env.ENABLE_DEVTOOLS === "true";
export const NOT_PRODUCTION = NODE_ENV !== "production";
export const CLIENT_URL = process.env.CLIENT_URL;
export const PORT = process.env.PORT || 3001;

export const getClientLoginCallbackUrl = (state: string) => `${CLIENT_URL}/login/${state}`;
