# useMaskedInput

A React hook to mask an input using [text-mask](https://github.com/text-mask/text-mask).

This component needs React 16.8 or greater because it uses hooks.

## Installation

With NPM:
```
npm install @viewstools/use-masked-input
```

With Yarn:
```
yarn add @viewstools/use-masked-input
```

## Usage

```js
import React, { useRef } from 'react'
import useMaskedInput from '@viewstools/use-masked-input'

let PhoneInput = props => {
  let input = useRef(null)

  let onChange = useMaskedInput({
    input,
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    onChange: props.onChange,
  })

  return <input {...props} ref={input} onChange={onChange} />
}

export default PhoneInput
```

`useMaskedInput` takes an object as its parameter and returns an `onChange`
function you need to pass onto your input as a prop. The hook will manage the value of the input.

Here are the possible configuration values:
- `input`. *Required*. A reference created by `React.createRef` or `useRef` to the `input` element rendered by React.
- `mask`. *Required*. An array or a function that defines how the user input is going to be masked. [See more](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask).
- `onChange`. A function to be called when the input changes.
- `guide`. A boolean that tells the component whether to be in guide or no guide mode. [See more](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#guide).
- `keepCharPositions`. A boolean that when true, adding or deleting characters affects won't affect the position of other characters, if false, it pushes them.  _Defaults to `false`_. [See more](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#keepcharpositions).
- `pipe`. A function to modify the conformed value before it is displayed on the screen. [See more](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#pipe).
- `placeholderChar`. A string representing the fillable spot in the mask. Defaults to an underscore (`_`). [See more](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#placeholderchar).
- `showMask`. A boolean that tells the component to display the mask as a placeholder in place of the regular placeholder when the input element value is empty. _Defaults to `false`_. [See more](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#showmask).
- `value`. A string with the value. Defaults to ``.
```

## Known issues
[There are some known issues on text-mask](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#known-issues).

### Supported <input> types
Please note that Text Mask supports input type of text, tel, url, password, and search. Due to a limitation in browser API, other input types, such as email or number, cannot be supported. However, it is normal to let the user enter an email or a number in an input type text combined the appropriate input mask.

License BSD-Clause-3

by UXtemple
