import { resolve } from 'path'
import test from 'ava'
import { Nuxt, Builder } from 'nuxt'

let nuxt = null

test.before('Init Nuxt.js', async (t) => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try {
    config = require(resolve(rootDir, 'nuxt.config.js'))
  } catch (e) {}
  config.rootDir = rootDir
  config.dev = false
  config.mode = 'universal'
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
})

test('Route / exists and has a link to @iwamot', async (t) => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
  const element = window.document.querySelector("a[href='/iwamot']")
  t.not(element, null)
  t.is(element.textContent, 'iwamot')
})

test('Route /iwamot exists and shows @iwamot passed AP exam', async (t) => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/iwamot')
  const element = window.document.querySelector(
    "a[href='https://www.jitec.ipa.go.jp/1_11seido/ap.html']"
  )
  t.not(element, null)
  t.is(element.textContent, 'AP')
  t.true(element.classList.contains('passed'))
})

test.after('Closing server', (t) => {
  nuxt.close()
})
