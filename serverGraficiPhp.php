<?php

  include 'data.php';
  header('Content-Type: application/json'); // ci permette di visualizzare meglio il conntenuto JSON

  $tipo_line = $graphs[fatturato]['type'];

  $fatturati = [];
  foreach ($graphs[fatturato] as $key => $value) {
    foreach ($value as $key2 => $value2) {
      $fatturati[] = $value2;
      // echo json_encode($value2); // stampo i 12 fatturati

    }
  }

  $tipo_pie = $graphs[fatturato_by_agent]['type'];

  $venditori = [];
  $fatturati_venditori = [];
  foreach ($graphs[fatturato_by_agent] as $key => $value) {
    foreach ($value as $key2 => $value2) {
      $venditori[] = $key2;
      $fatturati_venditori[] = $value2;
    }
  }

  echo json_encode(array($fatturati,$tipo_line, $tipo_pie, $venditori, $fatturati_venditori));
 ?>
