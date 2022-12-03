import Head from "next/head";
import Footer from "../components/landing-page/footer";
import Header from "../components/landing-page/header";
import Logo from "../components/landing-page/logo";
import QuickButton from "../components/landing-page/quickButton";
import SearchBar from "../components/landing-page/searchBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khoj</title>
        <meta name="description" content="Developed by Ashish Adhikari" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-screen pt-20 px-5 space-y-5 flex flex-col items-center justify-center">
        <Logo />
        <SearchBar />
      </div>
      <Footer/>
    </div>
  );
}
