import { Request, Response, NextFunction } from "express";

const testApi = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(200).json({ message: "This is the test api boilerplate. Good job!" });
  } catch (error) {
    next(error);
  }
};
export default testApi;
