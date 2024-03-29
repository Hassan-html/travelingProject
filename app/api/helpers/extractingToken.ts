import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const extractingData = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedData: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodedData.id;
  } catch (error) {
    return error;
  }
};
