document.addEventListener("DOMContentLoaded", function() {

  var salaryRange = document.getElementById('salary-range');
  var rentalRange = document.getElementById('rental-range');
  var salary = salaryRange.value;
  var rental = rentalRange.value;


  salaryRange.addEventListener("change", function(e){
    salary = e.target.value;

    var valueSalaryRange = document.getElementById('value-salary-range');
    valueSalaryRange.innerHTML = salary + ' euros';
    writeExpenses(calculateExpenses(salary, rental))
  });


  rentalRange.addEventListener("change", function(e){
    rental = e.target.value;

    var valueRentalRange = document.getElementById('value-rental-range');
    valueRentalRange.innerHTML = rental + ' euros';
    writeExpenses(calculateExpenses(salary, rental))
  });


  writeExpenses(calculateExpenses(salary, rental));

  var valueSalaryRange = document.getElementById('value-salary-range');
  valueSalaryRange.innerHTML = salary + ' euros';
  var valueRentalRange = document.getElementById('value-rental-range');
  valueRentalRange.innerHTML = rental + ' euros';
});


function calculateExpenses(salary, houseRentPercent) {
  //Función provisional para calcular los resultados,
  //pero por ahora devuelve los mismos resultados
  // return {'alimentacion': [42, 42],
  //         'ropa': [42, 42],
  //         'transporte': [42, 42],
  //         'salud': [42, 42],
  //         'hogar': [42, 42],
  //         'ensenanza': [42, 42],
  //         'telecomunicacion': [42, 42],
  //         'ahorros': [42, 42],
  //         'bares': [42, 42],
  //         'cultura': [42, 42],
  //         'tabaco': [42, 42],
  //         'otros': [42, 42]
  //       }

    // EJEMPLO DE CALCULO
    // Calculo
    // Porcentaje Ideal
    // 32%
    tipoYPorcentaje =  {'alimentacion': 13, 'ropa': 4, 'transporte': 11,
      'salud': 4, 'hogar': 4,'ensenanza': 1, 'telecomunicacion': 3, 'ahorros':
      7, 'bares': 9, 'cultura': 4, 'tabaco': 2, 'otros': 6};
    var result = {};
    var x = 0;
    var data = null;

    for (var key in tipoYPorcentaje) {
      x = ( salary * tipoYPorcentaje[key] ) / 100;
      result[key] = [x, tipoYPorcentaje[key]];
    }
    return result;

    // EJEMPLO DE CALCULO
    // Calculo
    // Porcentaje 40%
    // ¿Qué me cambia? => el % de tipoYPorcentaje
    // Hay que calcularlo, lo hacemos en otra function
    // function calculoPorcentajesGastosNoIdeales(salary, houseRentPercent, tipoYPorcentajeInicial)
    //  var tipoYPorcentajeInicial =  {'alimentacion': 13, 'ropa': 4, 'transporte': 11, 'salud': 4, 'hogar': 4,'ensenanza': 1, 'telecomunicacion': 3, 'ahorros': 7, 'bares': 9, 'cultura': 4, 'tabaco': 2, 'otros': 6};
    //  Hacer dentro de la function
    //  Calcular el Resto => 100 - houseRentPercent
    //
    //  Por cada key de tipoYPorcentajeInicial
    //  (tipoYPorcentajeInicial[key] * Resto) / RestoPorcentajeIdeal
    //
    // Esta funcion tiene que devolvernos los % a usar
    // Ejemplo: tipoYPorcentaje =  {'alimentacion': 13, 'ropa': 4, 'transporte': 11, 'salud': 4, 'hogar': 4,'ensenanza': 1, 'telecomunicacion': 3, 'ahorros': 7, 'bares': 9, 'cultura': 4, 'tabaco': 2, 'otros': 6};

}

function writeExpenses(expenses){
  //Función que pinta los resultados en la tabla.
  //Primero tenemos un array expensePrefix con los prefijos de las variables.
  //Recorremos el array y lo concatenamos con los sufijos de las variables,
  //que siempre van a ser los mismos, y los concatenamos, para obtener
  //el id que hemos puesto en el html para mostrar los resultados.

  //El dato que recibe la función es un diccionario con los valores del
  //dinero y el porcentaje calculados:
  //expenses === resultados{nombre} = [valorNumerico, valorPorcentaje]

  expensePrefix = ['alimentacion', 'ropa', 'transporte', 'salud',
                   'hogar', 'ensenanza', 'telecomunicacion', 'ahorros',
                   'bares', 'cultura', 'tabaco', 'otros'];
  var moneyValue = null;
  var percentValue = null;
  var auxMoney = null;
  var auxPercent = null;

  for (i = 0; i < expensePrefix.length; i++) {
      auxMoney = expensePrefix[i] + 'MoneyValue';
      auxPercent = expensePrefix[i] + 'PercentValue';
      debugger;
      moneyValue = document.getElementById(auxMoney);
      percentValue = document.getElementById(auxPercent);
      moneyValue.innerHTML = expenses[expensePrefix[i]][0] + '€';
      percentValue.innerHTML = expenses[expensePrefix[i]][1] + '%';
  }
}
