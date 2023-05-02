import { NextPage } from "next";
import { PostDetail } from "~/components/post-detail/post-detail";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <PostDetail />
    </main>
  );
};

export default Home;
