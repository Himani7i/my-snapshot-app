import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sampleImages = [
  "/images/product1.jpg",
  "/images/product2.jpg",
  "/images/product3.jpg",
  "/images/product4.jpg",
];



const getRandomImage = (exclude) => {
  const filtered = sampleImages.filter((url) => url !== exclude);
  return filtered[Math.floor(Math.random() * filtered.length)];
};

const ProductImage = ({ url, onReplace }) => {
  return (
    <motion.div
      className="relative w-full h-[500px] cursor-pointer overflow-hidden group"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
      onClick={() => onReplace(url)}
    >
      <img
        src={url}
        alt="product"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute bottom-0 w-full bg-white py-4 text-center text-black font-semibold text-lg opacity-0 group-hover:opacity-100 transition">
        ADD TO BAG +
      </div>
    </motion.div>
  );
};

const ProductCarousel = () => {
  const [leftImg, setLeftImg] = useState(sampleImages[0]);
  const [rightImg, setRightImg] = useState(sampleImages[1]);

  const replaceImage = (clickedUrl) => {
    if (clickedUrl === leftImg) {
      setLeftImg(getRandomImage(leftImg));
    } else {
      setRightImg(getRandomImage(rightImg));
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf6f5] py-20 px-6 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        <AnimatePresence mode="wait">
          <ProductImage key={leftImg} url={leftImg} onReplace={replaceImage} />
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <ProductImage key={rightImg} url={rightImg} onReplace={replaceImage} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductCarousel;
