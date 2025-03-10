import Image from "next/image"
import { useState } from "react";
import { IoEye } from "react-icons/io5";

const GalleryPageSection = () => {
  const images = [
    "/gallery/gallery10.jpg",
    "/gallery/gallery1.jpg",
    "/gallery/gallery0.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
    "/gallery/gallery9.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/1.jpeg",
    "/gallery/5.jpeg",
    "/gallery/6.jpeg",
    "/gallery/21.jpeg",
    "/gallery/7.jpeg",
    "/gallery/8.jpeg",
    "/gallery/10.jpeg",
    "/gallery/11.jpeg",
    "/gallery/12.jpeg",
    "/gallery/13.jpeg",
    "/gallery/14.jpeg",
    "/gallery/16.jpeg",
    "/gallery/17.jpeg",
    "/gallery/18.jpeg",
    "/gallery/19.jpeg",
    "/gallery/20.jpeg",
    "/gallery/22.jpeg",
    "/gallery/24.jpeg",
    "/gallery/25.jpeg",
    "/gallery/26.jpeg",
    "/gallery/27.jpeg",
    "/gallery/28.jpeg",
    "/gallery/29.jpeg",
    "/gallery/30.jpeg",
    "/gallery/31.jpeg",
    "/gallery/32.jpeg",
    "/gallery/34.jpeg",
    "/gallery/35.jpeg",
    "/gallery/36.jpeg",
    "/gallery/37.jpeg",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <div className="flex flex-col gap-4">
          {images.slice(0, 16).map((image, index) => (
            <div className="relative" onClick={() => openModal(image)}>
              <Image
                key={index}
                src={image}
                alt={`Image ${index}`}
                width={400}
                height={400}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 bg-black opacity-0 text-transparent text-3xl hover:opacity-60 hover:text-white hover:cursor-pointer flex justify-center items-center">
                <IoEye size={40} /> 
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          {images.slice(14, 28).map((image, index) => (
            <div className="relative" onClick={() => openModal(image)}>
              <Image
                key={index}
                src={image}
                alt={`Image ${index}`}
                width={400}
                height={400}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 bg-black opacity-0 text-transparent text-3xl hover:opacity-60 hover:text-white hover:cursor-pointer flex justify-center items-center">
                <IoEye size={40} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          {images.slice(28, 42).map((image, index) => (
            <div className="relative" onClick={() => openModal(image)}>
              <Image
                key={index}
                src={image}
                alt={`Image ${index}`}
                width={400}
                height={400}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 bg-black opacity-0 text-transparent text-3xl hover:opacity-60 hover:text-white hover:cursor-pointer flex justify-center items-center">
                <IoEye size={40} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-all duration-700"
          onClick={closeModal}
        >
          <div className="relative w-[90%] max-w-2xl p-4 rounded-lg shadow-lg">
            <Image
              src={selectedImage}
              alt="Selected"
              width={600}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPageSection;