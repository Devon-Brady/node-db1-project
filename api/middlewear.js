const Accounts = require('./accounts/accounts-model');



async function validateAccountId(req, res, next) {
    const {id} = req.params
    try{
      const account = await Accounts.getById(id)
      if(!account){
        res.status(400).json({message:`No account with Id: ${id}`})
      } else{
        req.accounts = account
        next()
      }
    }catch(err){
      res.status(500).json(`Server error:${err}`)
    }
  }


 function validateAccountBody(req, res, next) {
    const {name} = req.body
    if(!name){
      res.status(400).json({message:`Account must contain a name`})
    } else {
      next()
    }
  }  

module.exports ={
    validateAccountBody,
    validateAccountId
}