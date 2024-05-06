import { useState } from 'react'
import { FiMinus } from "react-icons/fi"
import { Rubik } from "next/font/google"
import { FaPlus } from "react-icons/fa6"

const rubik = Rubik({ subsets: ["latin"] })

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'Connect your calendar',
      answer: 'Next.js is a React framework for building server-rendered applications.'
    },
    {
      question: 'How do I recieve payments?',
      answer: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.'
    },
    {
        question: 'What is Tailwind CSS?',
        answer: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.'
    },
    {
        question: 'What is Tailwind CSS?',
        answer: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.'
    },
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <div key={index} className="">
          <button
            className="w-full flex justify-between items-center rounded"
            onClick={() => toggleFAQ(index)}
          >
            <p className="font-semibold text-lg border-t border-[#dddddd] w-full py-5 text-left">{faq.question}</p>
            <div className='-ml-6 mr-12'>
                {activeIndex == index && (
                    <FiMinus size={22} strokeWidth={3}/>
                )}
                {activeIndex != index && (
                <   FaPlus size={21}/>
                )}
            </div>
          </button>
          {activeIndex === index && (
            <p className="mt-2 mb-6">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  )
}

