
function countStudentsUnableToEat(students, sandwiches) {
    let unableToEat = 0;

    while (students.length > 0 && sandwiches.length > 0) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            unableToEat = 0;
        } else {
            students.push(students.shift());
            unableToEat++;
            if (unableToEat === students.length) {
                break;
            }
        }
    }

    return students.length;
}

// Example 1
const students1 = [1, 1, 0, 0];
const sandwiches1 = [0, 1, 0, 1];
console.log(countStudentsUnableToEat(students1, sandwiches1)); // Output: 0

// Example 2
const students2 = [1, 1, 1, 0, 0, 1];
const sandwiches2 = [1, 0, 0, 0, 1, 1];
console.log(countStudentsUnableToEat(students2, sandwiches2)); // Output: 3
