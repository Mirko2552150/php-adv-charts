<?php

  include 'data.php';
  header('Content-Type: application/json'); // ci permette di visualizzare meglio il conntenuto JSON
  echo json_encode($graphs);
  
 ?>
