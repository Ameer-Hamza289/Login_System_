const { Signup,Login}  = require("../Controllers/AuthControllers");
const router = require("express").Router();
const {userVerification}=require('../Middlewares/authMiddleware')

router.post("/signup", Signup);
router.post('/login',Login);
router.post('/',userVerification)

module.exports = router;