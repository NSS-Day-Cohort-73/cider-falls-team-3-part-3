import {getDestinations, getServices, getDestinationServices} from './database.js'


const destinations = getDestinations()
const services = getServices()
const destinationServices = getDestinationServices()

export const renderDestinations = (num) => {
    const filteredArray = destinationServices.filter(item => num === item.destinationId)
    const destination = destinations.find(item => num === item.id)
    const servicesList = []

    let html =`
            <div class='destination-item'>
                <h2
                    data-type='destination'
                    data-id='${num}'
                    data-title='${destination.title}'
                    data-location='${destination.location}'
                >
                    ${destination.title}</h2>
                <ul>
        `
    for (const item of filteredArray) {
        const service = services.find(subItem => subItem.id === item.servicesId)
        servicesList.push(service.type)
    }
    html += `<li class='destination'>${servicesList.join('</li><li class="destination">')}</li></ul></div>`
    return html
}