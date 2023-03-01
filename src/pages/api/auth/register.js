import { hashSync } from "bcryptjs";

import connectMongo from "@/db/connectMongo";

import User from "@/models/User";

const handler = async (req, res) => {
  try {
    const { method } = req;

    if (method === "POST") {
      const { email, password, name } = req.body;

      if (!email || !password || !name) {
        return res.status(422).json({ msg: "Invalid Data" });
      }

      await connectMongo();

      const isUserExist = await User.findOne({ email });
      if (isUserExist) {
        return res.status(422).json({ msg: "Email in used" });
      }

      const newUser = await User.create({
        name,
        email,
        password: hashSync(password, 12),
      });

      res
        .status(201)
        .json({ _id: newUser._id, name: newUser.name, email: newUser.email });
    }
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong." });
  }
};
export default handler;
