function calculateCheapestTransportationPrice(n, period) {
    let taxiPrice = price = 0

    if (period === 'day') {
        taxiPrice = 0.79
    } else {
        taxiPrice = 0.90
    }

    if (n < 20) {
        price = 0.70 + taxiPrice * n
    } else if (n < 100) {
        price = 0.09 * n
    } else {
        price = 0.06 * n
    }
    console.log(price.toFixed(2));
}

calculateCheapestTransportationPrice(13, 'day')
calculateCheapestTransportationPrice(25, 'night')