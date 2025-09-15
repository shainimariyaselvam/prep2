/**
 * Prints a simple pattern of stars in the console.
 * Example: 5 rows
 * *
 * **
 * ***
 * ****
 * *****
 */

function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('*'.repeat(i));
    }
}

// Example usage:
printPattern(5);