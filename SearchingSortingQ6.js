function findMinArrowShots(points) {
    if (points.length === 0) {
        return 0;
    }

    // Sort balloons based on their ending points
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;  // Initialize with one arrow for the first balloon
    let currentEnd = points[0][1];

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > currentEnd) {
            // Need a new arrow since the current balloon cannot be burst with the previous arrow
            arrows++;
            currentEnd = points[i][1];
        }
    }

    return arrows;
}

// Example usage
const points1 = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(points1));  // Output: 2

const points2 = [[1,2],[3,4],[5,6],[7,8]];
console.log(findMinArrowShots(points2));  // Output: 4

const points3 = [[1,2],[2,3],[3,4],[4,5]];
console.log(findMinArrowShots(points3));  // Output: 2
