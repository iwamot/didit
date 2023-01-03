import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";

function Home({ userIds }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>didit：情報処理技術者試験の合格者をカッコよく見せるサイト</title>
        <meta
          name="description"
          content="Those who have passed Japan's Information Technology Engineers Examination"
        />
      </Head>
      <header>
        <h1>didit</h1>
        <p className="description">
          Those who have passed{" "}
          <a href="https://www.jitec.ipa.go.jp/">
            Japan&apos;s Information Technology Engineers Examination
          </a>
        </p>
      </header>
      <main>
        <ul className="users">
          {userIds.map((userId: any) => (
            <li key={userId}>
              <Link href={"/" + userId}  className="passed">
                {userId}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p className="navi">
          <Link href="/about">
            about
          </Link>
        </p>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), "data");
  const filenames = fs.readdirSync(dataDirectory);
  const userIds = filenames.map((filename) => {
    return path.basename(filename, ".json");
  });
  return {
    props: { userIds },
  };
};

export default Home;
