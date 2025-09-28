"use client"

const ProductShowcase: React.FC = ()=> {
  const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 0L13.0352 10.9648L24 12L13.0352 13.0352L12 24L10.9648 13.0352L0 12L10.9648 10.9648L12 0Z"
        fill="#75DAFF"
      />
    </svg>
  )

  const MarqueeContent1 = () => (
    <>
      <span className="mr-4 inline-block">
        <StarIcon />
      </span>
      Photos
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Courses
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      3D Model
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Serial Keys & Tickets
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Sound Effect
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Documentaries
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Software
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Music
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Serial Keys & Tickets
    </>
  )

  const MarqueeContent2 = () => (
    <>
      <span className="mr-4 inline-block">
        <StarIcon />
      </span>
      E-Books
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Music
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Audio
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Video
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Photos
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Courses
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      3D Model
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Serial Keys & Tickets
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Sound Effect
    </>
  )

  const MarqueeContent3 = () => (
    <>
      <span className="mr-4 inline-block">
        <StarIcon />
      </span>
      Photos
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Courses
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Documentaries
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Applications
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Fonts
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Graphics Template
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Courses
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Photos
      <span className="mx-4 inline-block">
        <StarIcon />
      </span>
      Serial Keys & Tickets
    </>
  )

  return (
    <>
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        .marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        
        .marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>

      <section className="lg:space-y-10 md:space-y-6 space-y-4 lg:px-0 md:px-0 mb-6 md:mb-10 px-[5%] lg:mt-28 md:mt-16 mt-10">
        <div>
          <h3 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center flex items-center justify-center gap-3">
            Products to sell with Sellzzy
          </h3>
        </div>

        <div className="flex flex-col space-y-6">
          {/* Line 1 - Left scroll */}
          <div className="overflow-hidden">
            <div className="marquee-left flex whitespace-nowrap">
              <h1 className="text-[#6A788D] flex items-center text-[24px] italic lg:text-[28px] mr-4">
                <MarqueeContent1 />
              </h1>
              <h1 className="text-[#6A788D] flex items-center text-[24px] italic lg:text-[28px] mr-4">
                <MarqueeContent1 />
              </h1>
            </div>
          </div>

          {/* Line 2 - Right scroll (reverse direction) */}
          <div className="overflow-hidden">
            <div className="marquee-right flex whitespace-nowrap">
              <h1 className="text-[#6A788D] flex items-center text-[24px] italic lg:text-[28px] mr-4">
                <MarqueeContent2 />
              </h1>
              <h1 className="text-[#6A788D] flex items-center text-[24px] italic lg:text-[28px] mr-4">
                <MarqueeContent2 />
              </h1>
            </div>
          </div>

          {/* Line 3 - Left scroll */}
          <div className="overflow-hidden">
            <div className="marquee-left flex whitespace-nowrap">
              <h1 className="text-[#6A788D] flex items-center text-[24px] italic lg:text-[28px] mr-4">
                <MarqueeContent3 />
              </h1>
              <h1 className="text-[#6A788D] flex items-center text-[24px] italic lg:text-[28px] mr-4">
                <MarqueeContent3 />
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default ProductShowcase;