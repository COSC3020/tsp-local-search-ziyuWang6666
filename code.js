function twoOptSwap(route, i, k) {
    const createRoute = route.slice();//equal copied a new one
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
    // If I change it to Infinity, it will never finished. If I change it to maxIterate = 1000, it will compute more times than maxIterate = inputSize*n
    const maxIterate = len * len;
    for(var j = 0; j < maxIterate; j++) {
        // i, k is random to choose and make sure they are not the same number
        // In each iteration, a new pair of random i and k is chosen
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
