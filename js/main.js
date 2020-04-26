// PRIMO GRAFICO ----------------------------------------

$.ajax({
  url: 'server.php',
  method: 'GET',
  success: function(data){
    // console.log(data);
    getGraficoUno(data);
  },
  error: function(){
    alert('ERRORE');
  }
})

function getGraficoUno(dat) {
  var fatturatiMensili = dat;
  var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var ctx = $('#line-chart');
  var chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: mesi,
          datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: fatturatiMensili
          }]
      },
  });
}

// SECONDO GRAFICO ----------------------------------------

var dataDue = $('#line-chart-due').data('database');
var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
var ctx = $('#line-chart-due');
var chart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: mesi,
      datasets: [{
          label: 'My Second dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: dataDue
      }]
  },
});

// TERZO GRAFICO ----------------------------------------

$.ajax({
  url: 'serverGrafici.php',
  method: 'GET',
  success: function(data){
    getGraficoTre(data);
  },
  error: function(){
    alert('ERRORE');
  }
})

function getGraficoTre(dat) {
  var fatturatiMensili = dat.fatturato.data;
  var tipo = dat.fatturato.type
  // console.log(data.fatturato.data);
  // console.log(data.fatturato.type);
  var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var ctx = $('#line-chart-tre');
  var chart = new Chart(ctx, {
      type: tipo,
      data: {
          labels: mesi,
          datasets: [{
              label: 'My Third dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: fatturatiMensili
          }]
      },
  });
}

// QUARTO GRAFICO ----------------------------------------

$.ajax({
  url: 'serverGrafici.php',
  method: 'GET',
  success: function(data){
    // console.log(data.fatturato_by_agent.data);
    getGraficoQuatttro(data);
  },
  error: function(){
    alert('ERRORE');
  }
})

function getGraficoQuatttro(dat) {
  var tipo = dat.fatturato_by_agent.type;
  var fatturati = dat.fatturato_by_agent.data;
  var venditori = [];
  var fatturato = [];
  for (var key in fatturati) {
    fatturato.push(fatturati[key]);
    venditori.push(key);
  }
  // console.log(venditori);
  // console.log(fatturato);
  var ctx = $('#line-chart-quattro');
  var chart = new Chart(ctx, {
      type: tipo,
      data: {
          labels: venditori,
          datasets: [{
              label: 'Qualità Venditori',
              backgroundColor: ['pink', 'red', 'blue', 'green'],
              borderColor: 'white',
              data: fatturato
          }]
      },
  });
}
// QUINTO GRAFICO ----------------------------------------

$.ajax({
  url: 'serverGraficiPhp.php',
  method: 'GET',
  success: function(data){
    getGraficoCinque(data);
  },
  error: function(){
    alert('ERRORE');
  }
})

function getGraficoCinque(dat) {
  var dati = dat;
  // console.log(dati);
  var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var ctx = $('#line-chart-cinque');
  var chart = new Chart(ctx, {
      type: dati[1],
      data: {
          labels: mesi,
          datasets: [{
              label: 'My Third dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: dati[0]
          }]
      },
  });
}

// SESTO GRAFICO ----------------------------------------

$.ajax({
  url: 'serverGraficiPhp.php',
  method: 'GET',
  success: function(data){

    getGraficoSei(data);
  },
  error: function(){
    alert('ERRORE');
  }
})

function getGraficoSei(dat) {
  var dati = dat;
  // console.log(dati);
  var ctx = $('#line-chart-sei');
  var chart = new Chart(ctx, {
      type: dati[2],
      data: {
          labels: dati[3],
          datasets: [{
              label: 'Qualità Venditori',
              backgroundColor: ['pink', 'red', 'blue', 'green'],
              borderColor: 'white',
              data: dati[4]
          }]
      },
  });
}

// SETTE GRAFICO ----------------------------------------

var input = $('.selettore').val();
$.ajax({
  url: 'serverLevel.php',
  method: 'GET',
  data: {
      query: input,
  },
  success: function(data){
    console.log(data);
     $('.button').click(function(){
       // var livello = $('.selettore').val();
       // console.log(livello);
       getGraficoSette(data);
       getGraficoOtto(data);
       getGraficoNove(data);

     });
  },
  error: function(){
    alert('ERRORE');
  }
})

function getGraficoSette(dat) {
  var dati = dat;
  // console.log(dati);
  var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var ctx = $('#line-chart-sette');
  var chart = new Chart(ctx, {
      type: dati[1],
      data: {
          labels: mesi,
          datasets: [{
              label: 'My Third dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: dati[0]
          }]
      },
  });
}

function getGraficoOtto(dat) {
  var dati = dat;
  // console.log(dati);
  var ctx = $('#line-chart-otto');
  var chart = new Chart(ctx, {
      type: dati[2],
      data: {
          labels: dati[3],
          datasets: [{
              label: 'Qualità Venditori',
              backgroundColor: ['pink', 'red', 'blue', 'green'],
              borderColor: 'white',
              data: dati[4]
          }]
      },
  });
}

function getGraficoNove(dat) {
  var dati = dat;
  // console.log(dati);
  console.log(dati[7]);
  var ctx = $('#line-chart-nove');
  var chart = new Chart(ctx, {
      type: dati[5],
        data: {
            labels: mesi,
            datasets: [{
                label: dati[6][0],
                borderColor: '#B61827',
                data: dati[7][0]
            },
            {
                label: dati[6][1],
                borderColor: '#0288D1',
                data: dati[7][1]
            },
            {
                label: dati[6][2],
                borderColor: '#43A047',
                data: dati[7][2]
            }],
        },
  });
}
