"use client";

export default function SchedulePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900">

            {/* FULL WIDTH MARQUEE */}
            {/* <div className="w-full overflow-hidden bg-black/60 border-y border-orange-500 py-6"> */}

            <div className="flex animate-marquee whitespace-nowrap">
                <h1 className="text-4xl md:text-6xl font-extrabold text-orange-400 mx-8">
                    Gyanedra Barik Is the winner in every event...
                </h1>
                <h1 className="text-4xl md:text-6xl font-extrabold text-orange-400 mx-8">
                    Gyanedra Barik Is the winner in every event...
                </h1>
                <h1 className="text-4xl md:text-6xl font-extrabold text-orange-400 mx-8">
                    Gyanedra Barik Is the winner in every event...
                </h1>
                <h1 className="text-4xl md:text-6xl font-extrabold text-orange-400 mx-8">
                    Gyanedra Barik Is the winner in every event...
                </h1>
            </div>

            {/* </div> */}

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>

        </div>
    );
}
