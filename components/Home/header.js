import { IoReorderTwoSharp } from "react-icons/io5";
import Button from "../GlobalComponents/button";
import { motion, useScroll } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";

export default function Header() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  return (
    <header className="flex min-h-screen relative justify-center items-center  flex-col ">
      <div className="flex absolute top-0 w-full p-8 px-10 flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-center">
          <img className="logo" src="/images/logo.svg" alt="" />
          <h1 className="text-3xl ml-2 font-semibold">Oronium</h1>
        </div>
        <div className="p-4 rounded-full navbar border-gray-200 border-2">
          <IoReorderTwoSharp size={"2em"} />
        </div>
      </div>
      <div className=" w-full h-full flex flex-grow  flex-col items-center justify-center">
        <h3 className="text-2xl">Your Dream — Our Vision</h3>
        <motion.div
          style={{
            translateX: scrollYProgress * 100,
          }}
        >
          <h2 className="text-7xl text-gray-200 mb-12 font-bold  tracking-tighter  my-4">
            Hi, we’re <span className="font-bold text-black">Oronium</span>
          </h2>
        </motion.div>
        <Button data={"Works"} />
      </div>
      <div className="absolute flex flex-col items-center justify-center bottom-5">
        <p className="text-xl mb-1">Scroll down</p>
        <motion.div
          transition={{ repeat: Infinity, type: "spring", stiffness: 100 }}
          animate={{
            translateY: [1, 2, 2, 3, 1, 1],
          }}
        >
          <BsArrowDown className="cursor-pointer" size={"1.8em"} />
        </motion.div>
      </div>
    </header>
  );
}
