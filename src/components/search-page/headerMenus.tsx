import { BiSearch, BiImage, BiVideo } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FiMoreVertical } from "react-icons/fi";

const HeaderMenuItem = () => {
  const array = [
    {
      icon: <BiSearch />,
      title: "All",
    },
    {
        icon: <BiVideo />,
        title: "Videos",
      },
      {
        icon: <BiImage />,
        title: "Images",
      },
      {
        icon: <GoLocation />,
        title: "Maps",
      },
      {
        icon: <FiMoreVertical />,
        title: "More",
      }
  ];
  return <div className="flex items-center space-x-5 text-gray-500 ml-5 md:ml-[12rem]  my-3">
    {array.map((headerMenu, index)=>{
        return <div key = {index} className="flex items-center space-x-2 cursor-pointer">
            {headerMenu.icon}
            <p>{headerMenu.title}</p>
        </div>
    })}
  </div>;
};

export default HeaderMenuItem;
