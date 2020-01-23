const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll("burgers", function(data) {
        let brgObject = {
            burgers: data
        };
        console.log("------router.get------");
        console.log(brgObject);
        console.log("----------------------");
        res.render("index", brgObject);
    });
});

router.post("/api/burgers", function(req,res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        console.log('Line 19: ', req.body.burger_name);
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;