const User = require('../../models/User');

const userController = {
    async createUser(req, res) {
        const { body } = req;
        try {
            const newUser = await User.create(body);

            return res.status(201).json(newUser);
        } catch (e) {
            return res.status(400).json(e);
        }
    },

    async getUsers(req, res) {
        try {
            return res.status(200).json(await User.find());
        } catch (e) {
            return res.status(400).json(e);
        }
    },
    async getUsersById(req, res) {
        try {
        } catch (e) {}
    },
};

module.exports = userController;
