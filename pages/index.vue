<template>
  <div>
    <header>
      <h1>didit</h1>
      <p class="description">
        Those who have passed
        <a href="https://www.jitec.ipa.go.jp/"
          >Japan's Information Technology Engineers Examination</a
        >
      </p>
    </header>
    <main>
      <ul class="users">
        <li v-for="userId in userIds" :key="userId">
          <nuxt-link :to="userId" class="passed">{{ userId }}</nuxt-link>
        </li>
      </ul>
    </main>
    <footer>
      <p class="navi"><nuxt-link to="/about">about</nuxt-link></p>
    </footer>
  </div>
</template>

<script>
export default {
  asyncData() {
    const path = require('path')
    const userIds = require
      .context('~/data/', false, /\.json$/)
      .keys()
      .map(function (key) {
        return path.basename(key, '.json')
      })
    return { userIds }
  },

  head() {
    return {
      title: 'didit：情報処理技術者試験の合格者をカッコよく見せるサイト',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Those who have passed Japan's Information Technology Engineers Examination",
        },
      ],
    }
  },
}
</script>
