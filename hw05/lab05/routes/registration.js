const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('registration')
})

router.post('/registration', (req, res)=>{
    const { login } = req.body;
    res.render('success', { login });
}); 
 
module.exports = router;