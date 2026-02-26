"use client";

export default function SchedulePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900 p-4 sm:p-6">

            <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-5xl">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 text-center mb-6">
                    Event Timing & Venue
                </h1>

                {/* Responsive Table Wrapper */}
                <div className="overflow-x-auto">
                    <table className="min-w-[700px] w-full border border-orange-500 text-white text-sm sm:text-base md:text-lg text-center">
                        <thead>
                            <tr className="bg-orange-500 text-black">
                                <th className="p-2 sm:p-3 border border-orange-500">Event</th>
                                <th className="p-2 sm:p-3 border border-orange-500">Date</th>
                                <th className="p-2 sm:p-3 border border-orange-500">Reporting Time</th>
                                <th className="p-2 sm:p-3 border border-orange-500">Start Time</th>
                                <th className="p-2 sm:p-3 border border-orange-500">Venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 sm:p-3 border border-orange-500">Brain Battle</td>
                                <td className="p-2 sm:p-3 border border-orange-500">26.02.2026</td>
                                <td className="p-2 sm:p-3 border border-orange-500">4:10 PM</td>
                                <td className="p-2 sm:p-3 border border-orange-500">4:30 PM</td>
                                <td className="p-2 sm:p-3 border border-orange-500">Room 4.03</td>
                            </tr>

                            <tr>
                                <td className="p-2 sm:p-3 border border-orange-500">Esports</td>
                                <td className="p-2 sm:p-3 border border-orange-500">26.02.2026</td>
                                <td className="p-2 sm:p-3 border border-orange-500">5:00 PM</td>
                                <td className="p-2 sm:p-3 border border-orange-500">5:30 PM</td>
                                <td className="p-2 sm:p-3 border border-orange-500">Lawn</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}