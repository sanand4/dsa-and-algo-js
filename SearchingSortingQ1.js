function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    
    // Sort intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);
    
    let mergedIntervals = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
        
        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            mergedIntervals.push(currentInterval);
        }
    }
    
    return mergedIntervals;
}

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals); // Output: [[1, 6], [8, 10], [15, 18]]
