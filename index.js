// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocale) {
    const hqLocale = 42
    let numBlocks = Math.abs(pickupLocale - hqLocale)
    return numBlocks
}


function distanceFromHqInFeet(locale) {
    let numBlocks = distanceFromHqInBlocks(locale);
    let numFeet = numBlocks * 264
    return numFeet
}


function distanceTravelledInFeet(start,end) {
    return (Math.abs(end-start))*264
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    let cost;

    if (distance <= 400)
        cost = 0
    else if (distance > 400 && distance <= 2000)
        cost = (distance-400) * 0.02
    else if (distance > 2000 && distance <= 2500)
        cost = 25
    else if (distance > 2500)
        return 'cannot travel that far'

    return cost
}