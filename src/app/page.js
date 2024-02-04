"use client";

import { data } from "@/components/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import arrow_left from "../assets/arrow_back.svg";
import arrow_right from "../assets/arrow_forward.svg";

export default function Home() {
  const [current, setCurrent] = useState(0);

  const bgVariant = {
    initial: {
      opacity: 1,
      y: "100%",
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariant = {
    initial: {
      opacity: 0,
      x: 100,
    },
    enter: (current) => ({
      opacity: 1,
      x: 0,
      transition: {
        // duration: 0.5,
        delay: current,
      },
    }),
    exit: (current) => ({
      opacity: 0,
      x: -100,
      transition: {
        // duration: 0.5,
        delay: current,
      },
    }),
  };

  const miniVariant = {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleClickRight = () => {
    if (current === data.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const handleClickLeft = () => {
    if (current === 0) {
      setCurrent(2);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <main className="h-screen w-full container mx-auto flex justify-center items-center">
      <AnimatePresence mode="popLayout">
        <div
          key={current}
          className="w-full h-[600px] rounded-3xl relative overflow-hidden"
          style={{ backgroundColor: data[current].bgColor }}
        >
          <motion.div
            className="h-[600px] w-[75%] relative p-10"
            variants={bgVariant}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Image
              src={data[current].bg}
              alt=""
              fill
              className="opacity-50 rounded-l-3xl"
            />
          </motion.div>

          <div className="flex items-center justify-between gap-20 absolute top-0 w-full h-full pl-10">
            <motion.div className="flex flex-col gap-6 text-white">
              <motion.p
                className="pl-3"
                variants={textVariant}
                custom={0.2}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {data[current].tag}
              </motion.p>
              <motion.h1
                className="text-[66px] font-bold"
                variants={textVariant}
                custom={0.3}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {data[current].title}
              </motion.h1>
              <motion.p
                className="text-[20px]"
                variants={textVariant}
                custom={0.4}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {data[current].desc}
              </motion.p>
            </motion.div>

            <div>
              <motion.div
                variants={miniVariant}
                className="mr-60 h-[400px] w-[300px] relative"
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Image
                  src={data[current].mini}
                  alt=""
                  fill
                  className="rounded-3xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex gap-10 absolute bottom-10 left-[71%]">
            <div
              className="bg-slate-50 cursor-pointer flex items-center w-[40px] h-[40px] justify-center rounded-full relative"
              onClick={handleClickLeft}
            >
              <Image src={arrow_left} alt="" height={30} width={30} />
            </div>
            <div
              className="bg-slate-50 cursor-pointer flex items-center w-[40px] h-[40px] justify-center rounded-full relative"
              onClick={handleClickRight}
            >
              <Image src={arrow_right} alt="" height={30} width={30} />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}
