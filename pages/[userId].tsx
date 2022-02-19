import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";

function User({
  userId,
  data,
  rate,
  title,
  description,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={"https://didit.iwamot.com/" + userId}
        />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://didit.iwamot.com/didit.png"
        />
      </Head>
      <header>
        <h1>
          <Link href="/">
            <a>didit</a>
          </Link>
        </h1>
        <p className="description">
          <strong>
            <a href={"https://github.com/" + userId}>{userId}</a>
          </strong>{" "}
          has passed <strong>{rate}%</strong> of{" "}
          <a href="https://www.jitec.ipa.go.jp/">
            Japan&apos;s Information Technology Engineers Examination
          </a>
        </p>
      </header>
      <main>
        <ul className="exams">
          {exams.map((exam: any) => (
            <li key={exam.abbr}>
              <Link
                href={
                  "https://www.jitec.ipa.go.jp/1_11seido/" +
                  exam.abbr.toLowerCase() +
                  ".html"
                }
              >
                <a
                  {...(data[exam.abbr] && { className: "passed" })}
                  title={
                    exam.title +
                    " (" +
                    (data[exam.abbr] ? "passed" : "not passed") +
                    ")"
                  }
                >
                  {exam.abbr}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p className="navi">
          <Link href="/">
            <a>home</a>
          </Link>{" "}
          |{" "}
          <Link href="/about">
            <a>about</a>
          </Link>
        </p>
      </footer>
    </div>
  );
}

const exams = [
  { abbr: "IP", title: "Information Technology Passport Examination" },
  { abbr: "SG", title: "Information Security Management Examination" },
  {
    abbr: "FE",
    title: "Fundamental Information Technology Engineer Examination",
  },
  { abbr: "AP", title: "Applied Information Technology Engineer Examination" },
  { abbr: "ST", title: "Information Technology Strategist Examination" },
  { abbr: "SA", title: "Systems Architect Examination" },
  { abbr: "PM", title: "Project Manager Examination" },
  { abbr: "NW", title: "Network Specialist Examination" },
  { abbr: "DB", title: "Database Specialist Examination" },
  { abbr: "ES", title: "Embedded Systems Specialist Examination" },
  { abbr: "SM", title: "Information Technology Service Manager Examination" },
  { abbr: "AU", title: "Systems Auditor Examination" },
  {
    abbr: "SC",
    title: "Registered Information Security Specialist Examination",
  },
];

export async function getStaticPaths() {
  const dataDirectory = path.join(process.cwd(), "data");
  const filenames = fs.readdirSync(dataDirectory);
  const paths = filenames.map((filename) => {
    return { params: { userId: path.basename(filename, ".json") } };
  });
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params === undefined) {
    throw new Error("params is undefined.");
  }
  const jsonPath = path.join(process.cwd(), "data", params.userId + ".json");
  const jsonText = fs.readFileSync(jsonPath, "utf-8");
  const data = JSON.parse(jsonText);
  const rate = Math.round(
    (Object.keys(data).filter(function (key) {
      return data[key];
    }).length /
      exams.length) *
      100
  );
  const title = params.userId + " - didit";
  const description =
    params.userId +
    " has passed " +
    rate +
    "% of Japan&apos;s Information Technology Engineers Examination";
  return {
    props: {
      userId: params.userId,
      data: data,
      rate: rate,
      title: title,
      description: description,
    },
  };
};

export default User;
