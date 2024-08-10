function Footer() {
  return (
    <div className="w-full py-10 bg-[#F8F9FA] text-center">
      <div className="w-[85%] py-6 mx-auto md:py-[10px] md:px-[20px]">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col justify-center items-center md:block md:text-left">
            <div className="flex items-center gap-1">
              <img src="../../logo_footer.png" alt="" />
              <h1 className="text-lg flex flex-col mb-3 font-medium">
                <span className="text-xl font-bold">Sinergi</span> University
              </h1>
            </div>
            <p className="mb-3">
              Jl. Kemang, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
            </p>
            <div className="flex gap-2 mb-5">
              <img src="../../facebook.png" alt="" />
              <img src="../../twitter.png" alt="" />
              <img src="../../instagram.png" alt="" />
              <img src="../../youtube.png" alt="" />
            </div>
          </div>
          <div className="font-semibold text-[16px] my-4 grid grid-cols-1 md:grid-cols-2 md:mr-10 self-center gap-4">
            <div className="flex items-center gap-1">
              <p>Academic</p>
              <img src="../../arrow.png" alt="" />
            </div>
            <div className="flex items-center gap-1">
              <p>News</p>
              <img src="../../arrow.png" alt="" />
            </div>
            <div className="flex items-center gap-1">
              <p>Admission</p>
              <img src="../../arrow.png" alt="" />
            </div>
            <div className="flex items-center gap-1">
              <p>About Us</p>
              <img src="../../arrow.png" alt="" />
            </div>
          </div>
        </div>
        <hr className="border-b-2 border-[#E1E7EC]" />
        <p className="text-center md:text-left py-3 text-[#6E7A8A]">
          © 2023 Sinergi University. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
