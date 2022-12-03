import { useRouter } from "next/router";
import { GrNext, GrPrevious } from "react-icons/gr";

const Pagination = () => {
  const router = useRouter();
  const start = router.query.start ? router.query.start : 0;
  const handleNext = (e: any) => {
    e.preventDefault();
    router.push(`/search?q=${router.query.q}&start=${Number(start) + 10}`);
  };

  const handlePrev = (e: any) => {
    e.preventDefault();
    router.push(`/search?q=${router.query.q}&start=${Number(start) - 10}`);
  };
  return (
    <div className="flex space-x-5 max-w-screen-md justify-center md:ml-[12rem] py-10 text-blue-700 font-bold">
      {start >= 10 ? (
        <div
          onClick={handlePrev}
          className="flex items-center space-x-3 bg-gray-100 px-5 py-3 rounded-md hover:shadow-md cursor-pointer"
        >
          <GrPrevious />
          <p>Previous</p>
        </div>
      ) : (
        <div></div>
      )}
      <div
        onClick={handleNext}
        className="flex items-center space-x-3 bg-gray-100 px-5 py-3 rounded-md hover:shadow-md cursor-pointer"
      >
        <p>Next</p>
        <GrNext />
      </div>
    </div>
  );
};

export default Pagination;
