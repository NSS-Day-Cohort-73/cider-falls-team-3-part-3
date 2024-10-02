import { addListeners } from "./listeners.js"
import { renderDOM } from "./renderDOM.js"

addListeners()

const mainContainer = document.getElementById('content')
mainContainer.innerHTML = renderDOM()