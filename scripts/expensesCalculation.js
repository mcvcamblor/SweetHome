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

//----------------------------------------------------
var tipoYPorcentaje = {
    'alimentacion': 13,
    'ropa': 4,
    'transporte': 11,
    'salud': 4,
    'hogar': 4,
    'ensenanza': 1,
    'telecomunicacion': 3,
    'ahorros': 7,
    'bares': 9,
    'cultura': 4,
    'tabaco': 2,
    'otros': 6
};

function writeExpenses(expenses){
  //Función que pinta los resultados en la tabla.
  //Primero tenemos un array expensePrefix con los prefijos de las variables.
  //Recorremos el array y lo concatenamos con los sufijos de las variables,
  //que siempre van a ser los mismos, y los concatenamos, para obtener
  //el id que hemos puesto en el html para mostrar los resultados.

  //El dato que recibe la función es un diccionario con los valores del
  //dinero y el porcentaje calculados:
  //expenses === resultados{nombre} = [valorNumerico, valorPorcentaje]


  var expensePrefix = ['alimentacion', 'ropa', 'transporte', 'salud',
                   'hogar', 'ensenanza', 'telecomunicacion', 'ahorros',
                   'bares', 'cultura', 'tabaco', 'otros'];
  var moneyValue = null;
  var percentValue = null;
  var auxMoney = null;
  var auxPercent = null;

  for (i = 0; i < expensePrefix.length; i++) {
      auxMoney = expensePrefix[i] + 'MoneyValue';
      auxPercent = expensePrefix[i] + 'PercentValue';
      moneyValue = document.getElementById(auxMoney);
      percentValue = document.getElementById(auxPercent);
      moneyValue.innerHTML = expenses[expensePrefix[i]][0] + '€';
      percentValue.innerHTML = expenses[expensePrefix[i]][1] + '%';
    }
}

function noIdealExpensesPercentCalculation(salary, houseRentPercent){
  //Dado un salario, un porcentaje destinado a la vivienda, y los tipos de interés del caso inicial,
  //calculamos los porcentajes destinados al resto de gastos según las fórmulas dadas en el
  //Excel que nos han proporcionado en MediaLab Prado a través de Flora.
  var initialTypeAndPercent = tipoYPorcentaje;
  var expensesAndPercentsToApply = {};
  var totalPercent = 100;
  var idealHouseRentPercent = 32;
  var remainderPercent = totalPercent - houseRentPercent;
  var idealRemainderPercent = totalPercent - idealHouseRentPercent;
  var x = 0;
  var value = 0;

  for (var key in initialTypeAndPercent) {
    value = initialTypeAndPercent[key];
    x = (value * remainderPercent) / idealRemainderPercent;
    x = Math.round(x);
    expensesAndPercentsToApply[key] =  x;
  }
  return expensesAndPercentsToApply;
}

function calculateNoIdealExpenses(salary, houseRentPercent){
  //Función para calcular los gastos cuando se le pasa un salario y un porcentaje destinado
  //a vivienda "no ideal". Debe llamar a la función noIdealExpensesPercentCalculation para
  //calcular los porcentajes destinados al resto de gastos, y debe calcular el dinero.
  //Estos datos se guardan en un diccionario que guarda ambos valores
  //se llama a la función writeExpenses pasándole el diccionario para que lo pinte en el
  //cuadro de gastos de la web

  var expensesAndPercentsToApply = noIdealExpensesPercentCalculation(salary, houseRentPercent);
  var result = {};
  var totalPercent = 100;
  var x = 0;
  var value = 0;
  for (var key in expensesAndPercentsToApply) {
    value = (salary * expensesAndPercentsToApply[key]) / totalPercent;
    value = Math.round(value);
    result[key] = [value, expensesAndPercentsToApply[key]];
  }

  writeExpenses(result);
}

function calculateExpenses(salary, houseRentPercent) {
  var result = {};
  var value = 0;
  var totalPercent = 100;

  for (var key in tipoYPorcentaje) {
    value = (salary * tipoYPorcentaje[key]) / totalPercent;
    value = Math.round(value);
    result[key] = [value, tipoYPorcentaje[key]];
  }
  return result;
}
