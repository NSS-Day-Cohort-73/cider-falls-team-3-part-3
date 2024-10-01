import { getServices } from "./database.js";

const services = getServices()

export const renderServices = () => {
    let html = `<ul class="service">`

    for (const service of services) {
        html += `<li 
        data-type="service"
        data-id="${service.id}" 
        data-serviceType="${service.type}"
        >${service.type}</li>`
    }

    html += "</ul>"
    return html
}