function twoOptSwap(route, i, k) {
    const createRoute = route.slice();
    const willReverse = createRoute.slice(i + 1, k + 1);
    const reverseParts = willReverse.reverse();
    createRoute.splice( i + 1, reverseParts.length, ...reverseParts);
    return createRoute;
}

function countPathLength(route, dis) {
    var totalLength = 0;
    for(var i = 0; i < route.length -1; i++) {
        totalLength += dis[route[i]][route[i+1]];
    }
    totalLength += dis[route[route.length - 1]][route[0]];
    return totalLength;
}

function tsp_ls(distance_matrix) {
    var len = distance_matrix.length;
    if(len <= 1) return 0;
    var currentRoute = [...Array(len).keys()];
    var cur = currentRoute.slice();
    // maxIterate: maximum number of iterations
    // I set the default value as 100 because we are doing a small number of iterations
    // If I change it to Infinity, it will have more computational cost. If I change it to maxIterate = 1000, it will compute more times than maxIterate = 200
    const maxIterate = 200;
    for(var j = 0; j < maxIterate; j++) {
        // i, k is random to choose and make sure they are not the same number
        // When searching for a solution, it's best to start with bigger steps and gradually decrease the size of each step as you get closer to the end. 
        // This way, we can make faster progress early on and be more careful as you near the final result.
        let i = Math.floor(Math.random() * len);
        let k;
        do {
            k = Math.floor(Math.random() * len);
        } while (k === i);
        const newRoute = twoOptSwap(currentRoute, i, k);
        if (countPathLength(newRoute, distance_matrix) < countPathLength(currentRoute, distance_matrix)) {
            currentRoute = newRoute;
            cur = newRoute;
        }
    }
    return countPathLength(cur, distance_matrix);
}
