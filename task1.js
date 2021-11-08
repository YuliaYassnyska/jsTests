const competitions = (grades) => {
    let max = Math.max(...grades)
    let min = Math.min(...grades)
    let maxIndex = grades.indexOf(max)
    let minIndex = grades.indexOf(min)
    grades.splice(minIndex, 1)
    grades.splice(maxIndex, 1)

    let sum = grades.reduce((a, b) => a + b, 0)
    let avg = (sum / grades.length) || 0

    return avg
}

console.log(competitions([5, 8, 10, 7, 4, 10]))