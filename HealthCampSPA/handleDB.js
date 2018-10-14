// Database reference
var db = null;

// Creates a connection to the local database
connectToDB = function()
{
   db = window.openDatabase('cmpe280_HealthSPA', '1.0',
                                   'cmpe280_HealthSPA Database', 1024*1024*3);
};


//Create the table method
createNotesTable = function()
{
  db.transaction(function(tx){
    tx.executeSql(
      "CREATE TABLE hSPA (fname TEXT,lname TEXT,age INTEGER,gender TEXT,photo TEXT, medication TEXT, notes TEXT)", [],
      function(){ alert('Offline database created successfully!'); },
      function(tx, error){ } );
  });
};


//Insert record into Table.
insertRecord = function(fname, lname, age, gender, photo)
{
   db.transaction(function(tx){
      tx.executeSql("INSERT INTO hSPA (fname, lname, age, gender, photo) VALUES (?, ?,?,?,?)", 
                     [fname, lname, age, gender, photo],
        function(tx, result){ 
        	alert("Record Saved");
        	localStorage.setItem('insertId',result.insertId);
        },
        function(){ 
          alert('The data could not be saved.'); 
        }
      );
   });
};


//Update record in Table.
updateRecord = function(medication, notes)
{
   var id  = localStorage.getItem('insertId')
   db.transaction(function(tx){
    tx.executeSql("UPDATE hSPA set medication = ?, notes = ? where rowid = ?",
                  [medication, notes, id],
      function(tx, result){ 
         	alert("Record Updated");
      },
      function(){ 
        alert('The note was not updated!');
      }
    );
  });
};



// Generate Report
loadReport = function(){
  db.transaction(function(tx) {
    tx.executeSql('SELECT fname, lname, age, gender, photo, medication, notes FROM hSPA', [],
      function(SQLTransaction, data){
        var row = data.rows.item(0);


    var table = document.getElementById("ReportTable").getElementsByTagName('tbody')[0];
   		table.innerHTML="";


        for (var i = 0; i < data.rows.length; i++){
			let row = table.insertRow(0);
			
			let name = row.insertCell(0);
			let age = row.insertCell(1);
			let gender = row.insertCell(2);
			let photo = row.insertCell(3);
			let medication = row.insertCell(4);
			let notes = row.insertCell(5);    

			name.innerHTML=data.rows.item(i)["fname"]+" "+data.rows.item(i)["lname"];
			age.innerHTML=data.rows.item(i)["age"];
			gender.innerHTML=data.rows.item(i)["gender"];
			photo.innerHTML="<a href='"+data.rows.item(i)["photo"]+"' download=\"image.jpg\" >Image</a>"
			medication.innerHTML=data.rows.item(i)["medication"];
			notes.innerHTML=data.rows.item(i)["notes"];
        }

      });
  });
}

$(function(){
  connectToDB();
  createNotesTable();
});