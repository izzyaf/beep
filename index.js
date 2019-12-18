const symbol = [
    '`', '~', '!', '@',  '#', '$',
    '%', '^', '&', '*',  '(', ')',
    '_', '-', '+', '=',  '{', '[',
    '}', ']', '|', '\\', ';', ':',
    "'", '"', '<', ',',  '>', '.',
    '?', '/', ' '
]

module.exports = (string, dictionary = []) => {
    return dictionary.filter(swearWord => {
        const regexWithMultipleSpaces = swearWord.trim().split('').map((str, index) => {
            if (index === 0) {
                return str
            }

            if (str === ' ') {
                return ''
            }

            return `(\\s*${str})`
        }).join('')

        const regex = new RegExp(regexWithMultipleSpaces)

        const matches = regex.exec(string)

        if (matches !== null) {
            const matchedWord = matches[0]
            const startAt = matches.index

            const nearestChar = string[startAt + matchedWord.length]

            // end of string
            if (!nearestChar) {
                return true
            }

            // if the nearest character is a symbol, consider it end of string
            // otherwise, it is part of a longer word
            return symbol.includes(nearestChar)
        }

        return false
    })
}
