const test = require('tape')

const bb = require('./')

test('convert to braille', (t) => {
  t.test('1 character (8bit)', (t) => {
    t.plan(7)

    t.is(bb(0b0), '⠀', '0b0 == ⠀')
    t.is(bb(0b1), '⠁', '0b1 == ⠁')
    t.is(bb(0b10), '⠂', '0b10 == ⠂')
    t.is(bb(0b11), '⠃', '0b11 == ⠃')
    t.is(bb(0b1000000), '⡀', '0b1000000 == ⡀')
    t.is(bb(0b10000000), '⢀', '0b10000000 == ⢀')
    t.is(bb(0b11111111), '⣿', '0b11111111 == ⣿')
  })

  t.test('2 character (16bit)', (t) => {
    t.plan(2)

    t.is(bb(0b100000000), '⠁⠀', '0b100000000 == ⠁⠀')
    t.is(bb(0b1111111111111111), '⣿⣿', '16 \'1\'s == ⣿⣿')
  })

  t.test('n character (>=24bit)', (t) => {
    t.plan(4)

    t.is(bb(0b10000000000000000), '⠁⠀⠀', '0b10000000000000000 == ⠁⠀⠀')
    t.is(bb(0b111111111111111111111111), '⣿⣿⣿', '24 \'1\'s == ⣿⣿⣿')
    t.is(bb(0b00000001000000000000000100000000), '⠁⠀⠁⠀', 'values in 4th & 2nd character encode correctly')
    t.is(bb(0b11111111111111111111111111111111), '⣿⣿⣿⣿', '32 \'1\'s == ⣿⣿⣿⣿')
  })

  t.end()
})
