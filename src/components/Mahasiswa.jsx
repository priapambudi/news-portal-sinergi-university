import { useEffect, useState } from "react";
import { mahasiswa } from "../data/mahasiswa.js";

function Mahasiswa() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this width as needed
    };

    // Initial check
    checkScreenSize();

    // Add event listener to handle window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="w-[85%] mx-auto py-10 md:py-[10px] md:px-[20px]">
      <h1 className="text-2xl font-bold">Mahasiswa</h1>
      <p className="">
        Berita terkini mengenai aktivitas, prestasi, dan riset mahasiswa
      </p>
      <hr className="border-b-2 border-[#F6901E] mb-8 mt-3" />

      <div className="flex flex-col md:grid md:grid-cols-4 gap-3">
        {mahasiswa
          .slice(0, isMobile ? 5 : mahasiswa.length)
          .map((item, index) => (
            <div key={index} className="flex md:flex-col gap-3 md:mt-5">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover rounded-lg w-[80px] md:w-[250px] md:h-[140px]"
              />
              <div>
                <h1 className="font-bold line-clamp-2">{item.title}</h1>
                <div className="mt-[5px] flex items-center gap-2">
                  <p>{item.date}</p>
                  <p>•</p>
                  <p>{item.author}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Mahasiswa;
