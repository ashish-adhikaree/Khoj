import { AiOutlineSearch } from "react-icons/ai";
import { HiMicrophone } from "react-icons/hi";
import { useRef } from "react";
import QuickButton from "./quickButton";
import { useRouter } from "next/router";

const SearchBar = () => {
  const searchValue = useRef<HTMLInputElement>(null);
  const router = useRouter()
  const handleClick = async (event: any) => {
    event.preventDefault();
    const value = searchValue?.current?.value;
    console.log(value)
    router.push(`/search?q=${value}`)
  };
  console.log(searchValue.current);
  return (
    <div className="w-full space-y-10">
      <form className="w-full border max-w-screen-sm flex rounded-full hover:shadow-md focus-within:shadow-md items-center m-auto">
        <AiOutlineSearch className="text-2xl text-gray-500 mx-5 my-3" />
        <input
          type="text"
          ref={searchValue}
          className="flex-grow outline-none "
        />
        <HiMicrophone className="text-2xl text-gray-500 mx-5 my-3" />
        <button className="hidden" type="submit" onClick={handleClick}></button>
      </form>
      <div className="flex space-x-5 w-full justify-center">
        <QuickButton onClick={handleClick} value="Google Search" />
        <QuickButton onClick = {()=>{}} value="I'm feeling lucky" />
      </div>
    </div>
  );
};

export default SearchBar;
