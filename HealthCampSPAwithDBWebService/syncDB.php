<?php
	//Create connection
$connection = mysqli_connect('cmpe280.c9lm7pzydydb.us-east-1.rds.amazonaws.com','master','Password123','HealthSPA');


if($_SERVER['REQUEST_METHOD']==='POST'){
		$name = $_POST['name'];
		$age = $_POST['age'];
		$gender = $_POST['gender'];
		$photo = $_POST['photo'];
		$medication = $_POST['medication'];
		$notes = $_POST['notes'];

	
	$q = "INSERT INTO hSPA (name, age, gender, photo, medication, notes)  VALUES ('$name','$age','$gender','$photo','$medication','$notes')";
	
	$query = mysqli_query($connection,$q);
	if($query){
          // echo json_encode("Data Inserted Successfully");
		header('Content-Type: application/json');
	    print json_encode("Data Inserted Successfully");
	}
	else {
          // echo json_encode('Problem connecting DB');
		header('HTTP/1.1 500 Internal Server Booboo');
		header('Content-Type: application/json; charset=UTF-8');
		die(json_encode(array('message' => 'Problem connecting DB', 'code' => 1337)));
	}
}



if($_SERVER['REQUEST_METHOD']==='GET'){
	$q = "SELECT name, age, gender, photo, medication, notes FROM hSPA";
	$result = $connection->query($q);

	$return_arr = array();
	if ($result->num_rows > 0) {
		header('Content-Type: application/json');

	    while($row = $result->fetch_assoc()) {
	        
			$row_array['name'] = $row['name'];
			$row_array['age'] = $row['age'];
			$row_array['gender'] = $row['gender'];
			$row_array['photo'] = $row['photo'];
			$row_array['medication'] = $row['medication'];
			$row_array['notes'] = $row['notes'];
			array_push($return_arr,$row_array);
	    }		
		print json_encode($return_arr);

	}
else {
	header('HTTP/1.1 500 Internal Server Booboo');
		header('Content-Type: application/json; charset=UTF-8');
		die(json_encode(array('message' => 'Problem connecting DB', 'code' => 1337)));
}
}

?>