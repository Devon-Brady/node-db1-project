const express = require("express");
const router = express.Router();
const Accounts = require('./accounts-model');
const mw = require('../middlewear');

router.get('/',(req,res)=>{
Accounts.get()
.then((account)=>{
    res.status(200).json(account)
})
})

router.post('/', mw.validateAccountBody,(req,res)=>{
    const body = req.body
    Accounts.create(body)
    .then((account)=>{
        res.status(201).json(account)
    })
    .catch((error)=>{
        res.status(500).json({message:`Server Error: ${error}`})
    })
})

router.put('/:id',mw.validateAccountBody,mw.validateAccountId,(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    Accounts.update(id,body)
    .then((account)=>{
        res.status(202).json(account)
    })
})

router.delete('/:id',mw.validateAccountId,(req,res)=>{
    const id = req.params.id
    Accounts.remove(id)
    .then((account)=>{
        res.status(203).json({message:` User ${id} was deleted from the database.`})
    })
})

module.exports = router
