const Footer = () => {
  return (
    <div className="absolute bottom-0 w-screen bg-gray-100 text-gray-500">
      <div className="border-b-2 px-5 py-2">Nepal</div>
      <div className="py-2 px-5 flex flex-col flex-wrap cursor-pointer md:flex-row md:justify-between">
        <div className="justify-center  flex space-x-3">
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        <div className="justify-center flex space-x-3">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
