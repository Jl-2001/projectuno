const express = require('express')
const router = express.Router()
const pool = require('../modules/pool')


router.get('/', (req, res) => {
    const sqltext = `SELECT * FROM "items";`;

    pool.query(sqltext)
    .then((result) => {
        console.log('items grabbed from DB successfully', result)
        res.send(result.rows)
    }).catch((err) => {
        console.log('error getting data: ', err )
        res.sendStatus(500)
    })
})

module.exports = router;