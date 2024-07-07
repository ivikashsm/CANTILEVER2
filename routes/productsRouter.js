const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("haai kaam kar raha hai");
})

module.exports = router;