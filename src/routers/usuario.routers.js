const {Router}=require("express");
const router=Router();

const libroCtrl=require("../controller/user.controller");
router.get("/usuario",libroCtrl.getuser);
router.get("/todo",libroCtrl.gettodo);
router.post("/usuario",libroCtrl.postusuario);
router.put("/usuario",libroCtrl.putusuario);
router.delete("/usuario",libroCtrl.deleteusuario);

module.exports=router;