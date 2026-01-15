"use client";

import Image from "next/image";
import faqBanner from "@/public/faq/faq-banner.jpg";
import { useState } from "react";
import { div } from "framer-motion/client";

const faqData = [
  {
    id: "01",
    question: "What interior design services do you offer?",
    answer:
      "We offer end-to-end interior design services, including concept development, space planning, furniture selection, lighting design, material sourcing, and custom interiors tailored to your lifestyle and budget.",
  },
  {
    id: "02",
    question: "What services do you offer?",
    answer:
      "Our services include residential and commercial interior design, renovation planning, 3D visualizations, turnkey project execution, and bespoke furniture and décor solutions.",
  },
  {
    id: "03",
    question: "What is your design process?",
    answer:
      "Our design process begins with an in-depth consultation, followed by concept creation, layout planning, material selection, and final execution. We collaborate closely with clients at every stage to ensure the design reflects their vision.",
  },
  {
    id: "04",
    question: "How do you establish your design fees?",
    answer:
      "Design fees are determined based on project scope, size, complexity, and level of customization required. We provide transparent pricing after an initial consultation and offer flexible packages to suit different needs.",
  },
  {
    id: "05",
    question: "Will I need planning permission for my project?",
    answer:
      "Planning permission depends on the nature of the project. Minor interior renovations usually don’t require approval, while structural changes may. We guide you through all regulatory requirements when applicable.",
  },
  {
    id: "06",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. Smaller projects may take a few weeks, while full-scale interior projects typically range from 8 to 16 weeks. We provide a detailed timeline before starting.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
              Popular Queries
            </span>
          </div>

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl mb-5">
              Quick and clear{" "}
              <span className="text-(--primary)">Answers To Your Key</span>{" "}
              services
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 py-10">
          <div className="w-full lg:w-1/1">
            <div className="space-y-4 w-full">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`overflow-hidden py-2 transition-all duration-300 border-b border-gray-300
                        ${openIndex === index ? "" : ""}`}
                >
                  <button
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    <div className="faq-heading flex items-center gap-5">
                      <h3 className="text-3xl font-semibold text-(--primary)">
                        {item.id}
                      </h3>

                      <span className="text-2xl md:text-3xl GolosText font-semibold text-gray-800">
                        {item.question}
                      </span>
                    </div>

                    {openIndex === index ? (
                      <i className="bi bi-dash text-(--primary) text-3xl transition-all duration-300"></i>
                    ) : (
                      <i className="bi bi-plus text-(--primary) text-3xl transition-all duration-300"></i>
                    )}
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === index
                        ? "max-h-[300px] opacity-100 py-3"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    <p className="GolosText px-7">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 pt-5">
            <div className="faq-card flex flex-col md:flex-row lg:flex-col md:items-center items-start gap-6">
              <Image
                src={faqBanner}
                alt="faqBanner"
                className="rounded-2xl mb-5"
              />

              <div className="flex flex-col">
                <h2 className="capitalize text-3xl CalSans mb-5">
                  Still looking for answers or need a fun chat?
                </h2>

                <p className="text-gray-400 text-lg GolosText">
                  Our team will guide you through our design process, project
                  specifications and cost estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
