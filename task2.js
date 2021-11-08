const count = (num) => {
    let arrNum = Array.from(String(num), Number)
    let arrRes = [];
    arrNum.map(x => {
        if (x != 5 && x != 0) {
            arrRes.push(x);
        }
    })

    let resultStr = ""
    arrRes.map(x => resultStr += x)
    let result = Number(resultStr)
    return result
}

console.log(count(102045590))