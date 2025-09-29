"use client"

import Image from "next/image"
import { useEffect, useRef} from "react"

interface Testimonial {
  id: number
  name: string
  country: string
  storeName: string
  image: string
  description: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Morgan",
    country: "USA",
    storeName: "Morgan Designs",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    description:
      "Sellzzy opened my business to a global audience. I started as a small local designer, but now I sell worldwide.",
    date: "March 15, 2023",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    country: "India",
    storeName: "Rajesh Templates",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    description:
      "I've tried Shopify, WordPress, and even marketplaces like Etsy, but nothing worked smoothly for selling digital products.",
    date: "July 9, 2023",
  },
  {
    id: 3,
    name: "Sofia Lopez",
    country: "Spain",
    storeName: "Sofia Creations",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    description:
      "Marketplaces always limited my freedom. With Sellzzy, I finally own my store, my customers, and my brand.",
    date: "October 21, 2023",
  },
  {
    id: 4,
    name: "Liam O'Connor",
    country: "Ireland",
    storeName: "Liam Studio",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    description:
      "Before Sellzzy, I was juggling multiple tools just to sell my courses and templates — now I manage everything in one place.",
    date: "January 5, 2024",
  },
  {
    id: 5,
    name: "Chloe Nguyen",
    country: "Vietnam",
    storeName: "Chloe Artworks",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    description: "Sellzzy simplified my workflow and gave me full control over my digital product sales.",
    date: "June 2, 2024",
  },
  {
    id: 6,
    name: "Ethan Zhang",
    country: "China",
    storeName: "Ethan Digital",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    description: "Now my business runs smoothly without technical headaches. Sellzzy is a game-changer.",
    date: "August 14, 2024",
  },
  {
    id: 7,
    name: "Mia Brown",
    country: "Canada",
    storeName: "Mia Studio",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    description: "I love that I can focus on creating instead of fixing tech problems. Sellzzy made it possible.",
    date: "December 30, 2023",
  },
  {
    id: 8,
    name: "Noah Smith",
    country: "Australia",
    storeName: "Noah Prints",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    description: "The setup was quick, payments go straight to me, and I finally feel in control of my store.",
    date: "February 18, 2024",
  },
  {
    id: 9,
    name: "Isabella Rossi",
    country: "Italy",
    storeName: "Isabella Templates",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    description: "Sellzzy helped me reach global customers effortlessly. My sales have grown month over month.",
    date: "April 7, 2025",
  },
  {
    id: 10,
    name: "Oliver Martin",
    country: "UK",
    storeName: "Oliver Digital",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    description: "Everything I needed to run my business is now in one simple dashboard.",
    date: "September 12, 2023",
  },
  {
    id: 11,
    name: "Emma Davis",
    country: "USA",
    storeName: "Emma Creative",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    description: "Sellzzy gave me independence and freedom over my digital store.",
    date: "November 20, 2023",
  },
  {
    id: 12,
    name: "Lucas Hernandez",
    country: "Mexico",
    storeName: "Lucas Designs",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    description: "All my sales processes are now streamlined, saving me hours every week.",
    date: "May 3, 2024",
  },
  {
    id: 13,
    name: "Amelia Wilson",
    country: "New Zealand",
    storeName: "Amelia Studio",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    description: "Sellzzy finally allowed me to focus on what I do best: creating.",
    date: "July 19, 2024",
  },
  {
    id: 14,
    name: "Benjamin Lee",
    country: "South Korea",
    storeName: "Benjamin Arts",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    description: "Before Sellzzy, selling digital products was complicated and expensive. Now it's effortless.",
    date: "October 10, 2024",
  },
  {
    id: 15,
    name: "Grace Patel",
    country: "India",
    storeName: "Grace Templates",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    description: "I finally feel in control of my brand and my store thanks to Sellzzy.",
    date: "March 28, 2025",
  },
  {
    id: 16,
    name: "William Thompson",
    country: "Canada",
    storeName: "William Prints",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    description: "Sellzzy combined everything into one dashboard and made my workflow smooth.",
    date: "June 15, 2023",
  },
  {
    id: 17,
    name: "Sophia Garcia",
    country: "Argentina",
    storeName: "Sophia Digital",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    description: "Now I can sell worldwide without worrying about hidden fees or tech issues.",
    date: "January 2, 2025",
  },
  {
    id: 18,
    name: "James Wilson",
    country: "USA",
    storeName: "James Studio",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    description: "Sellzzy is a single platform that simplified my business and helped me grow.",
    date: "August 5, 2024",
  },
  {
    id: 19,
    name: "Lily Brown",
    country: "UK",
    storeName: "Lily Arts",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    description: "Finally, a platform that allows me to focus on creating rather than managing multiple tools.",
    date: "December 1, 2024",
  },
  {
    id: 20,
    name: "Henry Johnson",
    country: "Germany",
    storeName: "Henry Templates",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    description: "Sellzzy is easy to set up, secure, and perfect for digital products.",
    date: "February 23, 2024",
  },
  {
    id: 21,
    name: "Ava Martinez",
    country: "Chile",
    storeName: "Ava Studio",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    description: "I save time and costs every month using Sellzzy for all my digital products.",
    date: "September 14, 2023",
  },
  {
    id: 22,
    name: "Daniel Kim",
    country: "South Korea",
    storeName: "Daniel Digital",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    description: "Sellzzy allowed me to own my store, customers, and brand completely.",
    date: "April 18, 2024",
  },
  {
    id: 23,
    name: "Charlotte Wilson",
    country: "Australia",
    storeName: "Charlotte Designs",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    description: "I no longer juggle multiple tools for selling courses and templates.",
    date: "July 7, 2023",
  },
  {
    id: 24,
    name: "Alexander Smith",
    country: "USA",
    storeName: "Alexander Arts",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    description: "Everything is centralized now, making my digital store effortless to manage.",
    date: "November 11, 2024",
  },
  {
    id: 25,
    name: "Ella Johnson",
    country: "Canada",
    storeName: "Ella Studio",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    description: "Sellzzy gives me independence I never had on other platforms.",
    date: "May 25, 2025",
  },
  {
    id: 26,
    name: "Matthew Lee",
    country: "Singapore",
    storeName: "Matthew Digital",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    description: "Now my sales have grown consistently month over month thanks to Sellzzy.",
    date: "March 30, 2024",
  },
  {
    id: 27,
    name: "Zoe Clark",
    country: "France",
    storeName: "Zoe Creations",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    description: "Sellzzy finally allowed me to focus on creating instead of troubleshooting.",
    date: "October 22, 2023",
  },
  {
    id: 28,
    name: "Michael Brown",
    country: "Ireland",
    storeName: "Michael Prints",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    description: "Everything is in one place now, from checkout to delivery.",
    date: "January 12, 2025",
  },
  {
    id: 29,
    name: "Hannah Wilson",
    country: "Norway",
    storeName: "Hannah Studio",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    description: "Sellzzy helped me take my local business to a global audience quickly.",
    date: "August 1, 2024",
  },
  {
    id: 30,
    name: "David Martinez",
    country: "Mexico",
    storeName: "David Digital",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    description: "Sellzzy simplified my business and eliminated hidden fees.",
    date: "June 9, 2023",
  },
  {
    id: 31,
    name: "Luna Smith",
    country: "Italy",
    storeName: "Luna Templates",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    description: "I finally feel in control of my store and my brand.",
    date: "February 27, 2025",
  },
  {
    id: 32,
    name: "Jack Taylor",
    country: "UK",
    storeName: "Jack Studio",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "All my sales processes are now smooth and consistent thanks to Sellzzy.",
    date: "April 5, 2023",
  },
  {
    id: 33,
    name: "Emily Davis",
    country: "USA",
    storeName: "Emily Arts",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    description: "Sellzzy combined multiple tools into one simple dashboard.",
    date: "September 3, 2024",
  },
  {
    id: 34,
    name: "Ryan Thompson",
    country: "Canada",
    storeName: "Ryan Digital",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    description: "I save so much time and money managing my store on Sellzzy.",
    date: "July 28, 2024",
  },
  {
    id: 35,
    name: "Maya Patel",
    country: "India",
    storeName: "Maya Creations",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    description: "Sellzzy finally gave me full ownership of my digital business.",
    date: "December 18, 2023",
  },
  {
    id: 36,
    name: "Evan Johnson",
    country: "Australia",
    storeName: "Evan Studio",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    description: "Managing digital products has never been easier thanks to Sellzzy.",
    date: "May 10, 2025",
  },
  {
    id: 37,
    name: "Avery Brown",
    country: "New Zealand",
    storeName: "Avery Designs",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    description: "Sellzzy is simple, fast, and gives me control over my digital products.",
    date: "January 21, 2024",
  },
  {
    id: 38,
    name: "Sebastian Garcia",
    country: "Spain",
    storeName: "Sebastian Studio",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    description: "I no longer need multiple tools; Sellzzy handles everything for me.",
    date: "June 6, 2024",
  },
  {
    id: 39,
    name: "Victoria Wilson",
    country: "Germany",
    storeName: "Victoria Arts",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    description: "Sellzzy helped me grow my digital store globally and consistently.",
    date: "March 14, 2025",
  },
  {
    id: 40,
    name: "Nathan Lee",
    country: "South Korea",
    storeName: "Nathan Templates",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    description: "With Sellzzy, I finally feel independent and in full control of my store.",
    date: "August 8, 2025",
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
    <div className="flex relative items-center gap-4 mb-6">
    <Image
      src={testimonial.image}
      alt={testimonial.name}
      width={40}
      height={40}
      className="rounded-full"
    />

      <div>
        <h2 className="text-xl font-semibold text-gray-900">{testimonial.name}</h2>
        <p className="text-gray-600">
          {testimonial.storeName}, {testimonial.country}
        </p>
      </div>
    </div>
    <div className="mb-6">
      <p className="text-gray-700 leading-relaxed">{testimonial.description}</p>
    </div>
    <div className="text-gray-500 text-sm">{testimonial.date}</div>
  </div>
)

const InfiniteScrollColumn = ({
  testimonials,
  direction,
  speed,
}: {
  testimonials: Testimonial[]
  direction: "up" | "down"
  speed: number
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const yRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    let animationId: number

    const step = () => {
      yRef.current += direction === "up" ? -speed : speed
      inner.style.transform = `translateY(${yRef.current}px)`

      const first = inner.firstElementChild as HTMLElement
      const last = inner.lastElementChild as HTMLElement
      if (!first || !last) {
        animationId = requestAnimationFrame(step)
        return
      }

      const containerRect = container.getBoundingClientRect()
      const firstRect = first.getBoundingClientRect()
      const lastRect = last.getBoundingClientRect()

      const gap = 16 // 1rem gap

      if (direction === "up" && firstRect.bottom < containerRect.top) {
        const moveHeight = first.offsetHeight + gap
        inner.appendChild(first)
        yRef.current += moveHeight
        inner.style.transform = `translateY(${yRef.current}px)`
      }

      if (direction === "down" && lastRect.top > containerRect.bottom) {
        const moveHeight = last.offsetHeight + gap
        inner.insertBefore(last, first)
        yRef.current -= moveHeight
        inner.style.transform = `translateY(${yRef.current}px)`
      }

      animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [direction, speed])

  return (
    <div ref={containerRef} className="scroll-column overflow-hidden h-screen">
      <div ref={innerRef} className="inner flex flex-col gap-4 will-change-transform">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-shrink-0">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  )
}

const MobileCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCarousel = () => {
      const track = trackRef.current
      if (!track) return

      const cards = track.children
      if (!cards.length) return

      const cardWidth = (cards[0] as HTMLElement).offsetWidth + 16 // width + margin

      track.style.transform = `translateX(-${cardWidth}px)`

      setTimeout(() => {
        track.appendChild(track.firstElementChild!)
        track.style.transition = "none"
        track.style.transform = "translateX(0)"

        requestAnimationFrame(() => {
          track.style.transition = "transform 0.6s ease-in-out"
        })
      }, 600)
    }

    const interval = setInterval(moveCarousel, 2600) // 2s pause + 0.6s transition
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="home-carousel-container w-full md:hidden overflow-hidden h-auto relative">
      <div ref={trackRef} className="home-carousel-track flex transition-transform duration-[600ms] ease-in-out">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-none w-full mr-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.16748" width="38" height="38" rx="19" fill="url(#pattern0_4203_25321)" />
                  <defs>
                    <pattern id="pattern0_4203_25321" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_4203_25321" transform="scale(0.005)" />
                    </pattern>
                    <image
                      id="image0_4203_25321"
                      width="200"
                      height="200"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAIABJREFUeF5UvXmMJft1HvbVXrfuvva+zT7zdpLvPZIiJZKiZFkRZSraIsFW5EBIIMuGYRhSLMQIshiBkzj5I4aVBFCEQIClRIHlSBZFiYveI/n2N/Nm6+npfbv7UvdW1a0l/s6ve6hcoNEz3bfrVv3qd875zne+c0r7R7/6s1mcJCgWiygUCphOpzg/P0e/38NsNkUa6eDLy3lwcw6yLEOWJdA0DWmaoFwoYjgcYj6fw3EcOU4+X0CaphiNhijU6hiPx4jDCPl8Dul8junMh+s4sAwDtpuHrpuI54Bn57C4tARTB05O9tFun6E77qPRaGBxaRn5fF4+P0kSGIYB0zAQaTyfTI4fBAGyOIWm6XJ+RgbkCnkUinmYpolhr4eDg11MxxM0mnWsra2j1VzGaDTA3sE29vefotPuIApTVMpNLC6uwPU0WJaFWrkC180hmIWYTXyEYYBZEMApOsgXClhZXkGt1kAUxbKGGgw5xwQa/ImP4aiHeTSH7ZjIkMqa8pzCWSznDz2DrgOmpsFxLNTrDTlHTXfl99PJBGdnJxgPBtC0DDneD9vGaDyTteb6j8YjjIZD2I6DaqUq96NUK8LzCvByJWiagSTh+s0RhjOEYQgPqRw/iiI5hq7r8v/hYIBOt43JdAxdN5AvVbC8vIzFlTWUq3XkcjlZl9C01d+HIbKL+6Kl6nj8uWbk4Lq2XFsQTjGdThDHEXRTk/Wx51PZJ6ftDtrnHQzHE6SJjpznwXY82PMQjuPKeiVJDMd1UalUZS/wHqvjcQ1T2LYD27bluHzx95qdl+scDntyTlxb/px/o+kZGvU11BoN2Tv37n+EN975Dvxghhs3bqLaaED7x7/+72eT8UQOWiyV5CTGozFmgVp4S7NhmjpK5bKc6GQyhD+ZwHYsWSTXdjD1fflAnlyhWESpWJQTHE8miDUTs9kESTSXBU2iUG4EN61rWphlU0TTOdIUqJQbaNWbsB1d3hfNp+iOZnKjc64LwzTlnGiYsviaBtgu4niOwJ9i6k+RJTEMwxQDtA0TCTL5XBq3ngG+P0I0C8QZ1Bs12ThpFmM87qPdacvNylIDjpWHbbtwXE82DTekY1ly7kjUppJrLqgNzBuWy+XlJoTBXK6ffxfM1bqoTRnKdxo4z91xLfks/nw+D5ShaBkc20GpXEKxVIRpFuT6MyRimNwQdFm8XzSUyTiQz+EXj+P7E5imJedHA9T0BJblwDIdnpGsH8+b1zGfh8B0qn42j+Xnl6/p1MdkMkaqpSiXK2guLqJeb8LxPG495Sg1DfrF5uV1x1Ek15XFiRxTzst05fq5h+KERhiKg+XvNB1IxWh8jIYTDCcTzKMEMHQ4Tg62lUPBNdV1iENO5d+8Nu5F/mww6IsDnvBv55Ecl9fPz+R9H01mcl38/XSm9rlpGrI/cl4OreYGWouLck8OT47xdH8P4+kE5VoNnudB+/t/7+ezfr8vH+7mXHljMJvJJnNcB3nLhOfl0Ww25SLPzs/Q7bblj6vVmqynRJqUFmyjUCiiWCron89nmM1jddL0qYYmmzNO5ygWCjA1HZExxtSnZedQLdbl7ywjg2WbSNIQg9GFJ2BEkItTHuDSQCzXRcybHQYIowBaksrC5AseXMvGZKpuChc2x42WJUi5aR1elwfHzl1ExgSjUV88iWXlZOMGsxhBPJHzvPRMlqEiigFNNlmYJbJhl553Ng3FSPgebmzDdsQY+ZpMRhJd+He8FjqYQs6TjR0l8TPPNotmcn2mZaFQXpC/z9mOGDI3H72xbNAkkXMTRwGo..."
                    />
                  </defs>
                </svg>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{testimonial.name}</h2>
                  <p className="text-gray-600">{testimonial.storeName}</p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{testimonial.description}</p>
              </div>
              <div className="text-gray-500 text-sm">{testimonial.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomepageFeedback() {
  // Distribute testimonials across 3 columns
  const leftColumn = testimonials.filter((_, i) => i % 3 === 0)
  const middleColumn = testimonials.filter((_, i) => i % 3 === 1)
  const rightColumn = testimonials.filter((_, i) => i % 3 === 2)

  return (
    <section className="md:max-w-[1280px] mx-auto relative">
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <div className="lg:space-y-6 md:space-y-4 space-y-2 text-center">
          <h3 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350]">
            <span className="text-[#00B0F4]">Loved</span> by creators like you
          </h3>
          <p className="text-[#464F5E] md:text-[18px] px-4 md:px-0 text-sm text-center">
            The Game-Changing Solution for Selling and Scaling Your Digital Business
          </p>
        </div>

        {/* Desktop version with infinite scrolling columns */}
        <div className="w-full relative hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-visible lg:overflow-x-hidden">
            <InfiniteScrollColumn testimonials={leftColumn} direction="down" speed={0.6} />
            <InfiniteScrollColumn testimonials={middleColumn} direction="up" speed={0.7} />
            <InfiniteScrollColumn testimonials={rightColumn} direction="down" speed={0.6} />
          </div>
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-white from-10% via-transparent via-50% to-transparent" />
        </div>
      </div>

      {/* Mobile carousel */}
      <MobileCarousel testimonials={testimonials} />
    </section>
  )
}
