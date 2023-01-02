import { getRandomColor } from './utils';

export default function initApp() {
  console.log('Hello world');
  const btn = document.createElement('button')
  btn.className = 'button'
  btn.textContent = 'Изменить цвет страницы'
  document.body.append(btn)
  const button = document.querySelector('.button')
  button.addEventListener('click',(event)=>{
    const{target} = event
    //console.log(target)
    event.preventDefault()
    if(target){
      //console.log('клик')
      //getRandomColor()
      const color = getRandomColor()
      console.log(color)
      const body = document.querySelector('body')
      body.style.background = getRandomColor()
    }
  })
}