"use client"

import { useState } from "react"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "step1",
    question: "What is Sellzzy ?",
    answer:
      "Sellzzy is a complete digital commerce platform that helps creators, entrepreneurs, and businesses sell digital products online. Whether you're selling courses, ebooks, software, graphics, or services, Sellzzy provides all the tools you need to build, market, and scale your digital business.",
  },
  {
    id: "step2",
    question: "Is Sellzzy free to use ?",
    answer:
      "Yes! Sellzzy offers a free plan that lets you list up to 10 products and start selling immediately. As you grow, you can upgrade to our paid plans for more features like unlimited products, advanced analytics, and custom branding.",
  },
  {
    id: "step3",
    question: "Can Sellzzy be used as an independent platform ?",
    answer:
      "Sellzzy works as a complete standalone solution. You get your own branded storefront, payment processing, customer management, and delivery system. You can also integrate it with your existing website or use it alongside other platforms.",
  },
  {
    id: "step4",
    question: "Does Sellzzy charge transaction fees ?",
    answer:
      "Our free plan includes a small transaction fee. Paid plans have reduced or no transaction fees, so you keep more of what you earn. All plans include secure payment processing and instant payouts.",
  },
  {
    id: "step5",
    question: "Is there any limits to upload digital products ?",
    answer:
      "File size limits depend on your plan. Free accounts can upload files up to 100MB per product. Paid plans support larger files up to 2GB per product, perfect for high-quality videos, software, and comprehensive course materials.",
  },
  {
    id: "step6",
    question: "Do I need a shopify or other e-commerce store to use sellzzy ?",
    answer:
      "Not at all! Sellzzy is a complete solution that works independently. However, if you already have a Shopify store or website, you can easily integrate Sellzzy to add digital product capabilities to your existing setup.",
  },
]

export default function FAQSection() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  const PlusIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 21.1348C9.60677 21.1348 8.29492 20.8678 7.06445 20.334C5.83398 19.8066 4.75 19.0742 3.8125 18.1367C2.875 17.1992 2.13932 16.1185 1.60547 14.8945C1.07812 13.6641 0.814453 12.349 0.814453 10.9492C0.814453 9.55599 1.07812 8.2474 1.60547 7.02344C2.13932 5.79297 2.87174 4.70898 3.80273 3.77148C4.74023 2.83398 5.82422 2.10156 7.05469 1.57422C8.28516 1.04036 9.59701 0.773438 10.9902 0.773438C12.3835 0.773438 13.6953 1.04036 14.9258 1.57422C16.1628 2.10156 17.2467 2.83398 18.1777 3.77148C19.1152 4.70898 19.8509 5.79297 20.3848 7.02344C20.9186 8.2474 21.1855 9.55599 21.1855 10.9492C21.1855 12.349 20.9186 13.6641 20.3848 14.8945C19.8509 16.1185 19.1152 17.1992 18.1777 18.1367C17.2467 19.0742 16.166 19.8066 14.9355 20.334C13.7051 20.8678 12.3932 21.1348 11 21.1348ZM11 18.8984C12.1003 18.8984 13.1289 18.6934 14.0859 18.2832C15.0495 17.873 15.8958 17.3066 16.625 16.584C17.3542 15.8548 17.9238 15.0117 18.334 14.0547C18.7441 13.0911 18.9492 12.056 18.9492 10.9492C18.9492 9.84896 18.7409 8.82031 18.3242 7.86328C17.9141 6.89974 17.3444 6.05339 16.6152 5.32422C15.8926 4.59505 15.0495 4.02539 14.0859 3.61523C13.1289 3.20508 12.097 3 10.9902 3C9.88997 3 8.85807 3.20508 7.89453 3.61523C6.9375 4.02539 6.0944 4.59505 5.36523 5.32422C4.64258 6.05339 4.07617 6.89974 3.66602 7.86328C3.26237 8.82031 3.06055 9.84896 3.06055 10.9492C3.06055 12.056 3.26237 13.0911 3.66602 14.0547C4.07617 15.0117 4.64583 15.8548 5.375 16.584C6.10417 17.3066 6.94727 17.873 7.9043 18.2832C8.86784 18.6934 9.89974 18.8984 11 18.8984ZM6.48828 10.9492C6.48828 10.6562 6.57943 10.4186 6.76172 10.2363C6.94401 10.0475 7.18164 9.95312 7.47461 9.95312H10.0039V7.42383C10.0039 7.13737 10.0951 6.90299 10.2773 6.7207C10.4661 6.5319 10.7005 6.4375 10.9805 6.4375C11.2734 6.4375 11.5111 6.52865 11.6934 6.71094C11.8822 6.89323 11.9766 7.13086 11.9766 7.42383V9.95312H14.5156C14.8021 9.95312 15.0365 10.0475 15.2188 10.2363C15.401 10.4186 15.4922 10.6562 15.4922 10.9492C15.4922 11.2292 15.401 11.4635 15.2188 11.6523C15.0365 11.8346 14.8021 11.9258 14.5156 11.9258H11.9766V14.4648C11.9766 14.7513 11.8822 14.9857 11.6934 15.168C11.5111 15.3503 11.2734 15.4414 10.9805 15.4414C10.7005 15.4414 10.4661 15.3503 10.2773 15.168C10.0951 14.9857 10.0039 14.7513 10.0039 14.4648V11.9258H7.47461C7.18164 11.9258 6.94401 11.8346 6.76172 11.6523C6.57943 11.4635 6.48828 11.2292 6.48828 10.9492Z"
        fill="#3C4350"
      />
    </svg>
  )

  const MinusIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 21.1348C9.60677 21.1348 8.29492 20.8678 7.06445 20.334C5.83398 19.8066 4.75 19.0742 3.8125 18.1367C2.875 17.1992 2.13932 16.1185 1.60547 14.8945C1.07812 13.6641 0.814453 12.349 0.814453 10.9492C0.814453 9.55599 1.07812 8.2474 1.60547 7.02344C2.13932 5.79297 2.87174 4.70898 3.80273 3.77148C4.74023 2.83398 5.82422 2.10156 7.05469 1.57422C8.28516 1.04036 9.59701 0.773438 10.9902 0.773438C12.3835 0.773438 13.6953 1.04036 14.9258 1.57422C16.1628 2.10156 17.2467 2.83398 18.1777 3.77148C19.1152 4.70898 19.8509 5.79297 20.3848 7.02344C20.9186 8.2474 21.1855 9.55599 21.1855 10.9492C21.1855 12.349 20.9186 13.6641 20.3848 14.8945C19.8509 16.1185 19.1152 17.1992 18.1777 18.1367C17.2467 19.0742 16.166 19.8066 14.9355 20.334C13.7051 20.8678 12.3932 21.1348 11 21.1348ZM11 18.8984C12.1003 18.8984 13.1289 18.6934 14.0859 18.2832C15.0495 17.873 15.8958 17.3066 16.625 16.584C17.3542 15.8548 17.9238 15.0117 18.334 14.0547C18.7441 13.0911 18.9492 12.056 18.9492 10.9492C18.9492 9.84896 18.7409 8.82031 18.3242 7.86328C17.9141 6.89974 17.3444 6.05339 16.6152 5.32422C15.8926 4.59505 15.0495 4.02539 14.0859 3.61523C13.1289 3.20508 12.097 3 10.9902 3C9.88997 3 8.85807 3.20508 7.89453 3.61523C6.9375 4.02539 6.0944 4.59505 5.36523 5.32422C4.64258 6.05339 4.07617 6.89974 3.66602 7.86328C3.26237 8.82031 3.06055 9.84896 3.06055 10.9492C3.06055 12.056 3.26237 13.0911 3.66602 14.0547C4.07617 15.0117 4.64583 15.8548 5.375 16.584C6.10417 17.3066 6.94727 17.873 7.9043 18.2832C8.86784 18.6934 9.89974 18.8984 11 18.8984ZM7.38672 11.9453C7.08073 11.9453 6.82682 11.8574 6.625 11.6816C6.42969 11.5059 6.33203 11.2682 6.33203 10.9688C6.33203 10.6693 6.42969 10.4284 6.625 10.2461C6.82031 10.0638 7.07422 9.97266 7.38672 9.97266H14.6133C14.9258 9.97266 15.1797 10.0638 15.375 10.2461C15.5703 10.4284 15.668 10.6693 15.668 10.9688C15.668 11.2682 15.5671 11.5059 15.3652 11.6816C15.1699 11.8574 14.9193 11.9453 14.6133 11.9453H7.38672Z"
        fill="#464F5E"
      />
    </svg>
  )

  return (
    <>
      <style jsx>{`
        .dropdown-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .dropdown-content.active {
          max-height: 500px;
          transition: max-height 0.3s ease-in;
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .chevron.rotate {
          transform: rotate(180deg);
        }
      `}</style>

      <section className="md:space-y-16 space-y-8 lg:px-0 md:px-0 px-[5%] md:mb-28 mb-10 md:mt-8 mt-4">
        <div className="space-y-4 text-center">
          <h3 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
            Frequently Asked Questions
          </h3>
          <p className="text-[#464F5E] md:text-lg text-sm">Got Questions about Sellzzy? We've Got Answers</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <button
                className="w-full md:px-6 px-4 md:py-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl focus:outline-none"
                onClick={() => toggleDropdown(faq.id)}
              >
                <span className="text-[#3C4350] md:text-xl text-base md:font-semibold font-medium">{faq.question}</span>
                <div className="chevron">{activeDropdown === faq.id ? <MinusIcon /> : <PlusIcon />}</div>
              </button>
              <div className={`dropdown-content ${activeDropdown === faq.id ? "active" : ""}`}>
                <div className="px-6 pb-6">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
