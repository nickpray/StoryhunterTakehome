
function findDuplicates() {
    let fruits = ['apple', 'orange', 'pear', 'orange', 'pineapple', 'banana', 'pear', 'strawberry'];
    let visited = {};
    let duplicatesArray = [];

    fruits.forEach(d => {
        if (d in visited) {
            duplicatesArray.push(d);
        }
        visited[d] = true;
    })

    return duplicatesArray
}

console.log("Here is the array containing only duplicates: ", findDuplicates());
