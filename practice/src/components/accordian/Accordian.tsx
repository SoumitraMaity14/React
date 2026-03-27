import { useState } from "react";

const FAQData = [
  {
    id: 1,
    question: "1. What does Johat Enterprises do?",
    answer: "We connect property investors with trusted private money lenders. Our services include consultation, paperwork assistance, and lender matching to help investors secure funding for property purchases, renovations, and flips."
  },
  {
    id: 2,
    question: "2. Who can apply for funding through Johat Enterprises?",
    answer: "Any property investor, from beginners to seasoned professionals, looking for private capital for real estate projects can apply."
  },
  {
    id: 3,
    question: "3. What are private money lenders?",
    answer: "Private money lenders are non-institutional individuals or companies that provide short-term loans secured by real estate."
  },
  {
    id: 4,
    question: "4. How long does it take to get funding?",
    answer: "The timeline varies depending on the project, but many of our clients secure funding much faster than traditional bank loans, often within 7-14 days."
  }
];

export const Accordian = () => {
  const [openId, setOpenId] = useState<null | Number>(1)

  const handaleFaqToggle = (id: any) => {
    setOpenId(openId === id ? null : id)
  }
  return (
    <div>
      {FAQData.map((item) => (
        <div key={item.id}
        className={`border border-gray-300 rouded-xl overflow-hidden transition-all duration-300 bg-white
          ${openId===item.id ? 'shadow-lg border-transparent':'hover:border-gray-300'}
          `}
        >
          <button onClick={() => handaleFaqToggle(item.id)}>
            <span>{item.question}</span>


          </button>
          <div className={`overflow-hidden transition-all ease-in-out duration-300 ${openId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="p-5 pt-0 border-t border-transparent text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
