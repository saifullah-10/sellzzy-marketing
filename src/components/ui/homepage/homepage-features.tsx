"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function HomepageFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const carouselData = [
    {
      badge: "Offer Products with Custom Bundles",
      titleMobile: "Increase Revenue with Smart Product Bundles",
      titleDesktop: "Boost Your Sales with Exclusive Bundles",
      descriptionShort: "Unlock your sales potential with Sellzzy's bundle feature.",
      descriptionLong:
        "Combine products into packages effortlessly. Customize bundles with automated or manual options. Boost customer satisfaction, increase revenue, and outshine the competition. Start bundling today to elevate your success.",
      buttonText: "Create Your Bundle Now",
      imageSrc: "./homepage/sellzzy_creator_one.svg",
    },
    {
      badge: "Boost Business With Your Own Subscription",
      titleMobile: "Create Subscription Plan For Your Products",
      titleDesktop: "Create Subscription Plan For Your Products",
      descriptionShort: "Cultivate Customer Loyalty and Long-Term Success.",
      descriptionLong:
        "Maximize revenue with flexible subscription plans. Engage customers with exclusive content and perks. Effortlessly manage and optimize subscriptions for ongoing success.",
      buttonText: "Create Your Subscription Now",
      imageSrc: "./homepage/sellzzy_creator_two.svg",
    },
    {
      badge: "Effortless Order Management",
      titleMobile: "Streamlined Order Management",
      titleDesktop: "Streamlined Order Management",
      descriptionShort: "Take control of your digital product orders",
      descriptionLong:
        "Gain insights into downloads and orders to track customer behavior. Easily manage order access for secure product distribution. Seamlessly process refunds, saving time while ensuring excellent customer service.",
      buttonText: "Ultimate Order Management",
      imageSrc: "./homepage/sellzzy_creator_three.svg",
    },
    {
      badge: "Capture All The Attention",
      titleMobile: "A Stunning Storefront With Sellzzy",
      titleDesktop: "A Stunning Storefront With Sellzzy",
      descriptionShort: "Capture Attention, Engage Customers, and Boost Sales.",
      descriptionLong:
        "Create an unforgettable online store. Showcase your digital products with beautiful layouts, customizable themes, and seamless navigation. Engage customers with compelling descriptions, stunning visuals, and persuasive call-to-action buttons.",
      buttonText: "Create Your Storefront",
      imageSrc: "./homepage/sellzzy_creator_four.svg",
    },
  ]

  const itemCount = carouselData.length

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1
        if (nextIndex >= itemCount) {
          // Reset to beginning after transition completes
          setTimeout(() => {
            setIsTransitioning(false)
            setCurrentIndex(0)
          }, 600)
          return nextIndex
        }
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [itemCount])

  const ArrowIcon = () => (
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.7578 6.75156C14.7578 6.99635 14.6667 7.20989 14.4844 7.39218L9.32812 12.5328C9.14583 12.7099 8.9401 12.7984 8.71094 12.7984C8.47135 12.7984 8.27083 12.7203 8.10938 12.5641C7.95312 12.4078 7.875 12.2125 7.875 11.9781C7.875 11.8583 7.89583 11.7463 7.9375 11.6422C7.98438 11.538 8.04688 11.4469 8.125 11.3687L9.875 9.60312L12.7891 6.94687L13.0625 7.44687L10.3516 7.60312H0.859375C0.598958 7.60312 0.388021 7.52499 0.226562 7.36874C0.0703125 7.20729 -0.0078125 7.00156 -0.0078125 6.75156C-0.0078125 6.49635 0.0703125 6.29062 0.226562 6.13437C0.388021 5.97291 0.598958 5.89218 0.859375 5.89218H10.3516L13.0625 6.05624L12.7891 6.56406L9.875 3.89999L8.125 2.12656C8.04688 2.04843 7.98438 1.95989 7.9375 1.86093C7.89583 1.75676 7.875 1.64218 7.875 1.51718C7.875 1.28281 7.95312 1.08749 8.10938 0.931244C8.27083 0.774994 8.47135 0.696869 8.71094 0.696869C8.82552 0.696869 8.9349 0.720306 9.03906 0.767181C9.14323 0.814056 9.24219 0.884369 9.33594 0.978119L14.4844 6.11093C14.6667 6.29322 14.7578 6.50676 14.7578 6.75156Z"
        fill="#EFFAFF"
      />
    </svg>
  )

  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-20 md:space-y-6 space-y-4 lg:px-0 md:px-0 px-[5%] lg:mt-28 md:mt-16 mt-10">
      <div className="lg:space-y-6 space-y-4">
        <h3 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
          Sellzzy is created for creators like you
        </h3>
        <p className="text-[#464F5E] md:text-lg text-sm text-center lg:block hidden">
          The Game-Changing Solution for Selling and Scaling Your Digital Business
        </p>
      </div>

      <div className="w-full overflow-hidden relative h-auto">
        <div
          ref={trackRef}
          className="flex transition-transform duration-600 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.6s ease" : "none",
          }}
        >
          {/* Original slides */}
          {carouselData.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex items-center lg:flex-row flex-col gap-10">
                <div className="lg:w-[50%] w-full">
                  <div className="md:my-10 my-6 space-y-2">
                    <div className="flex items-center lg:justify-start justify-center">
                      <p className="bg-[#EFFAFF] text-[#0071AB] md:text-lg text-sm rounded-[24px] pr-[8px] md:pr-[12px] md:pl-[12px] pl-[8px] pb-[4px] md:pb-[8px] pt-[4px] md:pt-[8px] border border-[#B6E9FF] inline">
                        {item.badge}
                      </p>
                    </div>
                    <h4 className="md:text-[32px] text-lg font-semibold text-[#31363F] lg:w-[600px] lg:leading-[40px] leading-[20px] w-full text-center lg:hidden">
                      {item.titleMobile}
                    </h4>
                    <h4 className="md:text-[32px] text-lg font-semibold text-[#31363F] lg:w-[600px] lg:leading-[40px] leading-[20px] w-full lg:block hidden">
                      {item.titleDesktop}
                    </h4>
                  </div>

                  <div className="lg:space-y-4 space-y-2 text-lg">
                    <p className="text-center lg:hidden">{item.descriptionShort}</p>
                    <p className="lg:block hidden">{item.descriptionShort}</p>
                    <p className="text-center lg:hidden">{item.descriptionLong}</p>
                    <p className="lg:block hidden">{item.descriptionLong}</p>
                  </div>

                  <div className="flex lg:justify-start justify-center mt-4">
                    <button className="pt-[12px] pb-[12px] pr-[16px] pl-[16px] md:w-auto w-full bg-[#00B0F4] rounded-xl text-white flex items-center justify-center gap-2 focus:outline-none transition-shadow hover:shadow-[0_0_0_2px_rgba(44,201,255,0.4)] transition-transform duration-500 hover:scale-[1.01]">
                      {item.buttonText}
                      <ArrowIcon />
                    </button>
                  </div>
                </div>

                <div className="lg:w-[50%] w-full relative">
                  <Image
                    src={item.imageSrc || "/placeholder.svg"}
                    alt="creator feature illustration"
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate slides for infinite loop */}
          {carouselData.map((item, index) => (
            <div key={`duplicate-${index}`} className="w-full flex-shrink-0">
              <div className="flex items-center lg:flex-row flex-col gap-10">
                <div className="lg:w-[50%] w-full">
                  <div className="md:my-10 my-6 space-y-2">
                    <div className="flex items-center lg:justify-start justify-center">
                      <p className="bg-[#EFFAFF] text-[#0071AB] md:text-lg text-sm rounded-[24px] pr-[8px] md:pr-[12px] md:pl-[12px] pl-[8px] pb-[4px] md:pb-[8px] pt-[4px] md:pt-[8px] border border-[#B6E9FF] inline">
                        {item.badge}
                      </p>
                    </div>
                    <h4 className="md:text-[32px] text-lg font-semibold text-[#31363F] lg:w-[600px] lg:leading-[40px] leading-[20px] w-full text-center lg:hidden">
                      {item.titleMobile}
                    </h4>
                    <h4 className="md:text-[32px] text-lg font-semibold text-[#31363F] lg:w-[600px] lg:leading-[40px] leading-[20px] w-full lg:block hidden">
                      {item.titleDesktop}
                    </h4>
                  </div>

                  <div className="lg:space-y-4 space-y-2 text-lg">
                    <p className="text-center lg:hidden">{item.descriptionShort}</p>
                    <p className="lg:block hidden">{item.descriptionShort}</p>
                    <p className="text-center lg:hidden">{item.descriptionLong}</p>
                    <p className="lg:block hidden">{item.descriptionLong}</p>
                  </div>

                  <div className="flex lg:justify-start justify-center mt-4">
                    <button className="pt-[12px] pb-[12px] pr-[16px] pl-[16px] md:w-auto w-full bg-[#00B0F4] rounded-xl text-white flex items-center justify-center gap-2 focus:outline-none transition-shadow hover:shadow-[0_0_0_2px_rgba(44,201,255,0.4)] transition-transform duration-500 hover:scale-[1.01]">
                      {item.buttonText}
                      <ArrowIcon />
                    </button>
                  </div>
                </div>

                <div className="lg:w-[50%] w-full relative">
                  <Image
                    src={item.imageSrc || "/placeholder.svg"}
                    alt="creator feature illustration"
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
