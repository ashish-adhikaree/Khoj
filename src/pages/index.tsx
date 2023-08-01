import Head from "next/head";
import {Header, Footer, Logo, SearchBar} from "@/components"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khoj</title>
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
