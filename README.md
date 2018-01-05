# Braille Binary

> Encode binary data into braille characters.

This module encodes binary data as braille characters with each dot being raised
corresponding to that bit being a `1` and each dot not raised being a `0`. The
mapping between dot position and bit position is explained
[below](#dot-numbering).

## Install

```sh
npm i braille-binary
```

## Usage

```js
const bb = require('braille-binary')

console.log(bb(0b01010101)) // ⡕
console.log(bb(0b10010101)) // ⢕
console.log(bb(255)) // ⣿
console.log(bb(257)) // ⠁⠁
```

## Dot Numbering

<img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Braille8dotCellNumbering.svg/57px-Braille8dotCellNumbering.svg.png" alt="" style="float: left; margin-right: 10px;">

According to ISO/TR 11548-1 _Communication aids for blind persons_, the standard
dot-numbering is 1 to 8. Historically only 6-dot cells were used, so when the
lower two dots were added later they were given the numbering 7 and 8. This
allows for backwards compatibility with the 6-dot definitions already used. On
the other hand, this results in an irregular numbering with 1-2-3-7 in the left
column and 4-5-6-8 in the right.

When designing this module, the question of which dots corresponded to what
column in a binary number arose. An alternative to the standard numbering would
be arbitrary and though potentially more intuitive. I ultimately to keep the
standard numbering system to keep in line with braille standards and for ease in
implementation given that the unicode character codes directly map to their binary
value representation.

For more details about numbering conventions and conversion to binary, reference
the [wikipedia
article](https://en.wikipedia.org/wiki/Braille_Patterns#Identifying.2C_naming_and_ordering).

## Related

- [braille-encode](https://www.npmjs.com/package/braille-encode) - Another binary
to braille encoder that uses a different dot numbering system
- [braille](https://www.npmjs.com/package/braille) - Converts between text and
braille
