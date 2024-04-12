import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

var card = document.createElement('div');
card.innerHTML =`<div class="card w-96 bg-base-100 shadow-xl">
<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
<div class="card-body">
  <h2 class="card-title">
    Shoes!
    <div class="badge badge-secondary">NEW</div>
  </h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div class="card-actions justify-end">
    <div class="badge badge-outline">Fashion</div> 
    <div class="badge badge-outline">Products</div>
  </div>
</div>
</div>
`
for (let index = 0; index < 10; index++) {
    document.querySelector('#cards-container').appendChild(card)
    
    
}

