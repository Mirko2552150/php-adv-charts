// PRIMO GRAFICO ----------------------------------------

$.ajax({
  url: 'server.php',
  method: 'GET',
  success: function(data){
    var fatturatiMensili = data;
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
  },
  error: function(){
    alert('ERRORE');
  }
})

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
    var fatturatiMensili = data.fatturato.data;
    var tipo = data.fatturato.type
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
  },
  error: function(){
    alert('ERRORE');
  }
})

// QUARTO GRAFICO ----------------------------------------

$.ajax({
  url: 'serverGrafici.php',
  method: 'GET',
  success: function(data){
    // console.log(data.fatturato_by_agent.data);
    var tipo = data.fatturato_by_agent.type;
    var fatturati = data.fatturato_by_agent.data;
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
  },
  error: function(){
    alert('ERRORE');
  }
})
// QUINTO GRAFICO ----------------------------------------

$.ajax({
  url: 'serverGrafici.php',
  method: 'GET',
  success: function(data){
    var fatturatiMensili = data.fatturato.data;
    var tipo = data.fatturato.type
    // console.log(data.fatturato.data);
    // console.log(data.fatturato.type);
    var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    var ctx = $('#line-chart-cinque');
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
  },
  error: function(){
    alert('ERRORE');
  }
})

// SESTO GRAFICO ----------------------------------------

$.ajax({
  url: 'serverGrafici.php',
  method: 'GET',
  success: function(data){
    // console.log(data.fatturato_by_agent.data);
    var tipo = data.fatturato_by_agent.type;
    var fatturati = data.fatturato_by_agent.data;
    var venditori = [];
    var fatturato = [];
    for (var key in fatturati) {
      fatturato.push(fatturati[key]);
      venditori.push(key);
    }
    // console.log(venditori);
    // console.log(fatturato);

    var ctx = $('#line-chart-sei');
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
  },
  error: function(){
    alert('ERRORE');
  }
})
