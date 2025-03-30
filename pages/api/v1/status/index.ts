import { NextApiResponse, NextApiRequest } from "next";

const status = (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json({ status: "ok" });
};

export default status;
