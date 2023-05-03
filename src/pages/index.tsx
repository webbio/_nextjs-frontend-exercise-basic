import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Webbio Posts</title>
      </Head>
      <main className="flex min-h-screen flex-col max-w-2xl mx-auto w-full">
        <h1 className="text-5xl font-extrabold mt-20">Posts</h1>
        {/* Post overview */}
      </main>
    </>
  );
};

export default Home;
