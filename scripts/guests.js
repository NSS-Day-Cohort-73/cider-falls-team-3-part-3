import { getGuests, getDestinations } from './database.js'

const renderHelper = (guests) => {
    return guests.map(guest => `<li>${guest.firstName} ${guest.lastName}</li>`).join('')
}

const guests = getGuests()
const destinations = getDestinations()

// now to actually render the guest-list
export function renderGuests() {
    let html = '<div class="guest-container">'

    for (const destination of destinations) {
        const guestDestination = guests.filter(guest => guest.destinationId === destination.id)
            if (guestDestination.length > 0)
            {
                html += `<div class="guest-item">
                    <h3>Guests at ${destination.title}</h3>
                    <ul>${renderHelper(guestDestination)}</ul>
                </div>`
            }
        
    }
    
    html += `</div>`
    return html
}
