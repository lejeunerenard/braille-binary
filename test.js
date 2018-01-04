const test = require('tape')

const bb = require('./')

test('convert to braille', (t) => {
  t.test('1 character (8bit)', (t) => {
    t.is(bb(1), '⠁', '1 == ⠁')
    t.is(bb(2), '⠂', '2 == ⠂')
    t.is(bb(3), '⠃', '3 == ⠃')
    t.is(bb(64), '⡀', '64 == ⡀')
    t.is(bb(128), '⢀', '128 == ⢀')
    t.is(bb(255), '⣿', '255 == ⣿')

    t.end()
  })

  t.test('2 character (16bit)', (t) => {
    t.is(bb(256), '⠁⠀', '256 == ⠁⠀')
    t.is(bb(65535), '⣿⣿', '65535 == ⣿⣿')

    t.end()
  })

  t.skip('3 character (24bit)', (t) => {
    t.is(bb(65536), '⠁⠀⠀', '65536 == ⠁⠀⠀')

    t.end()
  })

  t.end()
})
