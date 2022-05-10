const express = require("express");

const router = express.Router();

const Test = require("../models/tests")

router.get('/health', async (req, res) => {
    try {
        res.send('test api is running')
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.post('/add', async(req, res) => {
    try {
        const {firstName, lastName, phone} = req.body;
        const test = await Test.create({
            firstName: firstName,
            lastName: lastName,
            phone: phone
        })
        res.send(test)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.get('/alldata', async (req, res) => {
    try {
        const tests = await Test.find()
        res.send(tests)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.put('/edit', async (req, res) => {
    try {
        const {id, date} = req.body;
        Test.findByIdAndUpdate(id, {"date": date}, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.delete('/del', async (req, res) => {
    try {
        const {id} = req.headers;
        // console.log(req)
        console.log('del', id)
        Test.findByIdAndDelete(id, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.post('/find/byid', async(req, res) => {
    try {
        const {id} = req.body
        const tests = await Test.findById(id)
        res.send(tests)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})





module.exports = router;