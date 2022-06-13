const pool = require("../db");

 
class Agenda{

   async Todos_recordatorio(req,res){

     let data = await pool.query('select * from  agenda');
      
        res.json(data)
    
   }


   async Guardar_Recordatorio(req,res){
         const {body} = req;
         
            await pool.query('insert into agenda set ?',body);
           
            
           
       res.json({
                      succect : 'Dato guardado'
                  })
                    
   }


   async Editar_Recordatorio(req,res){
       const {id}=req.params;
       const {body} = req;
      console.log(body)
        await pool.query('update agenda set ? where id = ?',[body,id]) 
       res.json({
         
          succet :"Dato actualizado"
       })

   }

   async Eliminar_Recordatorio(req,res){
      const {id} = req.params;
       await pool.query('DELETE  from agenda where id = ?',id)
      res.json({
         succest: "Dato eliminado"
      })
   }

}


module.exports = new Agenda;