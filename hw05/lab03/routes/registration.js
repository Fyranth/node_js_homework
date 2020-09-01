const express = require('express');
const router = express.Router();
 
router.post('/registration', (req, res)=>{
    const { login, email, password } = req.body;
    res.send(`<p>Вы зарегистрированы! \n 
    Данные регистрации: \n
    Логин: ${login}
    Email: ${email}</p>`)
}); 
 
module.exports = router;