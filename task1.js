const deleteMinMax = (grades) => {
    let min = Math.min(...grades)
    let minIndex = grades.indexOf(min)
    grades.splice(minIndex, 1)
    let max = Math.max(...grades)
    let maxIndex = grades.indexOf(max)
    grades.splice(maxIndex, 1)

    return grades
}

const sum = (grades) => {
    deleteMinMax(grades)
    let sum = grades.reduce((a, b) => a + b, 0)
    return sum
}

const competitionGrade = (grades) => {
    let avg = (sum(grades) / grades.length) || 0
    return avg
}

console.log(deleteMinMax([1, 2, 3, 4, 5]))

module.exports = { competitionGrade, sum, deleteMinMax }

