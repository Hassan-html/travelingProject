import { createPool } from "mysql2";
const conn = createPool({
  host: "49.12.122.233",
  user: "travelwavez_hsn-codes",
  password: "-R@t*+ciuev{",
  port: "3306",
  database: "travelwavez_users",
});

conn.getConnection((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

export const executeQuery = (query, arrayParams) => {
  return new Promise((resolve, reject) => {
    try {
      conn.query(query, arrayParams, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } catch (error) {
      reject(err);
    }
  });
};
