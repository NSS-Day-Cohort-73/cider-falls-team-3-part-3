import {renderGuests} from './guests.js'
import { renderDestinations } from './destination.js'
import {renderServices} from './services.js'
import {renderHeader, renderFooter} from './parkInfo.js'
import { getDestinations } from './database.js'

const destinations = getDestinations()

export function renderDOM(){
    return `
                ${renderHeader()}
                <main>
                ${renderServices()}
                <div class='row destinations-and-services'>
                    <div class='destination-container'>
                    
                        ${destinationLoop()}
                    </div>
                    
                    ${renderGuests()}
                </div>
                </main>
                ${renderFooter()}
            `
    
}

function destinationLoop(){
    let html = ''
    for(let i = 0; i < destinations.length; i++){
        html += renderDestinations(destinations[i].id)
    }
    return html
}