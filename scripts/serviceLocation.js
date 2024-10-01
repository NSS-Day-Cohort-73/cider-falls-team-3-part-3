import { getDestinations, getDestinationServices } from './database.js'

const destinations = getDestinations()
const destinationServices = getDestinationServices()

export function serviceLocation (targetId) {
    const returnArray = []
    
    
    const filteredArray = destinationServices.filter(item => Number(targetId.id) === item.id)
    
    for (const item of filteredArray) {
        const destination = destinations.find(subItem => subItem.id === item.destinationId)
            returnArray.push(destination.title) 
    }

    return `Park Services: ${formatArray(returnArray)}`
}

// Function to format array with ", " and ", and"
function formatArray(arr) {
    if (arr.length === 0) return '' // Empty array case
    if (arr.length === 1) return arr[0] // Single element case
    if (arr.length === 2) return arr.join(' and ') // Two elements case
    return arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1)
}
