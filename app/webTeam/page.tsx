export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-2xl bg-gradient-to-br from-orange-600 to-black rounded-2xl shadow-2xl p-6 md:p-10 border border-orange-500">

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-center font-serif mb-8 text-orange-400">
                    WebTeam
                </h1>

                {/* Faculty 1 */}
                <div className="mb-6 p-4 rounded-xl border border-orange-500 bg-black/60">
                    <h2 className="text-xl font-semibold mb-2 text-orange-300">
                        Mrutyunjay Swain
                    </h2>
                    <p>B.Tech(Cse)</p>
                    <p className="text-orange-200">📞 +91 7609910671</p>
                </div>

                {/* Faculty 2 */}
                <div className="mb-6 p-4 rounded-xl border border-orange-500 bg-black/60">
                    <h2 className="text-xl font-semibold mb-2 text-orange-300">
                        Binit Ranjan Nayak
                    </h2>
                    <p>B.Tech(Cse)</p>
                    <p className="text-orange-200">📞 +91 7750943171</p>
                </div>
                <div className="mb-6 p-4 rounded-xl border border-orange-500 bg-black/60">
                    <h2 className="text-xl font-semibold mb-2 text-orange-300">
                        Jaya Prakash Majhi
                    </h2>
                    <p>B.Tech(Cse)</p>
                    <p className="text-orange-200">📞 +91 7205089574</p>
                </div>


                {/* Email Section */}


            </div>
        </div>
    );
}
