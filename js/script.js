window.addEventListener('load', start);

const clickArray = [];

function start() {
  const button = document.querySelector('#clickButton');
  button.addEventListener('click', handleButtonClick);
  console.log('Dom carregado');
}
function handleButtonClick() {
  //const now = new Date();//Date() objeto que dá a data, hora e dia daquele momento.
  clickArray.push(getNewTimesTamp());

  //console.log(clickArray);
  render();
}
function render() {
  const ul = document.querySelector('#data')
  ul.innerHTML = "";
  let lis = '';
  clickArray.map(item => {
    lis += `<li>${item}</li>`;
  })
  ul.innerHTML = lis;

  document.title = clickArray.length;
}
