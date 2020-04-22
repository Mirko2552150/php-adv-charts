<?php

  include 'database.php'; // includo file dove abbiamo un ns database
  header('Content-Type: application/json'); // ci permette di visualizzare meglio il conntenuto JSON
  echo json_encode($data); // trasformiamo in file JSON

 ?>
