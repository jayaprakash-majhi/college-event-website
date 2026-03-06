"use client";

export default function WinnersPage() {

    const events = [
        {
            event: "Laugh Riot",
            first: ["Aditya Raj Pandey"],
            second: ["Biswarupa Swain"],
            third: ["Subham Choudhury"],
            cons: []
        },
        {
            event: "Lip Sync Battle",
            first: ["Uttam Dey"],
            second: ["Subhasree Panigrahi"],
            third: ["J.K.Amit Nath"],
            cons: []
        },
        {
            event: "Pot Design",
            first: ["Pallabi Priyadarshni Majhi"],
            second: ["Puja Rani Sahoo"],
            third: ["Bandita Mohanty"],
            cons: ["Subhashree Panigrahi", "Amrisha Priyadarshini"]
        },
        {
            event: "Rangotsav",
            first: ["Ankita Mangraj", "Ipsita Bhugan"],
            second: ["Swayamprabha Padhi", "Juel Jaslin Sahoo"],
            third: ["Payal Biswal", "Advin Kumar"],
            cons: ["Riya Kumari", "Anjali Kumari"]
        },
        {
            event: "Guess What!",
            first: ["Amit Samal", "Soumya Ranjan Nayak", "Sumant Padhy", "Siddhi Subha Nandini"],
            second: ["Sima Mandal", "Sandhya Kumari", "Nibedita Mishra", "Sania Biswal"],
            third: ["Ayush Kumar Sawan", "Adyush Omm Mohapatra", "Subham Sahoo", "Dipun Rout"],
            cons: []
        },
        {
            event: "Treasure Hunt",
            first: [
                "Adyush Omm Mohapatra",
                "Ayush Kumar Sawan",
                "Ompreet Mohapatra",
                "Nibedita Jena",
                "Abhilipsa Dash",
                "Sudeshna Dash"
            ],
            second: [
                "Supriya Priyadarshini Rout",
                "Dharmendra Lenka",
                "Barsha Priyadarshini Barik",
                "Saheen Farhat",
                "Smruti Prangya Das",
                "Keshav Kumar"
            ],
            third: [],
            cons: []
        },
        {
            event: "Face Fantasy",
            first: ["Painter - Shruti Kumari", "Model - Ipsita Behera"],
            second: ["Painter - Smurtismita Rout", "Model - Subhasmita Pradhan"],
            third: ["Painter - Om Prakash Parida", "Model - Ganesh Pradhan"],
            cons: []
        },
        {
            event: "Marketing Madness",
            first: ["Dibya Darshan Dhal"],
            second: ["Krushna Chandra Panda", "Palacherla Krishna Chaitanya"],
            third: ["Saloni Singh", "Sunanda Supriya Sahoo", "Adyasha Mohanty", "Pralipsa Mohanty"],
            cons: []
        },
        {
            event: "Mini Movie Fest",
            first: [
                "Manish Kumar",
                "Gyanaranjan Majhi",
                "Tophan Kumar Nath",
                "Biswajit Tripathy"
            ],
            second: [
                "Rohit Kumar Sahoo",
                "Debi Prasad Satapthy",
                "Krishna Prasad Dhal"
            ],
            third: [
                "Asit Kumar Raut",
                "Ayush Tanty",
                "Subham Acharya"
            ],
            cons: []
        },
        {
            event: "Flavour Fiesta",
            first: [
                "Amrusha Priyadarshini",
                "Biswajit Sahoo"
            ],
            second: [
                "Sneha Panda",
                "Akshita Priyadarshini"
            ],
            third: [
                "Diptisikha Behera"
            ],
            cons: [
                "Simran Sahoo",
                "Subhashree Das",
                "Jayshree Rout",
                "Krushana Chandra Panda"
            ]
        },
        {
            event: "Eat And Run",
            first: [
                "Rishi Kumar Sahoo",
                "Chandra Sekhar Sadangi",
                "Sujit Kumar Sahoo",
                "Biswajit Sahoo"
            ],
            second: [
                "Sunil Mishra",
                "Brajendra Kumar Samal"
            ],
            third: [
                "Simran Sahoo",
                "Subhashree Das"
            ],
            cons: []
        },
        {
            event: "E-Sports(FREE FIRE)",
            first: [
                "Sanket Samantray",
                "Rashmi Ranjan Deo",
                "Amit Kumar Jena",
                "Subhranshu Sekhar Samal"
            ],
            second: [
                "Anurag Sahoo",
                "Abhinaba Behera",
                "Suvam Biswal",
                "Debashis Mohapatra"
            ],
            third: [
                "Sangram Sethi",
                "Sandeep Parida",
                "Rahul Ranjan Soyi",
                "Sujit Baral"
            ],
            cons: []
        },
        {
            event: "E-Sports(BGMI)",
            first: [
                "Ashutosh Lenka",
                "Samyak Satapathy",
                "Jyoti Prakash Sethi",
                "Ayushman Mohanty"
            ],
            second: [
                "Amit Kumar Majhi",
                "Ayur Topno",
                "Shakti Biplab",
                "Sai Ram Narayan"
            ],
            third: [
                "Ronak Kumar Sahoo",
                "Anshuman Barik",
                "Sandeep Kuanar",
                "Sambit Mohanty"
            ],
            cons: []
        },
        {
            event: "Talent Spotlight",
            first: ["Subrat Mallick"],
            second: ["Simran Thatoi"],
            third: ["Akankhya Mohanty"],
            cons: ["Rajalaxmi Sahoo"]
        },
        {
            event: "Photography",
            first: ["Dibyajyoti Pradhan"],
            second: ["Prem Kumar Beura"],
            third: ["P. Sonali Patra"],
            cons: ["Sanchita Mahanta", "Swaraj Swarup Jena"]
        },
        {
            event: "Frame The Fame",
            first: ["Rishav Mahato"],
            second: ["Dibya Darshan Dhal"],
            third: ["Ishu Ansh"],
            cons: []
        },
        {
            event: "Brain Battle",
            first: [
                "Prabin Kumar Behera",
                "Santanu Das"
            ],
            second: [
                "Avinash Kumar"
            ],
            third: [
                "Rishi Kumar Bagria",
                "Subrat Mallick"
            ],
            cons: [
                "Ritish Mohanty",
                "Subashish Swain",
                "Gyanendra Kumar Barik",
                "Subham Das"
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white px-3 sm:px-6 py-8 sm:py-12">

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 text-center mb-10">
                Final Winners in SRIJANA Fest
            </h1>

            <div className="max-w-6xl mx-auto space-y-8">

                {events.map((ev, index) => (
                    <div key={index} className="bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg">

                        {/* Event Name */}
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-300 mb-6 text-center">
                            {ev.event}
                        </h2>

                        {/* Responsive Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            {/* 1st */}
                            <div className="text-center">
                                <h3 className="text-green-400 font-semibold mb-2 text-sm sm:text-base">
                                    🥇 1st Position
                                </h3>
                                <ul className="space-y-1 text-xs sm:text-sm">
                                    {ev.first.map((name, i) => (<li key={i}>{name}</li>))}
                                </ul>
                            </div>

                            {/* 2nd */}
                            <div className="text-center">
                                <h3 className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">
                                    🥈 2nd Position
                                </h3>
                                <ul className="space-y-1 text-xs sm:text-sm">
                                    {ev.second.map((name, i) => (<li key={i}>{name}</li>))}
                                </ul>
                            </div>

                            {/* 3rd */}
                            <div className="text-center">
                                <h3 className="text-yellow-400 font-semibold mb-2 text-sm sm:text-base">
                                    🥉 3rd Position
                                </h3>
                                <ul className="space-y-1 text-xs sm:text-sm">
                                    {ev.third.map((name, i) => (<li key={i}>{name}</li>))}
                                </ul>
                            </div>

                            {/* Consolation */}
                            <div className="text-center">
                                <h3 className="text-purple-400 font-semibold mb-2 text-sm sm:text-base">
                                    ⭐ Consolation
                                </h3>
                                <ul className="space-y-1 text-xs sm:text-sm">
                                    {ev.cons.map((name, i) => (<li key={i}>{name}</li>))}
                                </ul>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}