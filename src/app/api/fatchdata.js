import mysql from "mysql2";

export default function handler(req, res) {
  res.status(200).json({ name: "Raymond Ngobeni" });
}
