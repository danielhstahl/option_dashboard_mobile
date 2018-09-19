//https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty
export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export const getAboveEpsilon = epsilon => (arr, key) =>
  arr.filter(v => v[key] > epsilon)

export const getSymmetricFromRight = (xKey, yKey, arr, epsilon) => {
  if (arr.length === 0) {
    return arr
  }
  const eps = getAboveEpsilon(epsilon)
  const condArr = eps(arr, yKey)
  const lastXVal = condArr[condArr.length - 1][xKey]
  return arr.filter(
    v => v[xKey] >= -lastXVal && (v[yKey] > epsilon || v[xKey] < 0)
  )
}

export const progressStyleGenerator = progressSize => ({
  marginTop: -progressSize / 2,
  marginLeft: -progressSize / 2,
  top: '50%',
  left: '50%',
  position: 'absolute'
})
