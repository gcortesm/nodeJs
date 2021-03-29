NPM => NODE PACKAGE MANAGER

npm es el manejador de paquetes por defecto para nodejs 

que desde la version 0.16 de node viene incluido en la instalacion de node.

como instalar npm en linux

sudo apt install npm.

podriamos decir que npm es un proyecto enorme de dos parte
npm cli (command line interface)
npm el repositorio enorme con mas de 1.000.000  de modulos 

ahora que deberiamos hacer siempre que vamos a crear un proyecto.

podriamos usar npm init, y con este comando creamos una configuracion inicial para nuestro proyecto. 

aunque inicialmente era un manejador solo para nodejs , ya se utiliza de manera masiva para el manejo de aplicacion frontend.

npm init, nos crea la siguiente estructura de archivo.


{
  "name": "testnpm",
  "version": "1.0.0",
  "description": "Esta es una prueba con NPM",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Gustavo Adolfo Cortes Mondragon",
  "license": "ISC"
}


control de versiones semnatico con NPM
^: Solo hará actualizaciones que no cambien el número distinto de cero del extremo izquierdo. Si se escribe ^0.13.0, cuando se ejecuta npm update, se puede actualizar a 0.13.1, 0.13.2y así sucesivamente, pero no a 0.14.0o por encima.
~: si escribe ~0.13.0cuando se ejecuta, npm updatese puede actualizar a las versiones de parche: 0.13.1está bien, pero 0.14.0no lo está.
>: acepta cualquier versión superior a la especificada
>=: acepta cualquier versión igual o superior a la que especifique
<=: acepta cualquier versión igual o inferior a la que especifique
<: acepta cualquier versión anterior a la que especifique
=: aceptas esa versión exacta
-: acepta una variedad de versiones. Ejemplo:2.1.0 - 2.6.2
||: combinas conjuntos. Ejemplo:< 2.1 || > 2.6

npm install <packagename>  => esto nos instala la ultima version del paquete 
pero puedeser que tambien queramos una version en especifico.
npm install [package]@[version] => De esta manera podemos tener una version especifica.


no solo podemos usar directamente desde el repositorio de npm, tambien podemos hacer uso 
de repositorios de github de la siguiente manera

npm install nombre_usurio/reposito#conpm mmit.
npm install ./tar.gz

vemos que se genero un package-lock.json.
y cual es la unica finalidad de este archivo, tener de manera especifica la relacion 
de las versiones exactas que se usaron en el proyecto 
para que, para poder  replicar de manera exacta la configuracion 
de una maquina en otra donde se ejecute el proyecto.
 
evitar el 'en mi maquina funciona'

##Flags de npm install 
--save-dev o -D
--save-prod o -P
--save-optional o -O
--no-save
--save-exact o -E
--save-bundle o -B



ahora antes de continuar se puede tener en cuenta que las instalaciones 
se pueden hacer de manera global. o de manera local 

npm install -g <packagename>
npm install -g [package]@[version] podemos usar los caracteres epsciales de versionamiento (@">=0.1.0 <0.2.0") todo entrecomillas para que 
se trate como un solo parametro.

el suso de el flag --production

npm root -g 
nos muestra el directorio local donde se instalan los paquetes que se instalaron de manera global

el npm install podemos usarlo con algunos flags 

dependecies => Se instalan de manera transitiva.
devdependencies => no se instalan de manera transitiva.


ahora cuando ya tenemos un packag.json

podemos ejecutar nuestro npm install y este usa el package.json para instalar las dependencias

--prod instala solo dependencies excluytendo lo demas
--only=prod => instala solo prod equivaldira a --production
--also=dev  => incluye devdependencies
--no-optional => no instala las dependencias optionales
--no-save no guarda
--dry-run no instala nada solo crea los directoriso


podemos tambien usar 
npm install-test


npm ci 

es como un equivalente a npm install pero resulta ser mucho mas rapido
esta pensado para entornos que utilicen integracion continua.
elimina el node_modules si existe, 
no genera un packag-lock

npm install-ci-test






##Npm list
npm list 

con este comando listamos todo lo que tenemos instalada en nuestro package
podemos usar npm list [namepackage]

esto basicamente nos sirve para ver el arbol de dependencias

## Npm update 
nos actualiza segun los simbolos de marca que hemos definido antes de la version

## Npm outdated

Llevamos depronto mucho tiempo trabajando en un proyecto y tiempo es que no hacemos un update de las dependencias 
queremos saber si ha salido una nueva version para uno de los paquetes que hemos estado utilizando.

#npm Uninstall pues ya es el que hemos estado usando 



ahora una vista rapida a npx 

con npx no necesitamos instalar nada.

npx @vue/cli create my-vue-app
npx cowsay 'Holi'


npm audit
con esto detectamos si ahy potenciales vulnerabilidades
el nos sugiere el comando que debemos ejecutar para hacer la actualizacion.npm bin -global


npm run scripts
npm start
npm stop
npm restart => Esto tiene un ciclo prerestart, restart, postrestart , si no encuentra el trata de ejecutar stop. and start



C:\Users\gucortez\Documents