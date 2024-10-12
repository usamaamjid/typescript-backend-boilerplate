import { customLevels } from "@constants";
import winston, { format, Logform } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import process from "process";

const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.splat(),
  format.printf((info: Logform.TransformableInfo) => {
    const { timestamp, level, message, ...meta } = info;
    const formattedMessage =
      typeof message === "string"
        ? message
        : typeof message === "object" || Array.isArray(message)
          ? JSON.stringify(message)
          : String(message);

    return `${timestamp} [${level}]: ${formattedMessage} ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ""}`;
  }),
);

const isDevEnvironment = () => process.env.NODE_ENV === "development" || process.env.NODE_ENV === "local";

class Logger {
  private logger: winston.Logger;

  constructor() {
    const transports: winston.transport[] = [
      new winston.transports.Console({
        format: formatter,
        level: isDevEnvironment() ? "trace" : "info",
      }),
    ];

    if (!isDevEnvironment()) {
      transports.push(
        new winston.transports.File({
          filename: "logs/error.log",
          level: "error",
          format: formatter,
        }),
        new DailyRotateFile({
          filename: "logs/application-%DATE%.log",
          datePattern: "YYYY-MM-DD",
          zippedArchive: true,
          maxSize: "20m",
          maxFiles: "14d",
          format: formatter,
        }),
      );
    }

    this.logger = winston.createLogger({
      level: isDevEnvironment() ? "trace" : "info",
      levels: customLevels.levels,
      transports,
    });

    winston.addColors(customLevels.colors);
  }

  trace(msg: string, meta?: object): void {
    this.logger.log("trace", msg, meta);
  }

  debug(msg: string, meta?: object): void {
    this.logger.debug(msg, meta);
  }

  info(msg: string, meta?: object): void {
    this.logger.info(msg, meta);
  }

  warn(msg: string, meta?: object): void {
    this.logger.warn(msg, meta);
  }

  error(msg: string, meta?: object): void {
    this.logger.error(msg, meta);
  }

  fatal(msg: string, meta?: object): void {
    this.logger.log("fatal", msg, meta);
  }
}

const logger = new Logger();
export default logger;
