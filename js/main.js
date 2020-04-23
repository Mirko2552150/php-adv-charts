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















// QUARTO GRAFICO ----------------------------------------
