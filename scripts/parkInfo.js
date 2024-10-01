import { getParkInfo } from "./database.js";

const park = getParkInfo()[0]

//park logo and park name in the header

export const renderHeader = () => {
    return `
    <header>
        <div class="header-grouping">
            <img src="${park.logo}" alt="${park.name} logo" class="logo"/>
            <h1 id="park-name">${park.name}</h1>
        </div>
    </header>
    `

}

//phone number, email address, and street address in footer

export const renderFooter = () => {
    return `
    <footer>
        <div class="footer-grouping">
            <p id="contact">CONTACT US! </p>
            <p id="phone">Phone: <a href="call:${park.phoneNumber}">${park.phoneNumber}</a></p>
            <p id="email">Email: <a href="mail:${park.email}">${park.email}</a></p>
            <p id="adress">Address: ${park.address}</p>
        </div>
        <div class="copyright">
            <p>${park.name}. All rights reserved.</p>
        </div>
    </footer>
    `
}