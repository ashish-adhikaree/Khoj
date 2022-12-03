import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import HeaderMenuItem from "../components/search-page/headerMenus";
import Pagination from "../components/search-page/pagination";
import SearchHeader from "../components/search-page/searchHeader";
import { Response } from "../response";

const SearchPage = ({searchResult}:{searchResult:any}) => {
  const router = useRouter();
  return (
    <div>
      <SearchHeader />
      <div>
        <HeaderMenuItem />
        {searchResult.items.map((item:any, index:number) => {
          return (
            <div key={index} className="m-5 max-w-screen-md md:ml-[12rem]">
              <div
                className="group cursor-pointer"
                onClick={() => {
                  router.push(item.link);
                }}
              >
                <p className="text-small">{item.formattedUrl}</p>
                <p className="text-blue-700 text-xl group-hover:underline underline-offset-1">
                  {item.title}
                </p>
              </div>
              <p>{item.snippet}</p>
            </div>
          );
        })}
      </div>
      <Pagination/>
    </div>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = true;
  const start = context.query.start? context.query.start : 0
  const searchResult = useDummyData
    ? Response
    : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX}&q=${context.query.q}&start=${start}`)
        .then((res) => {
          return res.json();
        })
        .catch((error) => console.log(error));
  return {
    props: { searchResult },
  };
};
