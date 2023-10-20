const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new CustomAPIError("Please provide a username and password", 400);
    }

    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "30d" });

    res.status(200).json({ msg: "User created", Username: username, token });
};

const dashboard = async (req, res) => {
    const luckynumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello ${decoded.username}`, secret: `Here is your authorized data: your lucky number is ${luckynumber}` });
};

module.exports = { login, dashboard };
