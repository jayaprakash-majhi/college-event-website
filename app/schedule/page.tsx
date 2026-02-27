"use client";

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 p-4 sm:p-6">
            <div className="max-w-6xl mx-auto bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-8">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 text-center mb-2">
                    SRIJANA
                </h1>

                <h2 className="text-lg sm:text-xl text-red-400 text-center mb-6">
                    GEC Art and Culture Fest-2k26
                </h2>

                {/* Responsive Wrapper */}
                <div className="overflow-x-auto">
                    <table className="min-w-[900px] w-full border border-orange-500 text-white text-sm sm:text-base text-center">
                        <thead>
                            <tr className="bg-orange-500 text-black">
                                <th className="p-2 border border-orange-500">Event</th>
                                <th className="p-2 border border-orange-500">Venue</th>
                                <th className="p-2 border border-orange-500">Date</th>
                                <th className="p-2 border border-orange-500">Time</th>
                            </tr>
                        </thead>

                        <tbody>

                            {/* DAY 1 */}
                            <tr className="bg-blue-900 font-bold">
                                <td colSpan={4} className="p-2 border border-orange-500">
                                    Day-1 (28.02.2026)
                                </td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Inauguration</td>
                                <td className="p-2 border border-orange-500">Mechanical Lawn</td>
                                <td className="p-2 border border-orange-500">28.02.26</td>
                                <td className="p-2 border border-orange-500">9AM-10AM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Rangotsav</td>
                                <td className="p-2 border border-orange-500">Ground Floor Courtyard (Office Side)</td>
                                <td className="p-2 border border-orange-500">28.02.26</td>
                                <td className="p-2 border border-orange-500">10:30AM-11:30AM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Face Fantasy</td>
                                <td className="p-2 border border-orange-500">Ground Floor Courtyard (Office Side)</td>
                                <td className="p-2 border border-orange-500">28.02.26</td>
                                <td className="p-2 border border-orange-500">11AM-12PM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Art & Craft</td>
                                <td className="p-2 border border-orange-500">Placement Lounge (2nd Floor)</td>
                                <td className="p-2 border border-orange-500">28.02.26</td>
                                <td className="p-2 border border-orange-500">11:30AM Onwards</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Pot Design</td>
                                <td className="p-2 border border-orange-500">Ground Floor Courtyard (Office Side)</td>
                                <td className="p-2 border border-orange-500">28.02.26</td>
                                <td className="p-2 border border-orange-500">12PM-1PM</td>
                            </tr>

                            <tr className="bg-gray-700 font-semibold">
                                <td colSpan={4} className="p-2 border border-orange-500">
                                    BREAK (1PM-2PM)
                                </td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Frame the Fame</td>
                                <td className="p-2 border border-orange-500">Seminar Hall (3rd Floor)</td>
                                <td className="p-2 border border-orange-500">28.02.26</td>
                                <td className="p-2 border border-orange-500">2PM-3PM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Laugh Riot</td>
                                <td className="p-2 border border-orange-500">Ground Floor Courtyard (Classroom Side)</td>
                                <td className="p-2 border border-orange-500">28.02.26</td>
                                <td className="p-2 border border-orange-500">2PM-4PM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Mini Movie Fest</td>
                                <td className="p-2 border border-orange-500">Seminar Hall (3rd Floor)</td>
                                <td className="p-2 border border-orange-500">28.02.26</td>
                                <td className="p-2 border border-orange-500">4PM-5PM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Esports</td>
                                <td className="p-2 border border-orange-500">Back Side Lawn</td>
                                <td className="p-2 border border-orange-500">28.02.26</td>
                                <td className="p-2 border border-orange-500">4PM-5PM</td>
                            </tr>

                            {/* DAY 2 */}
                            <tr className="bg-green-900 font-bold">
                                <td colSpan={4} className="p-2 border border-orange-500">
                                    Day-2 (01.03.2026)
                                </td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Guess What!</td>
                                <td className="p-2 border border-orange-500">Class Room 2.03 (2nd Floor)</td>
                                <td className="p-2 border border-orange-500">01.03.26</td>
                                <td className="p-2 border border-orange-500">9:30AM-10:30AM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Marketing Madness</td>
                                <td className="p-2 border border-orange-500">Class Room 3.03 (3rd Floor)</td>
                                <td className="p-2 border border-orange-500">01.03.26</td>
                                <td className="p-2 border border-orange-500">10:30AM-11:30AM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Treasure Hunt</td>
                                <td className="p-2 border border-orange-500">Class Room 2.03 (2nd Floor)</td>
                                <td className="p-2 border border-orange-500">01.03.26</td>
                                <td className="p-2 border border-orange-500">11:30AM-12:30PM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Brain Battle</td>
                                <td className="p-2 border border-orange-500">English Lab (3rd Floor)</td>
                                <td className="p-2 border border-orange-500">01.03.26</td>
                                <td className="p-2 border border-orange-500">11AM-1PM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Flavour Fiesta</td>
                                <td className="p-2 border border-orange-500">Ground Floor Courtyard (Office Side)</td>
                                <td className="p-2 border border-orange-500">01.03.26</td>
                                <td className="p-2 border border-orange-500">12-1PM</td>
                            </tr>

                            <tr className="bg-gray-700 font-semibold">
                                <td colSpan={4} className="p-2 border border-orange-500">
                                    BREAK (1PM-2PM)
                                </td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Talent Spotlight</td>
                                <td className="p-2 border border-orange-500">Ground Floor Courtyard (Classroom Side)</td>
                                <td className="p-2 border border-orange-500">01.03.26</td>
                                <td className="p-2 border border-orange-500">2PM-4PM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Lip Sync Battle</td>
                                <td className="p-2 border border-orange-500">English Lab (3rd Floor)</td>
                                <td className="p-2 border border-orange-500">01.03.26</td>
                                <td className="p-2 border border-orange-500">2PM-3PM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Photography</td>
                                <td className="p-2 border border-orange-500">Seminar Hall (3rd Floor)</td>
                                <td className="p-2 border border-orange-500">01.03.26</td>
                                <td className="p-2 border border-orange-500">3PM-4PM</td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">Eat and Run</td>
                                <td className="p-2 border border-orange-500">Mechanical Lawn</td>
                                <td className="p-2 border border-orange-500">01.03.26</td>
                                <td className="p-2 border border-orange-500">3PM-4PM</td>
                            </tr>

                            <tr className="bg-orange-700 font-semibold">
                                <td className="p-2 border border-orange-500">Prize Distribution</td>
                                <td className="p-2 border border-orange-500">Auditorium</td>
                                <td className="p-2 border border-orange-500">01.03.26</td>
                                <td className="p-2 border border-orange-500">4PM-5PM</td>
                            </tr>

                            {/* INNOSPARK */}
                            <tr className="bg-purple-900 font-bold">
                                <td colSpan={4} className="p-2 border border-orange-500">
                                    INNOSPARK
                                </td>
                            </tr>

                            <tr>
                                <td className="p-2 border border-orange-500">INNOSPARK</td>
                                <td className="p-2 border border-orange-500">Seminar Hall (2nd Floor)</td>
                                <td className="p-2 border border-orange-500">Day-1 & Day-2</td>
                                <td className="p-2 border border-orange-500">9:30AM-5PM</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}