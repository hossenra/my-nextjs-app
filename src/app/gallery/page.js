import Image from "next/image";
import nextImg from "../../asserts/next-img.jpg";
import Navbar from "@/components/Navbar";

const GalleryPage = () => {
  return (
    <div className="text-center">
      <Navbar />
      <img
        src="https://image-optimization-one.vercel.app/api/frog.jpg"
        alt=""
        className="mx-auto"
        width={500}
        height={500}
      />
      <h1>Next Js Image Component</h1>
      <Image
        src="https://image-optimization-one.vercel.app/api/frog.jpg"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1>Local Image</h1>
      <Image
        src={nextImg}
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
