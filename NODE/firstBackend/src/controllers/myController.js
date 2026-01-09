import User from "../middlewares/userModel.js";


export const UserRegister = async (req, res) => {
    try {
        const { fullName, email, phone, password } = req.body;

        if (!fullName || !email || !phone || !password) {
            res.status(400).json({ message: "All field Required" })
            return;

        }
        const newUser = User.create({
            fullName,
            email,
            phone,
            password,
        });
        console.log(newUser)

        res.status(201).json({ message: "User Created Successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internet Server error" })
    }
};

export const UserLogin = async (req, res) => {
    try {
        const { fullName, email, phone, password } = req.body;

        if (!fullName || !email || !phone || !password) {
            res.status(400).json({ message: "All field Required" })
            return;

        }
        const existingUser = await User.find({ email });
        if (!existingUser) {
            res.status(404).json({ message: "User Not Found" })

        }
        const isVerified = password === existingUser.password;
 if (!isVerified) {
            res.status(402).json({ message: "User Not Authorized" })
 }

        console.log(existingUser)

        res.status(200).json({ message: "Welcome Back", data: existingUser })
    } catch (error) {
        res.status(500).json({ message: "Internet Server error" })
    }
};


export const UserLogout = (req, res) => {
    try {

    } catch (error) {

    }

};