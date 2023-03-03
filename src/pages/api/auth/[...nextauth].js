import { compare } from "bcryptjs";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import connectMongo from "@/db/connectMongo";
import User from "@/models/User";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        await connectMongo();

        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("Invalid Credentials");
        }

        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid user credentials");
        }

        const isPasswordMatched = await compare(password, user.password);
        if (!isPasswordMatched) {
          throw new Error("Incorrect Password");
        }

        return { email: user.email, _id: user._id, name: user.name };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
