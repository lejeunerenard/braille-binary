const test = require('tape')

const bb = require('./')

test('convert to braille', (t) => {
  t.test('1 character (8bit)', (t) => {
    t.plan(6)

    t.is(bb(1), '⠁', '1 == ⠁')
    t.is(bb(2), '⠂', '2 == ⠂')
    t.is(bb(3), '⠃', '3 == ⠃')
    t.is(bb(64), '⡀', '64 == ⡀')
    t.is(bb(128), '⢀', '128 == ⢀')
    t.is(bb(255), '⣿', '255 == ⣿')
  })

  t.test('2 character (16bit)', (t) => {
    t.plan(2)

    t.is(bb(256), '⠁⠀', '256 == ⠁⠀')
    t.is(bb(65535), '⣿⣿', '65535 == ⣿⣿')
  })

  t.test('n character (24bit)', (t) => {
    t.plan(4)

    t.is(bb(65536), '⠁⠀⠀', '65536 == ⠁⠀⠀')
    t.is(bb(16777215), '⣿⣿⣿', '16777215 == ⣿⣿⣿')
    t.is(bb(16777472), '⠁⠀⠁⠀', '16777472 == ⠁⠀⠁⠀')
    t.is(bb(4294967295), '⣿⣿⣿⣿', '4294967295 == ⣿⣿⣿⣿')
  })

  t.end()
})
