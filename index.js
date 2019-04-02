const mysql = require('mysql')

const connectBtn = document.getElementById("connect");

connectBtn.addEventListener('click', function(){
  console.log("Conneting...")
  var connection = mysql.createConnection({
    host: "",
    user: '',
    password: '',
    database: ''
  })

  connection.connect(function(err){
    if(err){
      return console.log(err)
    }
    console.log("Connection created Successfully.");
  })

  // Here will be our queries

  queryString = 'select * from `users`;';
  connection.query(queryString, function(err, rows, fields){
    if(err){
      console.log("An error while qiery", err)
    }
    r = []
    for(var i = 0; i < rows.length; i++){
      r.push( `
        <tr>
          <td>${rows[i].email}</td>
        </tr>
      `)
    }
    document.getElementById("tableBody").innerHTML = r.join(" ");
  })

  connection.end(function(){
    console.log("Connection closed Successfully.")
  })

})