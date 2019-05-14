# angular_sqlserver_crud

## Proyecto final - Base de datos

<br>

### Descripcion del proyecto

Aplicacion CRUD (Create, Read, Update, Delete) para una peluqueria. <br>
Permite crear empleados, clientes, cosmeticos, etc. Asi como editarlos y eliminarlos. 
Ademas de mostrar de forma amigable al usuario la informacion de las tablas de la base de datos. 

<br>

### Screenshots

![peluqueria1](https://user-images.githubusercontent.com/30305964/57485391-3c4c1200-7271-11e9-901d-a35f651956fa.PNG)

![peluqueria2](https://user-images.githubusercontent.com/30305964/57485559-9947c800-7271-11e9-99e2-9ec609576b56.PNG)

![peluqueria3](https://user-images.githubusercontent.com/30305964/57485595-b67c9680-7271-11e9-8a41-f663b6c15c14.PNG)

![peluqueria4](https://user-images.githubusercontent.com/30305964/57485608-be3c3b00-7271-11e9-97d9-52a988595534.PNG)

![peluqueria5](https://user-images.githubusercontent.com/30305964/57485623-cac09380-7271-11e9-9bc7-1657ad92ede5.PNG)

![peluqueria6](https://user-images.githubusercontent.com/30305964/57485639-d318ce80-7271-11e9-9df2-6a122522bdc2.PNG)




### Estructura del proyecto

Siguiendo el patron de diseño MVC (Modelo Vista Controlador), se crearon 3 carpetas. 
<ol>
  <li>client - Vista</li>
  <li>database - Modelo</li>
  <li>server - Controlador</li>
 </ol>

#### database

Contiene el script de SQL para crear la base de datos. Se ejecuta en SQL Server Management Studio. 

#### server

Desarrollado con Nodejs. Este servidor contiene una rest API local que recibe peticiones http, y segun las peticiones realizadas, manda diferentes querys a la base de datos. 

#### client

Desarrollado con el framework frontend Angular 7<br>
La informacion se obtiene usando servicios que utilizan el protocolo Http para mandar peticiones al server, que contiene la API. 


#### Instrucciones de uso

<ol>
  <li>Contar con el software necesario: nodejs, Angular, SQL Server Management Studio</li>
  <li>Colocarse dentro de la carpeta server y ejecutar <code>npm install</code> para descargar las dependencias.<br></li>
  <li>Colocarse dentro de la carpeta server y ejecutar <code>node server.js</code><br>Este comando realiza la conexion a la base de datos (manejada por SQL Server) y mantiene activa la API. Representa un servidor en la vida real, pero localmente</li>
  <li>Aplicacion frontend. Colocarse en la carpeta client y ejecutar <code>npm install</code> para instalar las dependencias. <br>Despues <code>ng serve</code> para lanzar la aplicacion. Generalmente se abrirá en el puerto :4200</li>
</ol>



