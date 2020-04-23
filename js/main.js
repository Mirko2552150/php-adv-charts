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
console.log(dataDue);
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
    var fatturatiMensili = data;
    var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    var ctx = $('#line-chart-tre');
    var chart = new Chart(ctx, {
        type: 'line',
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
    var ctx = $('#line-chart-quattro');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['mario', 'giovanni', 'carlo', 'giovanni'],
            datasets: [{
                label: 'Qualità Venditori',
                backgroundColor: ['pink', 'red', 'blue', 'green'],
                borderColor: 'white',
                data: [1000, 2000, 3000, 4000]
            }]
        },
    });
  },
  error: function(){
    alert('ERRORE');
  }
})
