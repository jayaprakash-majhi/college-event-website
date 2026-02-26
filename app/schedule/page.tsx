"use client";

export default function SchedulePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900 overflow-hidden">

            <div className="w-full overflow-hidden">
                <div className="whitespace-nowrap animate-marquee text-5xl font-bold text-orange-400">
                    Coming Soon •••••••• Coming Soon ••••••• Coming Soon •••••• Coming Soon ••••••
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    display: inline-block;
                    animation: marquee 12s linear infinite;
                }
            `}</style>

        </div>
    );
}