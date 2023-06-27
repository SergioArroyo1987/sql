const {Router}=require("express");
const router=Router();

const libroCtrl=require("../controller/notas.controller");
router.get("/notas",libroCtrl.getmedia);
router.get("/apuntada",libroCtrl.getapuntada);
router.get("/impartida",libroCtrl.getimpartida);


module.exports=router;