<?php

  include 'dataLevel.php'; // includo file dove abbiamo un ns database
  header('Content-Type: application/json'); // ci permette di visualizzare meglio il contenuto JSON

  // GRAFICO UNO LEVEL
  $tipo_line = $graphs[fatturato]['type'];

  $fatturati = [];
  foreach ($graphs[fatturato] as $key => $value) {
    foreach ($value as $key2 => $value2) {
      $fatturati[] = $value2;
      // echo json_encode($value2); // stampo i 12 fatturati

    }
  }

  // GRAFICO DUE LEVEL
  $tipo_pie = $graphs[fatturato_by_agent]['type'];

  $venditori = [];
  $fatturati_venditori = [];
  foreach ($graphs[fatturato_by_agent] as $key => $value) {
    foreach ($value as $key2 => $value2) {
      $venditori[] = $key2;
      $fatturati_venditori[] = $value2;
    }
  }

  // GRAFICO TRE LEVEL
  $tipo_multiline = $graphs[team_efficiency]['type'];

  $team = [];
  $fatturati_team = [];
  foreach ($graphs[team_efficiency] as $key => $value) {
    foreach ($value as $key2 => $value2) {
      $team[] = $key2;
      $fatturati_team[] = $value2;
    }
  }

  echo json_encode(array($fatturati,$tipo_line, $tipo_pie, $venditori, $fatturati_venditori, $tipo_multiline, $team, $fatturati_team));

?>
