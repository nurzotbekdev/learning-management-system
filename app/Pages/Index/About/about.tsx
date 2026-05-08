function About() {
  return (
    <>
      <div className="about flex lg:flex-row flex-col justify-between items-center gap-10 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%] relative">
        <div className="about-content flex flex-col lg:w-1/2 w-full">
          <span className="text-[#076dcb] font-semibold Sora pb-1">
            <i className="bi bi-book pe-2"></i>
            About StudIQ
          </span>
          <h2 className="text-[#222e48] text-3xl md:text-5xl md:leading-13 Sora font-semibold">
            The Place Where You Can Achieve
          </h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-shadow-md">
            Welcome to StudIQ, where learning knows no bounds. Whether you're a
            student, professional or lifelong learner.
          </p>

          <ul className="flex flex-col gap-6 pb-10">
            <li className="flex pga-3 sm:flex-nowrap flex-wrap">
              <div className="bg-[#f3f9ff] rounded-[50%] min-w-17.5 min-h-15 flex justify-center"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
