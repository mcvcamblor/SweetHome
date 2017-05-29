function calculateExpenses(salary, houseRent) {
  //Función provisional para calcular los resultados,
  //pero por ahora devuelve los mismos resultados
  return {'alimentacion': [42, 42],
          'ropa': [42, 42],
          'transporte': [42, 42],
          'salud': [42, 42],
          'hogar': [42, 42],
          'ensenanza': [42, 42],
          'telecomunicacion': [42, 42],
          'ahorros': [42, 42],
          'bares': [42, 42],
          'cultura': [42, 42],
          'tabaco': [42, 42],
          'otros': [42, 42]
        }
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
      moneyValue = document.getElementById(auxMoney);
      percentValue = document.getElementById(auxPercent);
      moneyValue.innerHTML = expenses[expensePrefix[i]][0] + '€';
      percentValue.innerHTML = expenses[expensePrefix[i]][1] + '%';
  }
}
