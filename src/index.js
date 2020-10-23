module.exports = num => {
  if (num === 0) return getWord(num)

  const result = []

  if (num > 99) {
    result.push(getWord(num / 100))
    result.push('hundred')
  }

  if (num % 100 > 19) {
    result.push(getWord(num % 100 / 10 + 18))

    if (num % 10) {
      result.push(getWord(num % 10))
    }
  } else if (num % 100) {
    result.push(getWord(num % 100))
  }

  return result.join(' ')
}

function getWord (expression) {
  const dictionary = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  return dictionary[Math.floor(expression)]
}
