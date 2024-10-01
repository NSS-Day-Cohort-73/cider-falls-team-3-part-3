import { getGuests } from './database.js';
import { renderToDOM } from './renderDOM.js';

export function renderGuests() {
    const guests = getGuests();
    const guestHTML = guests.map(guest => `<p>${guest.firstName} ${guest.lastName}</p>`).join('');
    renderToDOM(guestHTML, '#guests-container');
}
