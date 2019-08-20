<template>
  <div>
    <header>
      <h1><nuxt-link to="/">didit</nuxt-link></h1>
      <p class="description">
        <strong
          ><a :href="'https://github.com/' + $route.params.userId">{{
            userId
          }}</a></strong
        >
        has passed <strong>{{ rate }}%</strong> of
        <a href="https://www.jitec.ipa.go.jp/"
          >Japan's Information Technology Engineers Examination</a
        >
      </p>
    </header>
    <main>
      <ul class="exams">
        <li v-for="exam in exams" :key="exam.abbr">
          <a
            :class="{ passed: data[exam.abbr] }"
            :href="
              'https://www.jitec.ipa.go.jp/1_11seido/' +
                exam.abbr.toLowerCase() +
                '.html'
            "
            :title="
              exam.title +
                ' (' +
                (data[exam.abbr] ? 'passed' : 'not passed') +
                ')'
            "
            >{{ exam.abbr }}</a
          >
        </li>
      </ul>
    </main>
    <footer>
      <p class="navi">
        <nuxt-link to="/">home</nuxt-link>
        |
        <nuxt-link to="/about">about</nuxt-link>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^[a-zA-Z0-9][a-zA-Z0-9-]{0,38}$/.test(params.userId)
  },

  asyncData({ params, error }) {
    const userId = params.userId

    let data
    try {
      data = require(`~/data/${userId}.json`)
    } catch (e) {
      error({ statusCode: 404, message: 'This page could not be found' })
      return
    }

    const exams = [
      { abbr: 'IP', title: 'Information Technology Passport Examination' },
      { abbr: 'SG', title: 'Information Security Management Examination' },
      {
        abbr: 'FE',
        title: 'Fundamental Information Technology Engineer Examination'
      },
      {
        abbr: 'AP',
        title: 'Applied Information Technology Engineer Examination'
      },
      { abbr: 'ST', title: 'Information Technology Strategist Examination' },
      { abbr: 'SA', title: 'Systems Architect Examination' },
      { abbr: 'PM', title: 'Project Manager Examination' },
      { abbr: 'NW', title: 'Network Specialist Examination' },
      { abbr: 'DB', title: 'Database Specialist Examination' },
      { abbr: 'ES', title: 'Embedded Systems Specialist Examination' },
      {
        abbr: 'SM',
        title: 'Information Technology Service Manager Examination'
      },
      { abbr: 'AU', title: 'Systems Auditor Examination' },
      {
        abbr: 'SC',
        title: 'Registered Information Security Specialist Examination'
      }
    ]

    const rate = Math.round(
      (Object.keys(data).filter(function(key) {
        return data[key]
      }).length /
        exams.length) *
        100
    )

    return { data, exams, rate, userId }
  },

  head() {
    return {
      title: this.userId + '@didit',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.userId +
            ' has passed ' +
            this.rate +
            "% of Japan's Information Technology Engineers Examination"
        }
      ]
    }
  }
}
</script>
