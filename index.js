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

        const regex = new RegExp(`${regexWithMultipleSpaces}`)

        return regex.test(string)
    })
}
