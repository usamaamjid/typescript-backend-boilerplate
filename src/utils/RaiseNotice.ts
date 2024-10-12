import logger from "./Logger";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RAISE_NOTICE = (type: string, message: string | any) => {
  if (type === "error") {
    logger.error(`${typeof message === "string" ? message : ""}`, typeof message !== "string" ? message : "");
    return;
  }
  if (type === "warn") {
    logger.warn(`${typeof message === "string" ? message : ""}`, typeof message !== "string" ? message : "");
    return;
  }
  if (type === "fatal") {
    logger.fatal(`${typeof message === "string" ? message : ""}`, typeof message !== "string" ? message : "");
    return;
  }
  logger.info(`${typeof message === "string" ? message : ""}`, typeof message !== "string" ? message : "");
};
export default RAISE_NOTICE;
