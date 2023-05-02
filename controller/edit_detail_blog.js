const expressAsyncHandler = require("express-async-handler");
const connection = require("../database/connect");

const edit_detail_blog= expressAsyncHandler(async (req, res) => {
    try {
        const [rows]= await connection.execute("SELECT * FROM blogs WHERE id= ?", [req.params?.blogId || ""])
        return res.status(200).json(rows[0])
    } catch (error) {
        return res.status(500).json({error: error})
    }
})

module.exports = edit_detail_blog