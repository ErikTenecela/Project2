/* eslint-disable prettier/prettier */
var db = require("../models");

module.exports = function(app) {
    // Get all examples
    app.get("/api/babies", async(req, res) => {
        try {
            const data = await db.Baby.findAll({});
            res.json(data);
        } catch (error) {
            res.status(400).json({ error: { name: error.name, msg: error.message } });
        }
    });

    // Create a new example
    app.post("/api/babies", async(req, res) => {
        try {
            const result = await db.Baby.create(req.body);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: { name: error.name, msg: error.message } });
        }
    });

    // Delete an example by id
    app.delete("/api/babies/:id", async(req, res) => {
        try {
            const result = await db.Baby.destroy({ where: { id: req.params.id } });
            const deletedRowCount = result;
            const status = deletedRowCount > 0 ? 200 : 404;
            res.status(status).json({ deletedRowCount });
        } catch (error) {
            res.status(400).json({ error: { name: error.name, msg: error.message } });
        }
    });
};