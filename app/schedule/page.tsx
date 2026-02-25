"use client";

export default function SchedulePage() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-black via-gray-900 to-orange-900 p-6 gap-10 text-white">

            {/* ---------- HEADING + INSTRUCTIONS ---------- */}
            <div className="text-center max-w-4xl space-y-3">
                <h1 className="text-4xl font-bold text-orange-400">
                    Esports Match Schedule
                </h1>

                <p>📍 All matches will be played in <span className="text-orange-400 font-semibold">GEC Lawn</span>.</p>
                <p>⚠ All students must come with your Identity Card and required equipment.</p>
            </div>

            {/* ---------- TABLE 1 : GROUP TIMING ---------- */}
            <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-8 w-full max-w-4xl">

                <h2 className="text-3xl font-bold text-orange-400 text-center mb-6">
                    Group Reporting & Match Timing
                </h2>

                <table className="w-full border border-orange-500 text-lg text-center">
                    <thead>
                        <tr className="bg-orange-500 text-black">
                            <th className="p-3 border border-orange-500">Group</th>
                            <th className="p-3 border border-orange-500">Reporting Time</th>
                            <th className="p-3 border border-orange-500">Match Start Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="p-3 border border-orange-500">Group A</td><td className="p-3 border border-orange-500"> 5:00 PM</td><td className="p-3 border border-orange-500">5:30 PM</td></tr>
                        <tr><td className="p-3 border border-orange-500">Group B</td><td className="p-3 border border-orange-500"> 5:00 PM</td><td className="p-3 border border-orange-500">5:30 PM</td></tr>
                        <tr><td className="p-3 border border-orange-500">Group C</td><td className="p-3 border border-orange-500"> 5:40 PM</td><td className="p-3 border border-orange-500">6:00 PM</td></tr>
                        <tr><td className="p-3 border border-orange-500">Group D</td><td className="p-3 border border-orange-500"> 5:40 PM</td><td className="p-3 border border-orange-500">6:00 PM</td></tr>
                        <tr><td className="p-3 border border-orange-500">Group E</td><td className="p-3 border border-orange-500"> 6:10 PM</td><td className="p-3 border border-orange-500">6:30 PM</td></tr>
                    </tbody>
                </table>
            </div>

            {/* ---------- TABLE 2 : ALL GROUP TEAM LISTS ---------- */}
            {/* ---------- TABLE 2 : ALL GROUP TEAM LISTS ---------- */}
            <div className="w-full max-w-6xl">

                <h2 className="text-3xl font-bold text-orange-400 text-center mb-8">
                    Group Wise Team List
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Group A */}
                    <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-5">
                        <h3 className="text-xl font-bold text-orange-400 text-center mb-4">Group A</h3>
                        <table className="w-full border border-orange-500 text-center text-sm">
                            <tbody>
                                {["Od_elite_x", "glitchUsers", "Teamjod", "Toxic squad", "Super king elite", "Panthom x", "Tb brothers", "Team rangers", "Zone pusher", "Tm maksad", "ACEA", "Tm Artoriu"]
                                    .map((team, index) => (
                                        <tr key={index}>
                                            <td className="p-2 border border-orange-500">{team}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Group B */}
                    <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-5">
                        <h3 className="text-xl font-bold text-orange-400 text-center mb-4">Group B</h3>
                        <table className="w-full border border-orange-500 text-center text-sm">
                            <tbody>
                                {["Night fire", "Star odisha", "Team ios", "Entity x", "Team furious", "Fearless", "Error 404", "Team void", "Team rusher", "Knights", "TL eSports", "Tempest"]
                                    .map((team, index) => (
                                        <tr key={index}>
                                            <td className="p-2 border border-orange-500">{team}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Group C */}
                    <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-5">
                        <h3 className="text-xl font-bold text-orange-400 text-center mb-4">Group C</h3>
                        <table className="w-full border border-orange-500 text-center text-sm">
                            <tbody>
                                {["Besera boys", "Superisers", "Team reapers", "Team btech", "Tech titans", "Alpha predictor", "Rising star", "Fighter", "Doctor devil", "Head smasher", "Dark storm", "Daddy's home"]
                                    .map((team, index) => (
                                        <tr key={index}>
                                            <td className="p-2 border border-orange-500">{team}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Group D */}
                    <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-5">
                        <h3 className="text-xl font-bold text-orange-400 text-center mb-4">Group D</h3>
                        <table className="w-full border border-orange-500 text-center text-sm">
                            <tbody>
                                {["wipe out", "shadow hunters", "pheonix rising", "Nxt warrior", "Toxic empire", "Team elite", "Haati mera sathi", "Team swag", "Cross 11", "Egoistic", "Team leo", "Grim x"]
                                    .map((team, index) => (
                                        <tr key={index}>
                                            <td className="p-2 border border-orange-500">{team}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Group E */}
                    <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-5 md:col-span-2">
                        <h3 className="text-xl font-bold text-orange-400 text-center mb-4">Group E</h3>
                        <table className="w-full border border-orange-500 text-center text-sm">
                            <tbody>
                                {["The elite four", "Team wolf", "Zero mercy", "Team pokex", "Fearless fighter", "Night fury", "Blue monster", "Blood hunters", "Spirit x God", "4 unknown", "TGR esp", "Hackrrrrr"]
                                    .map((team, index) => (
                                        <tr key={index}>
                                            <td className="p-2 border border-orange-500">{team}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
}