export default function Reviews() {
  return (
    <div className="reviews flex flex-col bg-black p-8 mt-16   px-16">
      <h2 className="text-4xl font-bold text-white mt-5">Reviews</h2>
      <div className="w-full flex flex-col items-center justify-center p-12">
        <div className="w-3/4">
          <div className="flex flex-row items-center">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              alt=""
              className=" h-16 rounded-full"
            />
            <div className=" ml-4">
              <p className="font-bold text-xl leading-3 text-white">John Doe</p>
              <p className="text-white text-opacity-60 mt-2">
                {" "}
                CEO at Beylabee
              </p>
            </div>
          </div>
          <p className="mt-4  leading-relaxed  tracking-tight text-gray-500">
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. ”
          </p>
        </div>

        <div className="w-3/4 mt-16">
          <div className="flex flex-row items-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt=""
              className=" h-16 rounded-full"
            />
            <div className=" ml-4">
              <p className="font-bold text-xl leading-3 text-white">Jane Doe</p>
              <p className="text-white text-opacity-60 mt-2">
                CEO at Mural Priya
              </p>
            </div>
          </div>
          <p className="mt-4 leading-relaxed  tracking-tight text-gray-500">
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. ”
          </p>
        </div>
      </div>
    </div>
  );
}
