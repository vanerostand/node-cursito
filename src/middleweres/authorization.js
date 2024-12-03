import e from "express";
import jwt from "jsonwebtoken";

export const autenticate = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({ message: "No token provided" });
  }

  const [_, token] = req.headers.authorization.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const authorize = (role) => (req, res, next) => {
  console.log(req.user.role);
  console.log(role);
  if (req.user.role !== role) {
    res.status(403).json({ message: "Unauthorized" });
  } else {
    next();
  }
};