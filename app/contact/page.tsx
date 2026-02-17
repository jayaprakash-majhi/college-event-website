export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-2xl bg-gradient-to-br from-orange-600 to-black rounded-2xl shadow-2xl p-6 md:p-10 border border-orange-500">

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-center font-serif mb-8 text-orange-400">
                    Contact Us
                </h1>

                {/* Faculty 1 */}
                <div className="mb-6 p-4 rounded-xl border border-orange-500 bg-black/60">
                    <h2 className="text-xl font-semibold mb-2 text-orange-300">
                        Prof. Himanshu Bhusan Mohapatra
                    </h2>
                    <p className="text-orange-200">📞 +91 7978552954</p>
                </div>

                {/* Faculty 2 */}
                <div className="mb-6 p-4 rounded-xl border border-orange-500 bg-black/60">
                    <h2 className="text-xl font-semibold mb-2 text-orange-300">
                        Prof. Ambika Prasad Hota
                    </h2>
                    <p className="text-orange-200">📞 +91 9439687716</p>
                </div>

                {/* Email Section */}
                <div className="p-4 rounded-xl border border-orange-500 bg-orange-500 text-black font-semibold text-center">
                    📧 binitn165@gmail.com
                </div>

            </div>
        </div>
    );
}
