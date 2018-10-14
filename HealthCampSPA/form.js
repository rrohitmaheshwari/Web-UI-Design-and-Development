 $(document).ready(function(){

  $("#Demographics").click(function() {
      $('#DemographicsForm').css('display', 'block');
      $('#HealthVitalsForm').css('display', 'none');
      $('#ReportsForm').css('display', 'none');


      $("#HealthVitals").removeClass("active");
      $("#Reports").removeClass("active");
      $("#Demographics").addClass("active");


      $("#fname").val(""); 
      $("#lname").val(""); 
      $("#age").val(""); 
      $("#fname").val(""); 
      $("#other").val("");    

      $("#captureAnother").click();

  });

  $("#HealthVitals").click(function() {
      $('#DemographicsForm').css('display', 'none');
      $('#HealthVitalsForm').css('display', 'block');
      $('#ReportsForm').css('display', 'none');

      $("#Demographics").removeClass("active");
      $("#HealthVitals").addClass("active");
      $("#Reports").removeClass("active");


      $("#ht").val(""); 
      $("#wt").val(""); 
      $("#bt").val(""); 
      $("#pr").val(""); 
      $("#bp").val(""); 
      $("#medication").val(""); 
      $("#notes").val("");  

      stopWebcam();

  });

  $("#Reports").click(function() {
      $('#DemographicsForm').css('display', 'none');
      $('#HealthVitalsForm').css('display', 'none');
      $('#ReportsForm').css('display', 'block');

      $("#Demographics").removeClass("active");
      $("#HealthVitals").removeClass("active");
      $("#Reports").addClass("active");

      stopWebcam();

  });

    $("#capture").click(function() {
      $('#video').css('display', 'none');
      $('#myCanvas').css('display', 'block');
      $('#capture').css('display', 'none');
      $('#captureAnother').css('display', 'block');
 });
 
 $("#captureAnother").click(function() {
      $('#myCanvas').css('display', 'none');
      $('#video').css('display', 'block');
      $('#capture').css('display', 'block');
      $('#captureAnother').css('display', 'none');  
 });


  });


navigator.getUserMedia = ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);
var video;
var webcamStream;
var canvas, ctx;

      function startWebcam() {
        if (navigator.getUserMedia) {
           navigator.getUserMedia (
              {
                 video: true,
                 audio: false
              },

              function(localMediaStream) {
                  video = document.querySelector('video');
                 video.src = window.URL.createObjectURL(localMediaStream);
                 webcamStream = localMediaStream;
              },

              function(err) {
                 console.log("The following error occured: " + err);
              }
           );
        } else {
           console.log("getUserMedia not supported");
        }  
      }

      function stopWebcam() {
        webcamStream.getTracks().forEach(track => track.stop())
      }

      function init() {
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext('2d');
              
        startWebcam();
      }

      function snapshot() {
        ctx.drawImage(video, 0,0, canvas.width, canvas.height);
        
        stopWebcam();
      }

      function saveForm1() {
          var fname = document.getElementById("fname").value;
          var lname = document.getElementById("lname").value;
          var gender = document.getElementById("gender").value;
          var age = document.getElementById("age").value;

          var canvas = document.getElementById("myCanvas");
          var photo = canvas.toDataURL();
 
          insertRecord(fname, lname, age, gender, photo);

          document.getElementById("HealthVitals").click(); 
      }


      function saveForm2() {
          var medication = document.getElementById("medication").value;
          var notes = document.getElementById("notes").value;
 
          updateRecord(medication,notes);

          document.getElementById("Reports").click(); 
      }

      function loadForm3() {
         loadReport();
      }

