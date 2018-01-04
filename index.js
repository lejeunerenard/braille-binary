module.exports = function numberToBraille (num) {
  const blank = 0x2800

  if (num < 256) return String.fromCharCode(blank + num)

  const columValue = num & 255 // Get last 8 bits
  const remainder = num >>> 8

  return numberToBraille(remainder) + String.fromCharCode(blank + columValue)
}
