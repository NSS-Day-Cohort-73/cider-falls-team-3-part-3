const database = {
    destinations: [
      { id: 1, title: "Chamfort River", location: "Northeast" },
      { id: 2, title: "Lost Wolf Hiking Trail", location: "Northern" },
      { id: 3, title: "The Lodge", location: "Northwest" },
      { id: 4, title: "Gander River", location: "Southwest" },
      { id: 5, title: "Campgrounds", location: "Southern" },
      { id: 6, title: "Pine Bluffs Trails", location: "Southeast" }
    ],
    services: [
      { id: 1, type: "Rafting" },
      { id: 2, type: "Canoeing" },
      { id: 3, type: "Fishing" },
      { id: 4, type: "Hiking" },
      { id: 5, type: "Picnicking" },
      { id: 6, type: "Rock Climbing" },
      { id: 7, type: "Lodging" },
      { id: 8, type: "Parking" },
      { id: 9, type: "Information" },
      { id: 10, type: "Zip Lines" }
    ],
    destinationServices: [
      { id: 1, destinationId: 1, servicesId: 1 }, // Chamfort River - Rafting
      { id: 2, destinationId: 1, servicesId: 2 }, // Chamfort River - Canoeing
      { id: 3, destinationId: 1, servicesId: 3 }, // Chamfort River - Fishing
      { id: 4, destinationId: 2, servicesId: 4 }, // Lost Wolf Hiking Trail - Hiking
      { id: 5, destinationId: 2, servicesId: 5 }, // Lost Wolf Hiking Trail - Picnicking
      { id: 6, destinationId: 2, servicesId: 6 }, // Lost Wolf Hiking Trail - Rock Climbing
      { id: 7, destinationId: 3, servicesId: 7 }, // The Lodge - Lodging
      { id: 8, destinationId: 3, servicesId: 8 }, // The Lodge - Parking
      { id: 9, destinationId: 3, servicesId: 9 }, // The Lodge - Information
      { id: 10, destinationId: 3, servicesId: 5 }, // The Lodge - Picnicking
      { id: 11, destinationId: 4, servicesId: 3 }, // Gander River - Fishing
      { id: 12, destinationId: 4, servicesId: 4 }, // Gander River - Hiking
      { id: 13, destinationId: 5, servicesId: 7 }, // Campgrounds - Lodging
      { id: 14, destinationId: 5, servicesId: 9 }, // Campgrounds - Information
      { id: 15, destinationId: 5, servicesId: 8 }, // Campgrounds - Parking
      { id: 16, destinationId: 6, servicesId: 4 }, // Pine Bluffs Trails - Hiking
      { id: 17, destinationId: 6, servicesId: 5 }, // Pine Bluffs Trails - Picnicking
      { id: 18, destinationId: 6, servicesId: 10 } // Pine Bluffs Trails - Zip Lines
    ],
    parkInfo: [
      {
        id: 1,
        name: "Cider Falls",
        logo: "./assets/parklogo.png",
        email: "info@greg.com",
        address: "us02web Zoom Street, Nashville, TN",
        phoneNumber: "999-999-9999"
      }
    ],
    guests: [
        { id: 1, firstName: "Lebron", lastName: "James", destinationId: 1 },
        { id: 2, firstName: "Jake", lastName: "The Dog", destinationId: 1 },
        { id: 3, firstName: "Princess", lastName: "Bubblegum", destinationId: 2 },
        { id: 4, firstName: "Marceline", lastName: "Abadeer", destinationId: 2 },
        { id: 5, firstName: "Ice", lastName: "King", destinationId: 3 },
        { id: 6, firstName: "Lumpy", lastName: "Space Princess", destinationId: 3 },
        { id: 7, firstName: "BMO", lastName: "Robot", destinationId: 4 },
        { id: 8, firstName: "Flame", lastName: "Princess", destinationId: 4 },
        { id: 9, firstName: "Tree", lastName: "Trunks", destinationId: 5 },
        { id: 10, firstName: "Peppermint", lastName: "Butler", destinationId: 5 },
        { id: 11, firstName: "Lady", lastName: "Rainicorn", destinationId: 6 },
        { id: 12, firstName: "Lemongrab", lastName: "Earl", destinationId: 6 },
        { id: 13, firstName: "Derick", lastName: "Henry", destinationId: 1 },
        { id: 14, firstName: "Flame", lastName: "King", destinationId: 2 },
        { id: 15, firstName: "Magic", lastName: "Man", destinationId: 3 },
        { id: 16, firstName: "Huntress", lastName: "Wizard", destinationId: 4 },
        { id: 17, firstName: "King", lastName: "Worm", destinationId: 5 },
        { id: 18, firstName: "Susan", lastName: "Strong", destinationId: 6 },
        { id: 19, firstName: "Cinnamon", lastName: "Bun", destinationId: 1 },
        { id: 20, firstName: "Me-Mow", lastName: "Cat", destinationId: 2 }
      ]
  }

  export const getDestinations = () => {
    return database.destinations.map(destination => ({...destination}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getDestinationServices = () => {
    return database.destinationServices.map(destinationService => ({...destinationService}))
}

export const getParkInfo = () => {
    return database.parkInfo.map(info => ({...info}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}