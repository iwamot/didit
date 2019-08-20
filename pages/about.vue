<template>
  <div>
    <header>
      <h1><nuxt-link to="/">didit</nuxt-link></h1>
    </header>
    <main>
      <p lang="ja">
        こんにちは、<a href="https://iwamot.com/">iwamot</a>です。
      </p>
      <p lang="ja">
        diditは、<a href="https://www.jitec.ipa.go.jp/">情報処理技術者試験</a
        >の合格状況を公開できるサイトです。合格者をカッコよく見せたくて作りました。
      </p>
      <p lang="ja">合格者のみなさま、下記の手順でぜひご参加ください。</p>
      <ol lang="ja">
        <li>
          <a href="https://github.com/iwamot/didit"
            >https://github.com/iwamot/didit</a
          >をforkする
        </li>
        <li>
          <a href="https://github.com/iwamot/didit/blob/master/data/iwamot.json"
            >data/iwamot.json</a
          >
          を参考に data/{GitHubのアカウント名}.json を作る
        </li>
        <li>https://github.com/iwamot/didit にプルリクエストを送る</li>
      </ol>
      <p lang="ja">
        masterブランチにマージされれば、あなたのページが公開されます。
      </p>
    </main>
    <footer>
      <p><nuxt-link to="/">top</nuxt-link></p>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return { title: 'about didit' }
  }
}
</script>
