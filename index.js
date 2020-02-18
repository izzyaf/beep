const symbol = [
    '`', '~', '!', '@', '#', '$',
    '%', '^', '&', '*', '(', ')',
    '_', '-', '+', '=', '{', '[',
    '}', ']', '|', '\\', ';', ':',
    "'", '"', '<', ',', '>', '.',
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

        const regex = new RegExp(regexWithMultipleSpaces, 'g')

        let match

        while ((match = regex.exec(string)) !== null) {
            const matchedWord = match[0]
            const start = match.index

            // go backward to check if matched word is part of another word
            if (start > 0) {
                let isPartOfWord;
                let index = start;

                // eslint-disable-next-line no-constant-condition
                while (true) {
                    const previousChar = string[index - 1];
                    if (symbol.includes(previousChar)) {
                        break;
                    } else {
                        isPartOfWord = true;
                    }

                    index -= 1;
                }

                if (isPartOfWord) {
                    return false;
                }
            }

            // go forward to check if matched word is part of another word
            const nearestChar = string[start + matchedWord.length]

            // end of string
            if (!nearestChar) {
                return true
            }

            // if the nearest character is a symbol, consider it end of string
            // otherwise, it is part of a longer word
            if (symbol.includes(nearestChar)) {
                return true
            }
        }

        return false
    })
}
