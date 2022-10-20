export default function Works() {
  return (
    <div className="flex flex-col p-8 mt-10   px-16">
      <h2 className="text-4xl font-bold">Our Works</h2>
      <div className="grid grid-cols-3 grid-rows-2 p-8  gap-7">
        <div className="col-span-2 relative overflow-hidden row-height bg-red-500 ">
          <img
            src="https://cdn.dribbble.com/userupload/3006709/file/original-6917d7a2884bd06c17987d0aff11ae4f.jpg?compress=1&resize=752x"
            alt=""
            className="object-cover h-full img w-full transition-all image-hover hover:scale-105"
          />
          <div className="w-full h-full light-overlay  transition-all p-7 flex items-end bg-black absolute top-0 bg-opacity-0 hover:bg-opacity-40">
            <div className="slidehover transition-all">
              <h3 className="text-4xl font-bold text-white">CloudHorizons</h3>
              <p className=" text-sm text-white leading-relaxed mt-4 w-3/4 tracking-tight  ">
                Our services are executed by transformative, challenging and
                professional expertises, which makes us quaint from others
              </p>
            </div>
          </div>
        </div>
        <div className=" relative overflow-hidden row-height bg-red-500 ">
          <img
            src="https://cdn.dribbble.com/users/1807239/screenshots/5653722/media/d28fa573ae4c17561efa5dad4268f4e0.jpg?compress=1&resize=1200x900&vertical=top"
            alt=""
            className="object-cover h-full img w-full transition-all image-hover hover:scale-105"
          />
          <div className="w-full h-full light-overlay  transition-all p-7 flex items-end bg-black absolute top-0 bg-opacity-0 hover:bg-opacity-40">
            <div className="slidehover transition-all">
              <h3 className="text-4xl font-bold text-white">CloudHorizons</h3>
              <p className=" text-sm text-white leading-relaxed mt-4 w-3/4 tracking-tight  ">
                Our services are executed by transformative, challenging and
                professional expertises, which makes us quaint from others
              </p>
            </div>
          </div>
        </div>
        <div className=" relative overflow-hidden row-height bg-red-500 ">
          <img
            src="https://cdn.dribbble.com/users/134161/screenshots/5011976/reuters_news_09.png?compress=1&resize=800x600&vertical=top"
            alt=""
            className="object-cover h-full img w-full transition-all image-hover hover:scale-105"
          />
          <div className="w-full h-full light-overlay  transition-all p-7 flex items-end bg-black absolute top-0 bg-opacity-0 hover:bg-opacity-40">
            <div className="slidehover transition-all">
              <h3 className="text-4xl font-bold text-white">CloudHorizons</h3>
              <p className=" text-sm text-white leading-relaxed mt-4 w-3/4 tracking-tight  ">
                Our services are executed by transformative, challenging and
                professional expertises, which makes us quaint from others
              </p>
            </div>
          </div>
        </div>
        <div className=" relative col-span-2 overflow-hidden row-height bg-red-500 ">
          <img
            src="https://cdn.dribbble.com/users/1390/screenshots/11911882/media/70044321e71c8dd3dfafacb753ea1190.png?compress=1&resize=1200x900&vertical=top"
            alt=""
            className="object-cover h-full img w-full transition-all image-hover hover:scale-105"
          />

          <div className="w-full h-full light-overlay  transition-all p-7 flex items-end bg-black absolute top-0 bg-opacity-0 hover:bg-opacity-40">
            <div className="slidehover transition-all">
              <h3 className="text-4xl font-bold text-white">CloudHorizons</h3>
              <p className=" text-sm text-white leading-relaxed mt-4 w-3/4 tracking-tight  ">
                Our services are executed by transformative, challenging and
                professional expertises, which makes us quaint from others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
