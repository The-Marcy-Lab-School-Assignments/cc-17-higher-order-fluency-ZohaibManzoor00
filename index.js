const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];

const pluralize = arr => arr.map(words => words + "s");
// console.log(pluralize(animals))

const uppercase = arr => arr.map(word => word[0].toUpperCase() + word.substr(1))
// console.log(uppercase(animals))

const longWords = arr => arr.filter(word => word.length > 3)
// console.log(longWords(animals))

const shortWords = arr => arr.filter(word => word.length < 5)
// console.log(shortWords(animals))

const oddLength = arr => arr.filter(word => word.length % 2 !== 0)
// console.log(oddLength(animals))

const longToShort = arr => arr.sort((a, b) => b.length - a.length)
// console.log(longToShort(animals))

const sum = arr => arr.reduce((acc, currVal) => acc + currVal) 
// console.log(sum([22, 15, 1114, 416, 37, 4]))