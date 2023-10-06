const express = require('express');

const { getUsers, getUsersbyId, getNewUser} = require("./user.controller")

const route = express.Router();

route.get('/',getUsers)

route.get('/users/:id',getUsersbyId)

route.post('/users',getNewUser)

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if(!user) return res.status(400).json({ msg: "User does not exist . "});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. "});

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user});

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = route;