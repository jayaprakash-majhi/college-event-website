"use client";

export default function SchedulePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900 overflow-hidden">

            <div className="flex animate-marquee whitespace-nowrap">
                <h1 className="text-3xl md:text-5xl font-extrabold text-orange-400 mx-12">
                    🎉 Event Dates: 28th – 1st
                </h1>
                <h1 className="text-3xl md:text-5xl font-extrabold text-orange-400 mx-12">
                    📝 Registration Deadline: 25th
                </h1>
                <h1 className="text-3xl md:text-5xl font-extrabold text-orange-400 mx-12">
                    🎉 Event Dates: 28th – 1st
                </h1>
                <h1 className="text-3xl md:text-5xl font-extrabold text-orange-400 mx-12">
                    📝 Registration Deadline: 25th
                </h1>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .animate-marquee {
                    animation: marquee 12s linear infinite;
                }
            `}</style>

        </div>
    );
}