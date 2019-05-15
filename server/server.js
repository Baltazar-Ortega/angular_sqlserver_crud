//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    server: "localhost\\SQLEXPRESS",
    database: "peluqueria",
    user: "sa",
    password: "sqlserver2012"
};


//Function to connect to database and execute query
var executeQuery = function(res, query){            
  new sql.ConnectionPool(dbConfig).connect().then(pool => {
    return pool.request().query(query).then(result =>{
      res.send(result);
      sql.close();
    }).catch(err => {
      res.status(500).send(err);
      sql.close();
    })
  })
  /*
    sql.connect(dbConfig, (err) => {
       console.log('Comenzó conexion');
        if (err) {   
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
        else {
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(query, function(err, rs) {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                    sql.close();
                }
                else {
                    res.send(rs);
                    sql.close();
                }
            });
        }
      });        
      */
} 


// Empleados

//GET API
app.get("/api/empleado", function(req , res){
                var query = "select emp.dni AS 'dni', emp.nombre AS 'nombre', esp.descripcion as 'especialidad' FROM empleado emp JOIN especialidad esp ON esp.id = emp.especialidad";
                executeQuery(res, query);
});

app.get("/api/empleado/:id", function(req , res){
    var  id  = req.params.id;
    var query = "select * from empleado WHERE dni = " + id;
    executeQuery(res, query);
});

//POST API
 app.post("/api/empleado", function(req , res){
        console.log(req.body);
                var nombre = req.body.nombre;
                var apellido_paterno = req.body.apellido_paterno;
                var apellido_materno = req.body.apellido_materno;
                var especialidad = req.body.especialidad;
                // console.log(typeof especialidad); number
                var query = "INSERT INTO empleado VALUES ('" + nombre + "', '"+apellido_paterno+"', '"+apellido_materno+"', "+especialidad+")";
                console.log('Query puesta', query); 
                executeQuery (res, query);
});

//PUT API
 app.put("/api/empleado/:id", function(req , res){
                var query = "UPDATE empleado SET nombre = '" + req.body.nombre  +  "' , apellido_paterno = '"+req.body.apellido_paterno + "', apellido_materno = '"+req.body.apellido_materno + "', especialidad =  " + req.body.especialidad + "  WHERE dni = " + req.params.id;
                console.log(query);
                executeQuery (res, query);
});

// DELETE API
 app.delete("/api/empleado/:id", function(req , res){
                var query = "DELETE FROM empleado WHERE dni =" + req.params.id;
                executeQuery (res, query);
});
 


// Clientes

//GET API
app.get("/api/cliente", function(req , res){
    var query = "select * FROM cliente";
    executeQuery(res, query);
});

app.get("/api/cliente/:id", function(req , res){
var  id  = req.params.id;
var query = "select * from cliente WHERE dni = " + id;
executeQuery(res, query);
});

//POST API
app.post("/api/cliente", function(req , res){
console.log(req.body);
    var nombre = req.body.nombre;
    var apellido_paterno = req.body.apellido_paterno;
    var apellido_materno = req.body.apellido_materno;
    var profesion = req.body.profesion;
    var telefono = req.body.telefono;
    var calle = req.body.calle;
    var colonia = req.body.colonia;
    var numero_casa = req.body.numero_casa;
    var tratamientos_medicos = req.body.tratamientos_medicos;
    // console.log(typeof especialidad); number
    var query = "INSERT INTO cliente VALUES ('" + nombre + "', '"+apellido_paterno+"', '"+apellido_materno+"', '"+profesion+"', '";
    query += telefono + "', '"+calle+"', '"+colonia+"', '"+numero_casa+"', '"+tratamientos_medicos+"')";
    console.log('Query puesta', query); 
    executeQuery (res, query);
});

//PUT API
app.put("/api/cliente/:id", function(req , res){
    var nombre = req.body.nombre;
    var apellido_paterno = req.body.apellido_paterno;
    var apellido_materno = req.body.apellido_materno;
    var profesion = req.body.profesion;
    var telefono = req.body.telefono;
    var calle = req.body.calle;
    var colonia = req.body.colonia;
    var numero_casa = req.body.numero_casa;
    var tratamientos_medicos = req.body.tratamientos_medicos;
    var query = "UPDATE cliente SET nombre = '" + nombre  +  "' , apellido_paterno = '"+apellido_paterno + "', apellido_materno = '"+apellido_materno + "', profesion = '";
    query += profesion + "', telefono = '"+telefono+"', calle = '"+calle+"', colonia = '"+colonia+"', numero_casa = '"+numero_casa+"', tratamientos_medicos = '"+tratamientos_medicos+"' ";
    query += "WHERE dni = " + req.params.id;
    console.log(query);
    executeQuery (res, query);
});

// DELETE API
app.delete("/api/cliente/:id", function(req , res){
    var query = "DELETE FROM cliente WHERE dni =" + req.params.id;
    executeQuery (res, query);
});


// Citas

//GET API
app.get("/api/cita", function(req , res){
  var query = "select ci.id AS 'id', ci.fecha_hora AS 'fecha_hora', cl.nombre AS 'nombre_cliente', emp.nombre AS 'nombre_empleado' FROM cita ci JOIN empleado emp ON emp.dni = ci.dni_empleado JOIN cliente cl ON cl.dni = ci.dni_cliente";
  executeQuery(res, query);
});

app.get("/api/cita/:id", function(req , res){
var  id  = req.params.id;
var query = "select ci.id AS 'id', ci.fecha_hora AS 'fecha_hora', cl.nombre AS 'nombre_cliente', emp.nombre AS 'nombre_empleado' FROM cita ci JOIN empleado emp ON emp.dni = ci.dni_empleado JOIN cliente cl ON cl.dni = ci.dni_cliente from cita WHERE ci.id = " + id;
executeQuery(res, query);
});

//POST API
app.post("/api/cita", function(req , res){
console.log(req.body);
  var fecha_hora = req.body.fecha_hora;
  var dni_cliente = req.body.dni_cliente;
  var dni_empleado = req.body.dni_empleado;
  var query = "INSERT INTO cita VALUES (DATETIMEFROMPARTS(2019, 3, 12, 21, 30, 0, 0), "+dni_cliente+", "+dni_empleado+")";
  console.log('Query puesta', query); 
  executeQuery (res, query);
});

//PUT API
app.put("/api/cita/:id", function(req , res){
  var fecha_hora = req.body.fecha_hora;
  var dni_cliente = req.body.dni_cliente;
  var dni_empleado = req.body.dni_empleado;
  var query = "UPDATE cita SET fecha_hora = " + fecha_hora  +  " , dni_cliente = "+dni_cliente + ", dni_empleado = "+ dni_empleado;
  query += " WHERE id = " + req.params.id;
  console.log(query);
  executeQuery (res, query);
});

// DELETE API
app.delete("/api/cita/:id", function(req , res){
  var query = "DELETE FROM cita WHERE id =" + req.params.id;
  executeQuery (res, query);
});

// Servicios

//GET API
app.get("/api/servicio", function(req , res){
  var query = "SELECT ser.id AS 'id', cl.nombre AS 'nombre_cliente', emp.nombre AS 'nombre_empleado', ser.fecha_hora AS 'fecha_hora', ser.servicio AS 'servicio' FROM servicio ser JOIN cliente cl ON cl.dni = ser.dni_cliente JOIN empleado emp ON emp.dni = ser.dni_empleado";
  executeQuery(res, query);
});

app.get("/api/servicio/:id", function(req , res){
  var  id  = req.params.id;
  var query = "SELECT ser.id AS 'id', cl.nombre AS 'nombre_cliente', emp.nombre AS 'nombre_empleado', ser.fecha_hora AS 'fecha_hora', ser.servicio AS 'servicio' FROM servicio ser JOIN cliente cl ON cl.dni = ser.dni_cliente JOIN empleado emp ON emp.dni = ser.dni_empleado WHERE id = " + id;
  executeQuery(res, query);
});

// Cosmeticos

//GET API
app.get("/api/cosmetico", function(req , res){
  var query = "select * FROM cosmetico";
  executeQuery(res, query);
});

app.get("/api/cosmetico/:id", function(req , res){
  var  id  = req.params.id;
  var query = "select * from cosmetico WHERE codigo = " + id;
  executeQuery(res, query);
});

//POST API
app.post("/api/cosmetico", function(req , res){
console.log(req.body);
  var nombre = req.body.nombre;
  var cantidad = req.body.cantidad;
  var PRECIO = req.body.PRECIO;
  // console.log(typeof especialidad); number
  var query = "INSERT INTO cosmetico VALUES ('" + nombre + "', "+cantidad+", "+PRECIO+") ";
  console.log('Query puesta', query); 
  executeQuery (res, query);
});

//PUT API
app.put("/api/cosmetico/:id", function(req , res){
  var nombre = req.body.nombre;
  var cantidad = req.body.cantidad;
  var PRECIO = req.body.PRECIO;
  var query = "UPDATE cosmetico SET nombre = '" + nombre  +  "' , cantidad = "+cantidad + ", PRECIO = "+PRECIO;
  query += " WHERE codigo = " + req.params.id;
  console.log(query);
  executeQuery (res, query);
});

// DELETE API
app.delete("/api/cosmetico/:id", function(req , res){
  var query = "DELETE FROM cosmetico WHERE codigo =" + req.params.id;
  executeQuery (res, query);
});

// Ventas

//GET API
app.get("/api/venta", function(req , res){
  var query = "select v.id AS 'id', v.comision AS 'comision', ci.nombre AS 'cliente_nombre', emp.nombre AS 'empleado_nombre', co.nombre AS 'cosmetico_nombre' ";
  query += "FROM venta v JOIN cliente ci ON ci.dni = v.dni_cliente JOIN empleado emp ON emp.dni = v.dni_empleado JOIN cosmetico co ON co.codigo = v.codigo_cosmetico";
  console.log(query); 
  executeQuery(res, query);
});

app.get("/api/venta/:id", function(req , res){
var  id  = req.params.id;
var query = "select v.id AS 'id', v.comision AS 'comision', ci.nombre AS 'cliente_nombre', emp.nombre AS 'empleado_nombre', co.nombre AS 'cosmetico_nombre' FROM venta v JOIN cliente ci ON ci.dni = v.dni_cliente JOIN empleado emp ON emp.dni = v.dni_empleado JOIN cosmetico co ON co.codigo = v.codigo_cosmetico WHERE id = " + id;
executeQuery(res, query);
});



