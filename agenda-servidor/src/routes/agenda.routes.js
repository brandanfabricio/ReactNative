const {ControladorAgenda} = require("../controller");
const {Router} =require('express')
const router = Router();

router.get('/',ControladorAgenda.Todos_recordatorio);
router.post('/add',ControladorAgenda.Guardar_Recordatorio);
router.put('/update/:id',ControladorAgenda.Editar_Recordatorio);
router.delete('/delecte/:id',ControladorAgenda.Eliminar_Recordatorio);





module.exports = router 