"use server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const extractingData = async (request: NextRequest, token: string) => {
  try {
    const decodedData: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodedData.id;
  } catch (error) {
    return error;
  }
};
