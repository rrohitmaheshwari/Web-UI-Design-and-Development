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
  tx.executeSql("INSERT INTO hSPA (fname, lname, age, gender, photo) VALUES (?,?,?,?,?)", 
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
      // alert("Record Updated");
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
        try{
        var row = data.rows.item(0);

        var UPbutton = document.getElementById("uploadData");
        UPbutton.disabled = false;

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
     }
     catch(err){
   var table = document.getElementById("ReportTable").getElementsByTagName('tbody')[0];
        table.innerHTML="";
        let row = table.insertRow(0);
        let name = row.insertCell(0);

        let age = row.insertCell(1);
        let gender = row.insertCell(2);
        let photo = row.insertCell(3);
        let medication = row.insertCell(4);
        let notes = row.insertCell(5);  

        name.innerHTML="No Data in Offline Table";
        var UPbutton = document.getElementById("uploadData");
        UPbutton.disabled = true;

     }

     });
  });

  $.ajax({
    type:'GET',
      url:"http://microscopical-offse.000webhostapp.com/syncDB.php", //php page URL where we post this data to save in databse
      success: function(result){

        var table = document.getElementById("ReportTable2").getElementsByTagName('tbody')[0];
        table.innerHTML="";


        for(var j=0;j<result.length;j++)
        {
          let row = table.insertRow(0);

          let name = row.insertCell(0);
          let age = row.insertCell(1);
          let gender = row.insertCell(2);
          let photo = row.insertCell(3);
          let medication = row.insertCell(4);
          let notes = row.insertCell(5);    

          name.innerHTML=result[j]["name"];
          age.innerHTML=result[j]["age"];
          gender.innerHTML=result[j]["gender"];
          photo.innerHTML="<a href='"+result[j]["photo"]+"' download=\"Image.jpg\">Image</a>"
          medication.innerHTML=result[j]["medication"];
          notes.innerHTML=result[j]["notes"];

        }
      },
      error: function (err) {
        alert("Cannot connect to  OnlineDB");
        var table = document.getElementById("ReportTable2").getElementsByTagName('tbody')[0];
        table.innerHTML="";
        let row = table.insertRow(0);
        let name = row.insertCell(0);

        let age = row.insertCell(1);
        let gender = row.insertCell(2);
        let photo = row.insertCell(3);
        let medication = row.insertCell(4);
        let notes = row.insertCell(5);  

        name.innerHTML="Unable to Sync Data";
      },
    })



}


//Delete the table method
DELETENotesTable = function()
{
  db.transaction(function(tx){
    tx.executeSql(
      "DELETE from hSPA", [],
      function(){ alert('Successfully transmitted data to OnlineDB!');
             var table = document.getElementById("ReportTable").getElementsByTagName('tbody')[0];
        table.innerHTML="";
        let row = table.insertRow(0);
        let name = row.insertCell(0);

        let age = row.insertCell(1);
        let gender = row.insertCell(2);
        let photo = row.insertCell(3);
        let medication = row.insertCell(4);
        let notes = row.insertCell(5);  

        name.innerHTML="No Data in Offline Table";
loadReport();
         },
      function(tx, error){ } );
  });
};



// Generate Report
sendReportDB = function(){

  var flag=false;
  db.transaction(function(tx) {
    tx.executeSql('SELECT fname, lname, age, gender, photo, medication, notes FROM hSPA', [],
      function(SQLTransaction, data){
        var row = data.rows.item(0);

        for (var i = 0; i < data.rows.length; i++){

         let name =data.rows.item(i)["fname"]+" "+data.rows.item(i)["lname"];
         let age=data.rows.item(i)["age"];
         let gender=data.rows.item(i)["gender"];
         let photo=data.rows.item(i)["photo"]
         let medication =data.rows.item(i)["medication"];
         let notes =data.rows.item(i)["notes"];

         $.ajax({
          type:'POST',
          data:{name:name,age:age,gender:gender,photo:photo,medication:medication,notes:notes},
      url:"http://microscopical-offse.000webhostapp.com/syncDB.php", //php page URL where we post this data to save in databse
      success: function(result){

          flag= true;
          console.log(result);
        },
        error: function (err) {
                console.log(err);
          alert("Cannot connect to  OnlineDB");
        },
      })

       }

     });


setTimeout(function(){
  if(flag){
 DELETENotesTable();
  }


},4000);


  }



  );
}

$(function(){
  connectToDB();
  createNotesTable();
});
