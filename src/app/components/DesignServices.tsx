// components/ServiceCardsFlip.jsx
'use client';

import React from 'react';

const ServiceCardsFlip = () => {
  const cards = [
    {
      id: 1,
      title: "Resource Constraints",
      problem: "Internal design teams may be understaffed or lack the specific skills needed for certain projects.",
      solution: "KREEB's subscription model offers high-quality design services at a fraction of the cost of hiring an in-house team, making it a cost-effective solution for clients."
    },
    {
      id: 2,
      title: "Managing Workloads", 
      problem: "Internal teams might struggle with managing workloads, especially during peak periods or when handling multiple projects simultaneously.",
      solution: "KREEB provides scalable design resources that can handle fluctuating workloads efficiently."
    },
    {
      id: 3,
      title: "Quality Consistency",
      problem: "Maintaining consistent design quality across different projects and team members can be challenging.",
      solution: "KREEB ensures consistent high-quality output through standardized processes and expert designers."
    }
  ];

  return (
    <section className="w-full bg-[#f5f5f5e8] py-12 border-black/20 border border-dashed">
      <div className="max-w-3xl mx-auto px-6 text-center border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="w-1/2 max-w-sm mx-auto mb-4">
            <h2 className="text-3xl md:text-md subheader-text font-bold mb-4 text-black">
            What's holding you back from choosing us, considering we've already addressed these issues?
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="group h-96 [perspective:1000px]"
            >
              <div className="relative h-full w-full rounded-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-gray-300 to-gray-500 border border-gray-600 p-6 text-white [backface-visibility:hidden]">
                  <div className="flex flex-col h-full justify-center items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mb-6">
                      <span className="text-2xl font-bold">{card.id}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                    <p className="text-gray-300">
                      {card.problem.substring(0, 100)}...
                    </p>
                    <div className="mt-6 text-gray-400 text-sm">
                      Hover to flip
                    </div>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black border border-gray-700 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex flex-col h-full justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                    <div className="mb-4">
                      <span className="text-green-400 font-semibold">Solution:</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed mb-6">
                      {card.solution}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-700">
                      <span className="text-green-400 text-sm">KREEB Solution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsFlip;