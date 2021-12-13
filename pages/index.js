import Head from "next/head";
import Image from "next/image";
import Svg from "../components/svg";
import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  let easing = [0.6, -0.05, 0.01, 0.99];
  return (
    <motion.div className="h-screen w-full bgg  p-10 flex flex-col justify-center items-start  ">
      <Svg />

      <motion.h1
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.6, ease: easing }}
        className="font-roboto  lg:font-bold text-xl lg:text-6xl   text-gray-500 text-center heading"
      >
        Bi'gittim!
      </motion.h1>
      <motion.span
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: easing }}
        className="text-right font-roboto font-bold mr-2 text-white opacity-50"
      >
        geleceğim...
      </motion.span>
      <motion.span
        variants={variants}
        className="text-right font-roboto text-xs text-gray-600"
      >
        yakında burada
      </motion.span>
    </motion.div>
  );
}
