import {
  MdLanguage,
  MdPhoneAndroid,
  MdBrush,
  MdApartment,
} from "react-icons/md";
export default function Services() {
  return (
    <div className="p-8 flex flex-row px-16">
      <div className="flex flex-col w-2/4 items-center justify-center">
        <div className=" p-2 flex flex-row ">
          <div className="p-6 mr-4 flex flex-col justify-between rounded-2xl service-card ">
            <div className="">
              <MdLanguage size="3.5em" color="#1a73f6" />
            </div>
            <p className="blue-text font-bold text-xl">Web Development</p>
          </div>
          <div className="p-6 mr-4 flex flex-col justify-between rounded-2xl service-card ">
            <div className="">
              <MdPhoneAndroid size="3.5em" color="#1a73f6" />
            </div>
            <p className="blue-text font-bold text-xl">App Development</p>
          </div>
        </div>
        <div className="  p-2 flex flex-row">
          <div className="p-6 mr-4 flex flex-col justify-between rounded-2xl service-card ">
            <div className="">
              {" "}
              <MdBrush size="3.5em" color="#1a73f6" />
            </div>
            <p className="blue-text font-bold text-xl">UI/UX Design</p>
          </div>
          <div className="p-6 mr-4 flex flex-col justify-between rounded-2xl service-card ">
            <div className="">
              {" "}
              <MdApartment size="3.5em" color="#1a73f6" />
            </div>
            <p className="blue-text font-bold text-xl">Brand Building</p>
          </div>
        </div>
      </div>
      <div className="w-2/4 flex flex-col justify-center">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className=" text-xl leading-relaxed mt-4 w-3/4 tracking-tight text-gray-500 ">
          Our services are executed by transformative, challenging and
          professional expertises, which makes us quaint from others
        </p>
      </div>
    </div>
  );
}
