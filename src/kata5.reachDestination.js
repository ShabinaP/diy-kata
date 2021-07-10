const reachDestination = (distance, speed) => {
    const distance1 =  distance / speed;
    const distance2 = (Math.round(distance1 * 2) / 2).toFixed(1)
    return `I should be there in ${distance2} hours`    
};

module.exports = reachDestination;
