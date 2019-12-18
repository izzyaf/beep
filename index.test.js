const func = require('./index')

const dictionary = 'thuốc lá,nicotin,cu'.split(',')

const table = [
    ['thuoc la', []],
    ['thuốc.lá', []],
    ['thuốc,lá', []],
    ['thuốc lá', ['thuốc lá']],
    ['thuốc lá!', ['thuốc lá']],
    ['thuốc lá?', ['thuốc lá']],
    ['thuốc lá,', ['thuốc lá']],
    ['thuốc lá.', ['thuốc lá']],
    ['th      uốc      l        á!', ['thuốc lá']],
    ['thuốc        lá', ['thuốc lá']],
    ['thuốc        lá.n i c o t i n', ['thuốc lá', 'nicotin']],
    ['thuốc lá, nicotin', ['thuốc lá', 'nicotin']],
    ['cuối cùng thì vẫn bị dính cái từ đó có thuốc súng', []]
]

describe('Swear Detector', () => {
    test.each(table)('%s', (word, expected) => {
        const actual = func(word, dictionary)

        expect(actual).toMatchObject(expected)
    })
})

