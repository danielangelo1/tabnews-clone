import { NextApiRequest, NextApiResponse } from "next";
import database from "infra/database";

const status = async (request: NextApiRequest, response: NextApiResponse) => {
  const result = await database.query("SELECT 1 +1 as sum");
  console.log(result.rows);
  response.status(200).json({ status: "ok" });
};

export default status;
