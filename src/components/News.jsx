import { news } from "../data/news.js";
// import { Link } from "react-router-dom";
function News() {
  return (
    <div className="w-[85%] mx-auto pt-5 md:py-[10px] md:px-[20px]">
      <h1 className="text-center text-2xl font-bold mt-[40px]">
        Berita Terbaru
      </h1>
      <hr className=" mx-auto border-b-2 border-[#F6901E] w-[55%] md:w-[20%]" />

      <div className="flex flex-col justify-center items-center md:flex-row gap-5">
        <div className="w-full h-full">
          {news.slice(0, 1).map((item) => (
            <div key={item.id}>
              <a href="./NewsDetailPage">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mt-[20px] md:mt-[5px] w-[349px] h-[196px] md:w-[540px] md:h-[399px] object-cover rounded-lg"
                  />
                )}
                <h1 className="font-bold mt-[10px]">{item.title}</h1>
              </a>
              <div className="mt-[5px] flex items-center gap-2">
                <p>{item.date}</p>
                <p>•</p>
                <p>{item.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          {news.slice(1, 5).map((item) => (
            <div key={item.id} className="flex md:flex-col gap-2 mt-5">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded-lg w-[80px] md:w-[250px] md:h-[140px]"
                />
              )}
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
    </div>
  );
}

export default News;
