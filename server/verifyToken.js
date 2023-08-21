import jwt from "jsonwebtoken";
import { handleError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(handleError(401, "You are not authenticated"));
  jwt.verify(token, process.env.JWT, (err, user) => {
    req.user = user;
    next();
  });
};
