"use client";

export default function WinnersPage() {

    const events = [
        { event: "MANDAL ART", first: ["ANKITA MANGARAJ"], cons: ["SUBHANGINI SAHOO"] },
        { event: "PENCIL ART", first: ["OM DEBASHISH"], cons: ["SUPREET MOHAPATRA"] },
        { event: "PEN ART", first: ["MUKTIKANTA MALLICK"], cons: ["ABHIJEET SANDA"] },
        {
            event: "COLOUR PAINT",
            first: ["RAMAKRUSHNA DEBATA"],
            cons: ["ABHILIPSA HARICHANDAN", "ABHILIPSA SAMANTARAY"]
        },
        { event: "CANVAS PAINTING", first: ["BINAYAK SAHOO"], cons: [] },
        {
            event: "MORROR CRAFT",
            first: ["PALLABI PRIYADARSHINI MAJHI"],
            cons: ["SIPRA SIBALIKA OJHA"]
        },
        {
            event: "PAPER CRAFT",
            first: ["LADLI SAMANTARAY"],
            cons: ["BARSHA PRIYADARSHINI BEHERA"]
        },
        { event: "MIND CRAFT", first: ["NAMRATA PRADHAN"], cons: [] },
        {
            event: "WAST O CRAFT",
            first: ["OM PRAKASH PARIDA"],
            cons: ["SWATIMAYEE KHUNTIA"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white px-4 py-10">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 text-center mb-12">
                Final Winners(Art Gallery) in SRIJANA Fest
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">

                {events.map((ev, index) => (
                    <div
                        key={index}
                        className="bg-black/60 backdrop-blur-md p-6 rounded-xl shadow-lg text-center"
                    >

                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-300 mb-6">
                            {ev.event}
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">

                            {/* First Position */}
                            <div className="w-full sm:w-1/2">
                                <h3 className="text-green-400 font-semibold mb-2">
                                    🥇 1st Position
                                </h3>
                                <ul className="space-y-1">
                                    {ev.first.map((name, i) => (
                                        <li key={i}>{name}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Consolation */}
                            <div className="w-full sm:w-1/2">
                                <h3 className="text-purple-400 font-semibold mb-2">
                                    ⭐ Consolation
                                </h3>
                                <ul className="space-y-1">
                                    {ev.cons.length > 0 ? (
                                        ev.cons.map((name, i) => (
                                            <li key={i}>{name}</li>
                                        ))
                                    ) : (
                                        <li className="text-gray-400">—</li>
                                    )}
                                </ul>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}