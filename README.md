# Swear Detector

## Usage

```js
const SwearDetector = require('beep')

const dictionary = ['thuốc lá', 'súng ống', 'tiểu liên']
const string = 'thuốc lá, súng ống, đạn dược'

const swearWords = SwearDetector(string, dictionary)
console.log(swearWords) // ["thuốc lá", "súng ống"] 
```
