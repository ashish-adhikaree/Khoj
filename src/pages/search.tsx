import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  HeaderMenus,
  Pagination,
  SingleSearchResult,
  SearchHeader,
} from "@/components";
import { SingleResult } from "types";

const SearchPage = ({ searchResult }: { searchResult: any }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{`${router.query.q} - Khoj`}</title>
      </Head>
      <SearchHeader />
      <div>
        <HeaderMenus />
        <div className="ml-5 md:ml-[12rem] text-gray-500">{`About ${searchResult.searchInformation.formattedTotalResults} results. (${searchResult.searchInformation.formattedSearchTime} seconds)`}</div>
        <div>
          {searchResult.items.map((item: SingleResult, index: number) => {
            return <SingleSearchResult key={item.link + index} item={item} />;
          })}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const start = context.query.start ? context.query.start : 0;
  const searchResult = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX}&q=${context.query.q}&start=${start}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log(error));
  return {
    props: { searchResult },
  };
};
