# x-sampa-ipa

X-SAMPA to IPA and IPA to X-SAMPA converter.

## Install

```shell
npm i -S x-sampa-ipa
```

```js
const {xsampa2ipa, ipa2xsampa} = require('x-sampa-ipa');
```

[Try it in your browser](https://npm.runkit.com/x-sampa-ipa)


## API

### xsampa2ipa

Converts a string from X-SAMPA to IPA.

```js
xsampa2ipa('m6d6j46'); // 'mɐdɐjɾɐ'
```

### ipa2xsampa

Converts a string from IPA to X-SAMPA.

```js
ipa2xsampa('mɐkˈabɾu'); // 'm6k"ab4u'
```


## Bugs and stuff

Open a GitHub issue or, preferably, send me a pull request.

## License

The MIT License (MIT)

Copyright (c) 2020 André Santos <andrefs@andrefs.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
