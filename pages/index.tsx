import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fake H&prime;ug Shop.</title>
        <meta
          name="description"
          content="Just a fake H'ug shop bro. Dont be serious rn!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dark:bg-gray-800 min-h-screen">
        <div className="max-w-3xl mx-auto py-8 px-4 space-y-8">
          <Navbar />
          <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
          <Products />
          <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
