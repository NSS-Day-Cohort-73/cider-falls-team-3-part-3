import {getGuests} from './database.js'

const guests = getGuests()

export function guestNumber (targetId) {
    const filteredArray = guests.filter(item => Number(targetId.id) === item.destinationId)
    return `There are ${filteredArray.length} guests in this area.`
}