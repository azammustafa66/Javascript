let markHeight = 1.69
let johnHeight = 78
let markWeight = 1.88
let johnWeight = 95

const markBMI = markWeight / (markHeight ** 2)
const johnBMI = johnWeight / (johnHeight ** 2)

console.log(markBMI + "\n" + johnBMI)

let markHigherBMI = Boolean

if (markBMI > johnBMI) {
    markHigherBMI = true
    console.log(markHigherBMI)
} else {
    markHigherBMI = false
    console.log(markHigherBMI)
}