window.addEventListener('load', start);

const clickArray = [];

function start() {
  const button = document.querySelector('#clickButton');
  button.addEventListener('click', handleButtonClick);
  console.log('Dom carregado');
}
function handleButtonClick() {
  //const now = new Date();//Date() objeto que dá a data, hora e dia daquele momento.
  const item = getNewTimesTamp();
  clickArray.push(item);

  //console.log(clickArray);
  render(item);
}
function render(item) {
  const ul = document.querySelector('#data')

  const li = document.createElement('li');
  li.textContent = item;

  ul.appendChild(li); //append = inserir Child = filho

  // ul.innerHTML = "";
  // let lis = '';
  // clickArray.map(item => {
  //   lis += `<li>${item}</li>`;
  // })
  // ul.innerHTML = lis;

  // document.title = clickArray.length;
}
