const {Router}=require("express");
const router=Router();

const libroCtrl=require("../controller/user.controller");
router.get("/usuario",libroCtrl.getuser);
router.get("/todo",libroCtrl.gettodo);

module.exports=router