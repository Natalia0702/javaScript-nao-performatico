function leftPad(value, count = 2, char = '0') {
  const stringValue = value.toString();
  let newValue = stringValue;
  if (stringValue < count) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }
  return newValue;
}


function getNewTimesTamp() {
  //teste da função leftPAd
  console.log(leftPad('1'));// por padrão o count é dois, conforme a função e se eu quiser com três faço como a linha abaixo
  console.log(leftPad('11', 3));
  console.log(leftPad('111'));

  //javascript tem uma api que se chama intl que faz várias formatações inclusive de data,
  // mas ela não nos atende porque precisamos pegar milisegundos
  const now = new Date();
  let result = '';

  result += leftPad(now.getDate());
  result += '/';


  result += leftPad(now.getMonth() + 1);
  result += '/';

  result += now.getFullYear();
  result += ' ';

  result += leftPad(now.getHours());
  result += ':';

  result += leftPad(now.getMinutes());
  result += ':';

  result += leftPad(now.getSeconds());
  result += '.';

  result += leftPad(now.getMilliseconds(), 3);





  return result;
}