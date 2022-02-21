module.exports = (app) => {

   let tarea = [];
   app.locals.Tarea = tarea;
 
   app.get('/',(req, res) => {
      res.render('index', {
         titulo: 'Inicio'
      });
   });
 
   app.get('/nuevEntr',(req, res) => {
      res.render('nuevaEntr', {
         titulo: 'Nueva Entrada'
      });
   });
 
   app.post('/nuevEntr', (req, res) => {
      if (!req.body.titulo || !req.body.tarea) {
         res.send(400).send('Debes de llemar todos los campos :B');
      }
 
      let nuevaTarea = {
         titulo: req.body.titulo,
         tarea: req.body.tarea,
         publicado: new Date()
      }
 
      tarea.push(nuevaTarea);
 
      res.redirect('/');
   });
}