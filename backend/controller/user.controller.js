import User from "../model/user.modal.js"; // Ensure the correct file name for the model
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashpassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname,
      email,
      password: hashpassword,
    });

    await createdUser.save();

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: createdUser.id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "invalid username or password" });
    }
    res.status(200).json({
      message: "Successfully login",
      user: {
        id: user.id,
        fullname: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};
