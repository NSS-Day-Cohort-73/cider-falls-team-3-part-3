import { addListeners } from "./listeners.js"
import { renderDOM } from "./renderDOM.js"

const mainContainer = document.querySelector('#content')
addListeners()
mainContainer.innerHTML = renderDOM()