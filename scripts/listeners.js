import {guestNumber} from './guestNumber.js'
import { serviceLocation } from './serviceLocation.js'

export function addListeners(){
    document.addEventListener('click',
    function (event){
        const eventTarget = event.target.dataset
        if (eventTarget.type === 'destination'){
            window.alert(guestNumber(eventTarget))
        }
        if (eventTarget.type === 'service') {
            window.alert(serviceLocation(eventTarget))
        }
    }
)
}