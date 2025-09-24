# COMO CREAR UN SERVIDOR CON NODEJS Y EXPRESS
Aqui las instrucciones de como levantar un servidor utilizando NodeJS y Express
## INSTALACION DE DEPENDENCIAS
Antes de levantar el servidor debemos instalar:
### 1. Xampp (opcional)
No es necesario instalar esto para levantar el servidor, ya lo comprobe!

Tenemos dos opciones, instalarlo desde la terminal con el siguiente comando:
```bash
winget install --id ApacheFriends.XAMPP
```
o lo instalamos descargando el .exe desde la pagina oficial
```link
https://www-apachefriends-org.translate.goog/download.html?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc
```
## CREACION DE NUESTRO PROYECTO
1. Creamos la ubicacion donde vamos a guardar todos los archivos de nuestro proyecto, puede ser en cualquier lado.
2. Abrimos una terminal en nuestra ruta con click derecho > nueva terminal
3. En la terminal ejecutamos el siguiente comando:
```bash
npm -v
```
Esto para revisar si tenemos node js ya instalado, si nos deveulve alguna version estamos bien, en dado caso diga que el comando no se encuentra ejecutar el siguiente comando:
```bash
winget install nodejs
```

Esto instalara node js y todas su dependencias principales. Reiniciar la terminal para ver los cambios.

4. Ahora vamos a iniciar nuestro proyecto con el siguiente comando:
```bash
npm init
```
Esto nos pedira algunos datos en consola para crear nuestro servidor, simplemente podemos darle enter a todo.

5. vamos a instalar todas las dependecias extra para nuestro proyecto, ejecutamos los siguientes comandos:
  Para instalar express:
```bash
npm i express
```
  Para instalar nodemon para no estar escribiendo el comando de ejecucion:
```bash
npm i -D nodemon
```
  El parametro -D es para instalar este modulo como una dependencia de desarrollo, o sea que no sea necesario a la hora de ejecutar el servidor
  
  Para instalar ejs y ver el formulario:
```bash
npm i ejs
```

6. Abrimos VsCode con el siguiente comando:
```bash
code .
```
7. Con esto podemos tirar codigo XD. Creamos nuestro archivo index.js.
8. La estructura debe ser similar a los archivos de este repositorio.
9. Hacer los siguientes cambios en el script del package.json:
```script
  "scripts" : {
    "test" : "echo \"Error: no test specified\" && exit 1"
  }
```
Por:
```script
  "scripts": {
    "start": "index.js",
    "dev": "nodemon index.js"
  }
```

Con esto deberia de funcionar el servidor!!!
