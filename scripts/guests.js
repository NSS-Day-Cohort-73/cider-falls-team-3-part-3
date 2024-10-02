import { getGuests } from './database.js';
import { renderDOM } from './renderDOM.js';

export function renderGuests() {
    const guests = getGuests();
    const guestHTML = guests.map(guest => `<p>${guest.firstName} ${guest.lastName}</p>`).join('');
   // renderDOM(guestHTML, '#guests-container');
   return guestHTML
}
