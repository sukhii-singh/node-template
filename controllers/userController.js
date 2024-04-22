exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

    } catch (error) {
        res.status(500).json({ msg: "server error", error })
    }
}
exports.login = async (req, res) => {
    try {
        const { name, email, password } = req.body;

    } catch (error) {
        res.status(500).json({ msg: "server error", error })
    }
}