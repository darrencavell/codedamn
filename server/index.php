<?php

$data = json_decode(file_get_contents('php://input'), TRUE);

$username = $data['username'];
$password = $data['password'];

if($username == 'darren' && $password == 'darren'){
  echo 1;
}else{
  echo 0;
}

?>