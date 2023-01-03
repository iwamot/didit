import Head from "next/head";
import Link from "next/link";

function About() {
  return (
    <div>
      <Head>
        <title>about didit</title>
        <meta
          name="description"
          content="情報処理技術者試験の合格状況を公開できるサイト「didit」の詳細"
        />
      </Head>
      <header>
        <h1>
          <Link href="/">
            didit
          </Link>
        </h1>
      </header>
      <main>
        <p lang="ja">
          diditは、<a href="https://www.jitec.ipa.go.jp/">情報処理技術者試験</a>
          の合格状況を公開できるサイトです。合格者をカッコよく見せたくて作りました。
        </p>
        <p lang="ja">
          参加手順は下記の通りです。マージされると、あなたのページが公開されます。
        </p>
        <ol lang="ja">
          <li>
            <a href="https://github.com/iwamot/didit">
              https://github.com/iwamot/didit
            </a>
            をforkする
          </li>
          <li>
            <a href="https://github.com/iwamot/didit/blob/master/data/iwamot.json">
              data/iwamot.json
            </a>
            を参考に data/&#123;GitHubのアカウント名&#125;.json を作る
          </li>
          <li>fork元のmasterブランチにプルリクエストを送る</li>
        </ol>
        <p lang="ja">機能やデザイン改善のプルリクエストも大歓迎です。</p>
        <p lang="ja">
          --
          <br />
          iwamot (<a href="https://github.com/iwamot">GitHub</a>,{" "}
          <a href="https://twitter.com/iwamot">Twitter</a>,{" "}
          <Link href="/iwamot">
            didit
          </Link>
          )
        </p>
      </main>
      <footer>
        <p className="navi">
          <Link href="/">
            home
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default About;
