const drivers = [
    {
        name: 'driver1',
        location: [50, 70],
        available: true
    },
    {
        name: 'driver2',
        location: [10, 20],
        available: false
    },
    {
        name: 'driver3',
        location: [60, 40],
        available: true
    },
];

const distanceThreshold = 30;

function calculateDistance (riderLocation, driverLocation) {
    // calculate distance between 2 locations
    const x1 = riderLocation[0];
    const y1 = riderLocation[1];
    const x2 = driverLocation[0];
    const y2 = driverLocation[1];

    const distance = Math.floor(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
    return distance;
}

function bookCab (rider) {
    // check distance between rider and available cabs
    for(let i = 0; i < drivers.length; i++) {
        if(drivers[i].available) {
            const distance = calculateDistance(rider.location, drivers[i].location);
            if(distance <= distanceThreshold) {
                console.log(`Cab booked for ${rider.name} upto ${rider.destination}. Your driver, ${drivers[i].name} is ${distance}m away.`);
                drivers[i].available = false;
                return;
            }
        }
    }
    console.log('Sorry, no cabs are available!')
}


const rider1 = {
    name: 'rider1',
    location: [30, 40],
    destination: 'destination1'
};

bookCab(rider1)


// available, but not in limit - distance check fails - don't book
// unavailable, limit doesnt matter - availability check fails, don't check for distance - don't book
// available, in limit - book
