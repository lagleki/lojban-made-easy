import Container from "../components/container";
import AllStories from "../components/all-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { TPost } from "../types/post";
import Header from "../components/header";

import { home_title } from "../config/config";

type Props = {
  allPosts: TPost[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{home_title}</title>
        </Head>
        <div className="pb-8">
          <Container>
            <Header />
            <div className="mb-8 mt-4 mx-auto max-w-7xl px-4 sm:px-6">
              {/* <Intro /> */}
              {allPosts.length > 0 && <AllStories posts={allPosts} />}
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = await getAllPosts(
    [
      "title",
      "hidden",
      "date",
      "slug",
      "directory",
      "author",
      "coverImage",
      "excerpt",
      "meta.author",
      "meta.priority"
    ],
    false
  );

  return {
    props: { allPosts },
  };
};

// export const config = { amp: 'hybrid' }
