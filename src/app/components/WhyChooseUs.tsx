'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ComparisonRow {
    feature: string;
    kree8: string | React.ReactNode;
    employees: string | React.ReactNode;
    otherAgencies: string | React.ReactNode;
}

const WhyChooseUs: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const comparisonData: ComparisonRow[] = [
        {
            feature: 'Cost',
            kree8: '✓ $',
            employees: '✗ $$$$ (High Overhead)',
            otherAgencies: '✗ $$'
        },
        {
            feature: 'Senior-Level Designer',
            kree8: '✓ Guaranteed',
            employees: '✗ Hopefully',
            otherAgencies: '✗ Maybe'
        },
        {
            feature: 'Turnaround Time',
            kree8: '✓ 48 hours for most projects',
            employees: '✗ Can take weeks due to other tasks',
            otherAgencies: '✗ Weeks, depending on workload'
        },
        {
            feature: 'Start Time',
            kree8: '✓ Today itself',
            employees: '✗ Weeks to onboard and train',
            otherAgencies: '✗ Days to set up agreements'
        },
        {
            feature: 'Unlimited Revisions',
            kree8: '✓ Yes, we keep working until it\'s perfect',
            employees: '✗ Limited, with extra time constraints',
            otherAgencies: '✗ Limited revisions per project'
        },
        {
            feature: 'Client Portal',
            kree8: '✓ Yes, track progress easily',
            employees: '✗ Internal systems may vary, often less accessible',
            otherAgencies: '✗ No consistent system'
        },
        {
            feature: 'Scalability',
            kree8: '✓ Scale up or down with ease',
            employees: '✓ Possible',
            otherAgencies: '✗ Limited by freelancer\'s capacity'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="why-choose-us"
            className="w-full bg-[#f5f5f5e8] py-12  border border-dashed border-gray-300">
            <div className="max-w-4xl mx-auto px-6 text-center text-black border border-dashed border-gray-300">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="max-w-4xl mx-auto">
                        <div className="w-1/2 max-w-sm mx-auto mb-10">
                            <h2 className="text-2xl md:text-md subheader-text font-bold mb-4">
                                Why choose us?
                            </h2>
                            <div className="text-sm normal-text text-black max-sm mx-auto">
                                <p>Check out what Kreed offers Vs employees and other agencies. It's quite a lot!</p>
                            </div>
                        </div>
                    </div>
                    {/* Comparison Table */}
                    <div className="overflow-x-auto px-14 py-14 ">
                        <table className="w-full border-collapse rounded-3xl shadow-lg">
                            {/* Table Header */}
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 bg-gray-50 rounded-tl-3xl rounded-tr-3xl text-sm text-left font-semibold text-gray-900 border-b-2 border-gray-200">
                                        Feature
                                    </th>
                                    <th className="p-4 text-sm bg-white text-left font-semibold text-gray-800 border-b-2 border-gray-300">
                                        Kree8
                                    </th>
                                    <th className="p-4 text-sm bg-white text-left font-semibold text-gray-700 border-b-2 border-gray-200">
                                        Employees
                                    </th>
                                    <th className="p-4 text-sm bg-white text-left font-semibold text-gray-700 border-b-2 border-gray-200">
                                        Other Agencies
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body with Animation */}
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <tr
                                        key={index}
                                        className={`
                    border-b border-gray-100 bg-gray-50 rounded-xl
                    transition-all duration-700 ease-out
                    ${isVisible
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-10 opacity-0'
                                            }
                  `}
                                        style={{
                                            transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                                        }}
                                    >
                                        <td className="p-4 text-sm font-medium text-gray-900 bg-gray-50 normal-text text-xs">
                                            {row.feature}
                                        </td>
                                        <td className="p-4 text-sm normal-text text-gray-700 bg-white font-semibold text-xs">
                                            {row.kree8}
                                        </td>
                                        <td className="p-4 text-sm normal-text text-gray-700 bg-white text-xs">
                                            {row.employees}
                                        </td>
                                        <td className="p-4 text-sm normal-text text-gray-700 bg-white text-xs">
                                            {row.otherAgencies}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Note */}
                    <p className="text-black border-t border-gray-300 border-dashed text-sm normal-text mt-5">
                   And here's come the <span style={{ fontWeight: "500" }} className="font-bold normal-text text-black text-lg">Sauce...</span>
                </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;