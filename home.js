const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

router.get('/',async (req,res)=>{
    let db = new sqlite3.Database('sample.db')
    let sql = `SELECT * FROM data_table`;
   const result = await db.all(sql, [], (err, rows) => {
    if (err) {
    throw err;
  }else res.send(rows)
});
})
module.exports = router;