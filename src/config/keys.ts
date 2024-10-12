import dotenv from "dotenv";
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const ENV = {
  PORT: process.env.PORT || 3001,
};
export default ENV;
