let mysql = require('mysql');

//Býr til tenginguna við Data Base
let db = mysql.createConnection({
  host: "skolahysing.com",
  user: "nodejs",
  database: "nodejs",
  password: "sQu$y9IgQl8cXdPE"
});


let sql = "CALL users()";

db.query(sql, true, (error, results, fields) => {
  if (error){
    return console.error(
      error.message
    );
  }
  console.log(results[0][1]['name']);
});

db.end();