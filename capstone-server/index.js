const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "capstone"
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    
    
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
             return res.sendStatus(500);
        }
        if(data.length > 0) {
            res.send('Login Successful');
        } else {
            res.status(401).send("Invalid credentials");
        }
    });
});

//inserting data
app.post('/appointments/add', (request, response) => {

    const ownerName = request.body.ownerName;
    const contactNum = request.body.contactNum;
    const petName = request.body.petName;
    const petType = request.body.petType;
    const serviceType = request.body.serviceType;
    const groomerName = request.body.groomerName;
    const date = request.body.date;
    const time = request.body.time;

    const sqlInsert = "INSERT INTO appointments (ownerName, contactNum, petName, petType, serviceType, groomerName, date, time) VALUES (?, ?, ?, ?, ?, ?, ?,?)";

    db.query(sqlInsert, [ownerName, contactNum, petName, petType, serviceType, groomerName, date, time], (err, result) => {
        if (err) {
            console.log("error");
        } else {
            response.send(result);
;        }
    })
});

app.listen(PORT, () => {
    console.log(`running on server ${PORT}`);
});