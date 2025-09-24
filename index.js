//Crear Instancia(o variable) de express llamando al modulo que instalamos
const express = require('express');

//Crear la intancia(o variable) de el servidor
const app = express();

//Crear La Instancia(o variable) del puerto(opcional)
const PORT = 3000 //Este puede ser cualquiera, recomendados 3000 o 3001

//Configuraciones del servidor:
app.set('view engine', 'ejs'); //Definimos el tipo de motor visual para visualizar en el navegador.
app.use(express.json()); //La decimos a mi servidor que lea archivos .json
app.use(express.urlencoded({extended: true})); //Configuracion de texto de los archivos json

//Creamos un modulo para enviar y recibir informacion de la pagina del servidor
//Modulo de prueba de envio de informacion
// app.get('/', (req, res) => {
//   res.send('Hola Mundo!'); //Texto de prueba
// })

// Modulos de envio y recepcion de informacion
app.get('/', (req, res) => {
  //Enviamos el formulario para que se muestre en el navegador
  res.render('formulario');
});

app.post('/', (req, res) => {
  //Creamos una instancia para guardar la informacion recibida desde la pagina web
  const data = req.body;

  //Imprimimos la informacion recibida en consola para corroborar que todo funcione
  console.log(data);

  //Ya que se recibio la informacion le respondemos a la pagina web con un mensaje
  res.send("Datos Guardados!!");
})


//Hacemos que el servidor se mantenga escuchando o esperando actualizaciones con el metodo .listen()
app.listen(PORT, () => {
  //Imprimimos algo en consola para ver si funciona el servidor recomiendo imprimir el link de abajo para abrir la direccion del servidor y podamos acceder con la terminal sin abrir el navegador
  console.log('http://localhost:3000');

})
