import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "../../dbconfig/mongoseConfig";
import User from "../../models/userModel";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../helpers/mailer/nodeMailerTransport";

// connecting mongo db
connect();

export async function POST(req) {
  const postData = await req.json();
  const { email, password } = postData;
  const user = await User.findOne({ email: email });
  const verified = user.isVerified || false;
  if (user && !verified) {
    const userId = user._id.valueOf();

    const mail = await sendEmail(email, userId, "verify");
    return NextResponse.json(
      { message: "We sent you an Email. verify your email" },
      { status: 505 }
    );
  } else if (user && verified) {
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
        { message: "Login successful", Admin: user.isAdmin },
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
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 505 }
    );
  }
}
