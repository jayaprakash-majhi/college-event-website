"use client";

export default function SchedulePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900 p-6">

            <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-8 w-full max-w-2xl">

                <h1 className="text-3xl md:text-4xl font-bold text-orange-400 text-center mb-6">
                    Event Timing
                </h1>

                <table className="w-full border border-orange-500 text-white text-lg">
                    <thead>
                        <tr className="bg-orange-500 text-black">
                            <th className="p-3 border border-orange-500">Details</th>
                            <th className="p-3 border border-orange-500">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className="p-3 border border-orange-500">
                                Event Dates
                            </td>
                            <td className="p-3 border border-orange-500">
                                28th February – 1st March
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="p-3 border border-orange-500">
                                Registration Deadline
                            </td>
                            <td className="p-3 border border-orange-500">
                                25th Feb
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
}