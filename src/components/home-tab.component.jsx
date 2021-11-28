import React, { useContext } from "react";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { ImageContext } from "../../image-context";

const HomeTab = () => {
  const { state } = useContext(ImageContext);
  const [images] = state;

  return (
    <div className="HomeTab">
      <h3 className="mb-5 font-medium">Free Stock Photos</h3>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2">
        {images?.map((image) => (
          <div className="relative group cursor-pointer " key={image.id}>
            <div className="relative w-full" style={{ height: "300px" }}>
              <Image
                src={image.webformatURL || "/images/sample.jpeg"}
                objectFit="cover"
                layout="fill"
                className="w-full"
                alt="sample"
              />
            </div>
            <div
              className="absolute bottom-0 md:bottom-1 p-6 text-white flex justify-between w-full items-center opacity-0 group-hover:opacity-100 transition-all sm:p-3 md:p-4"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(0,0,0,.7))",
              }}
            >
              <div className="flex space-x-3 items-center sm:hidden md:hidden">
                <Image
                  src={image.userImageURL || "/images/sample.jpeg"}
                  width={30}
                  height={30}
                  className="rounded-full"
                  alt={image.user}
                />
                <p>{image.user}</p>
              </div>
              <div className="flex space-x-3 items-center sm:ml-auto">
                <a
                  href={image.largeImageURL}
                  download={image.largeImageURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdOutlineFileDownload className="text-2xl" />
                </a>
                <AiOutlinePlusCircle className="text-2xl" />
                <BsHeart className="text-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeTab;
