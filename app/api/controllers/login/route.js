import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "../../dbconfig/mongoseConfig";
import User from "../../models/userModel";
import jwt from "jsonwebtoken";

// connecting mongo db
connect();

export async function POST(req) {
  const postData = await req.json();
  const { email, password } = postData;
  console.log(email);
  const user = await User.findOne({ email: email });
  if (user) {
    // comparing password

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      console.log("invalid password");

      return NextResponse.json({ message: "Invaid password" }, { status: 505 });
    } else {
      console.log("password matched");
      const tokenData = {
        email: user.email,
        id: user._id,
        username: user.username,
        time: new Date().getTime() + 3600 * 24,
      };
      // create token
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });
      const response = NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
      response.cookies.set("token", token, {
        httpOnly: true,
        sameSite: true,
        secure: true,
      });
      return response;
    }
  } else {
    return NextResponse.json({ message: "Invalid Email" }, { status: 505 });
  }
}
