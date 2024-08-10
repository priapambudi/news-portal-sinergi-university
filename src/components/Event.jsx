import { useRef } from "react";
import { event } from "../data/event.js";

function Event() {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#212934] text-white pb-5">
      <div className="w-[85%] md:py-[10px] md:px-[20px] mx-auto pb-5">
        <div className="pt-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Event Kami</h1>
            <p>Informasi terbaru tentang Event Universitas Sinergi</p>
          </div>
          <div className="flex items-center">
            <i
              className="bx bx-left-arrow-circle"
              style={{
                color: "#fff",
                marginRight: "10px",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={handleScrollLeft}
            ></i>
            <i
              className="bx bx-right-arrow-circle"
              style={{ color: "#fff", fontSize: "30px", cursor: "pointer" }}
              onClick={handleScrollRight}
            ></i>
          </div>
        </div>
        <hr className="border-b-2 border-[#F6901E] mb-8 mt-3" />
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {event.map((item) => (
            <div
              key={item.id}
              className="min-w-[270px] snap-start mb-5"
              style={{ scrollSnapAlign: "start" }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[250px] h-[250px] object-cover rounded-lg"
                />
              )}
              <h1 className="text-[16px] font-bold mt-2">{item.title}</h1>
              <p className="text-[14px] font-light">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
