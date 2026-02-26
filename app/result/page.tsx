"use client";

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 px-3 py-6 sm:px-6 sm:py-10 text-white">

            {/* Page Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 text-center mb-8">
                Esports 1st Round Winner Team List
            </h1>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-6xl mx-auto">

                {/* -------- GROUP Z -------- */}
                <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 w-full">

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400 text-center mb-4">
                        Group Z (Lawn 1)
                    </h2>

                    <table className="w-full border border-orange-500 text-xs sm:text-sm md:text-base text-center">
                        <thead>
                            <tr className="bg-orange-500 text-black">
                                <th className="p-2 border border-orange-500 w-16">No</th>
                                <th className="p-2 border border-orange-500">Team Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                "Tm maksad", "ACEA", "Team jod", "Super king elite", "Head smasher",
                                "Superisers", "Tech titans", "Rising star", "Zero mercy", "TGR esp"
                            ].map((team, index) => (
                                <tr key={index}>
                                    <td className="p-2 border border-orange-500">{index + 1}</td>
                                    <td className="p-2 border border-orange-500 break-words">{team}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* -------- GROUP X -------- */}
                <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 w-full">

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400 text-center mb-4">
                        Group X (Lawn 2)
                    </h2>

                    <table className="w-full border border-orange-500 text-xs sm:text-sm md:text-base text-center">
                        <thead>
                            <tr className="bg-orange-500 text-black">
                                <th className="p-2 border border-orange-500 w-16">No</th>
                                <th className="p-2 border border-orange-500">Team Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                "Star odisha", "Team furious", "TL eSports", "Team ios", "Grim x",
                                "pheonix rising", "Team swag", "Egostic", "Night fury", "Hackrrrrr"
                            ].map((team, index) => (
                                <tr key={index}>
                                    <td className="p-2 border border-orange-500">{index + 1}</td>
                                    <td className="p-2 border border-orange-500 break-words">{team}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}