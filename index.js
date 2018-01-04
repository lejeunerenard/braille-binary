module.exports = function numberToBraille (num) {
  const blank = 0x2800

  if (num < 256) return String.fromCharCode(blank + num)

  const columValue = Math.floor(num / 256)
  const remainder = num - columValue * 256

  return String.fromCharCode(blank + columValue) + numberToBraille(remainder)
}
