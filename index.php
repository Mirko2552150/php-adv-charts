<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP ADV CHARTS</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <div class="container">
      <div class="box-line">
        <canvas id="line-chart"></canvas>
      </div>
    </div>
    <div class="container">
      <div class="box-line">
        <?php include "database.php" ?>
        <?php echo $data ?>
        <canvas id="line-chart-due" data-database="<?php echo json_encode($data); ?>"></canvas>
      </div>
    </div>
    <div class="container">
      <div class="box-line">
        <canvas id="line-chart-tre"></canvas>
      </div>
    </div>
    <div class="container">
      <div class="box-line">
        <canvas id="line-chart-quattro"></canvas>
      </div>
    </div>
    <div class="container">
      <div class="box-line">
        <canvas id="line-chart-cinque"></canvas>
      </div>
    </div>
    <div class="container">
      <div class="box-line">
        <canvas id="line-chart-sei"></canvas>
      </div>
    </div>
    <div class="container">
      <div class="box-line uno">
        <select class="selettore">
          <option value="guest">guest</option>
          <option value="employee">employee</option>
          <option value="clevel">clevel</option>
        </select>
        <button class="button" type="button" name="button">CERCA</button>
        <h4>PERMESSO UNO</h4>
        <canvas id="line-chart-sette"></canvas>
      </div>
    </div>
    <div class="container">
      <div class="box-line due">
        <h4>PERMESSO DUE</h4>
        <canvas id="line-chart-otto"></canvas>
      </div>
    </div>
    <div class="container">
      <div class="box-line tre">
        <h4>PERMESSO TRE</h4>
        <canvas id="line-chart-nove"></canvas>
      </div>
    </div>

    <script src="js/main.js" charset="utf-8"></script>
  </body>
</html>
