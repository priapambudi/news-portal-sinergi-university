import { news } from "../data/news.js";

function NewsDetail() {
  return (
    <div className="w-[85%] mx-auto md:py-[10px] md:px-[20px]">
      <div className="md:flex py-5">
        <div className="flex items-center gap-1">
          <h1 className="text-[#149FC4]">Berita</h1>
          <span className="md:ml-5">{">"}</span>
        </div>
        <h1 className="md:ml-5">{news[0].title}</h1>
      </div>

      <div className="pt-10 flex flex-col md:flex-row">
        <div className="w-full md:w-[736px] mr-0 md:mr-10">
          <h1 className="text-2xl font-bold">{news[0].title}</h1>
          <p className="pt-5">
            Oleh {news[0].author} • {news[0].date}
          </p>
          <img
            src={news[0].image}
            alt={news[0].title}
            className="pt-10 w-full  h-auto"
          />
          <p className="pt-10">{news[0].content}</p>

          <div>
            <p className="pt-10 font-semibold">Share</p>
            <div className="flex gap-2 mt-2">
              <i
                className="bx bxl-linkedin"
                style={{
                  color: "#fff",
                  backgroundColor: "#0BB1CB",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              />
              <i
                className="bx bxl-instagram"
                style={{
                  color: "#fff",
                  backgroundColor: "#0BB1CB",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              />
              <i
                className="bx bxl-whatsapp"
                style={{
                  color: "#fff",
                  backgroundColor: "#0BB1CB",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              ></i>
              <i
                className="bx bxl-twitter"
                style={{
                  color: "#fff",
                  backgroundColor: "#0BB1CB",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              ></i>
              <i
                className="bx bx-share-alt"
                style={{
                  color: "#fff",
                  backgroundColor: "#0BB1CB",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              ></i>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[344px] mt-10 md:mt-0">
          <h1 className="text-xl font-bold text-center md:text-left">
            Berita Terkait
          </h1>

          <div className="pb-10">
            {news.map((item) => (
              <div key={item.id} className="border-b-2 pb-5">
                <h1 className="font-bold mt-5">{item.title}</h1>
                <p className="pt-2">
                  <i className="bx bx-user" /> {item.author} •{" "}
                  <i className="bx bx-calendar" /> {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
