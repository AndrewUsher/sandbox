const tf = require('@tensorflow/tfjs')

const data = tf.tensor([1, 2, 3, 4])
const oData = tf.tensor([5, 6, 7, 8])

data.div(oData).print()

const newData = tf.tensor([1, 2, 3, 4])
const newOData = tf.tensor([1])

newData.add(newOData).print()

// Tensor accesors
const accData = tf.tensor([[10, 20, 30]])
const newAccData = tf.tensor([20, 30, 40])

console.log(newAccData.get(0))
console.log(accData.get(0, 1))

// Creating slices of data
const sliceData = tf.tensor([
  [10, 20, 30],
  [40, 50, 60],
  [10, 20, 30],
  [40, 50, 60],
  [10, 20, 30],
  [40, 50, 60],
  [10, 20, 30],
  [40, 50, 60]
])

sliceData.slice([0, 1], [-1, 1]).print()

// Tensor concatenation
const tensorA = tf.tensor([[1, 3, 5], [7, 9, 11]])
const tensorB = tf.tensor([[13, 15, 17], [19, 21, 23]])
tensorA.concat(tensorB, 1).print()

// Summing values along axis
const jumpData = tf.tensor([
  [70, 70, 70],
  [70, 70, 70],
  [70, 70, 70],
  [70, 70, 70]
])

const playerData = tf.tensor([[1, 160], [2, 160], [3, 160], [4, 160]])

jumpData
  .sum(1, true)
  .concat(playerData, 1)
  .print()

jumpData
  .sum(1)
  .expandDims(1)
  .concat(playerData, 1)
  .print()
