import { createPage, setupTest } from '@nuxt/test-utils'

describe('browser', () => {
  setupTest({ browser: true })

  it('Route / has a link to @iwamot', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')
    expect(html).toContain('<a href="/iwamot" class="passed">iwamot</a>')
  })

  it('Route /iwamot shows that @iwamot passed AP exam', async () => {
    const page = await createPage('/iwamot')
    const html = await page.innerHTML('body')
    expect(html).toContain(
      '<a href="https://www.jitec.ipa.go.jp/1_11seido/ap.html" title="Applied Information Technology Engineer Examination (passed)" class="passed">AP</a>'
    )
  })
})
