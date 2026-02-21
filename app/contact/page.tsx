import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const eventCoordinators = [
    {
        event: "Art & Craft",
        faculty: "Prof. Namrata Mishra",
        facultyPhone: "9282738696",
        studentCoordinators: ["Pratiyush Dash", "Ganesh Pradhan", "Bhrayal Sahoo"],
        contacts: ["7202645050", "7326814760", "8018184949"],
        year: "2nd"
    },
    {
        event: "Theme Art",
        faculty: "Prof Irani Majundar",
        facultyPhone: "7008848775",
        studentCoordinators: ["Sayan Sourav Sahoo", "Abhilash Kumari", "Abhinandan Mahanta", "Subham Anubhav Dhal"],
        contacts: ["9040040724", "9135503321", "9040498327", "7853839858"],
        year: "2nd"
    },
    {
        event: "Frame the Fame",
        faculty: "Prof Chakardhar Karan",
        facultyPhone: "9935662133",
        studentCoordinators: ["Prem kumar Beura", "Ritesh Das", "Aish Chakra", "Chandrashekhar Sarangi", "Subhankar Panigrahi"],
        contacts: ["9348958998", "7681869791", "6370062911", "8926974373", "7853652678"],
        year: "2nd"
    },
    {
        event: "Brain Battle",
        faculty: "Prof Binayak Mishra",
        facultyPhone: "8093539537",
        studentCoordinators: ["Satya sundar Giri", "Jayaprakash Majhi", "Mrutyunjay Swain", "Manas Ranjan Rana", "Satyajit Bal", "Santosh Kumar Rout"],
        contacts: ["8456033655", "7205089574", "7609910671", "9938070761", "7978252667", "7838858095"],
        year: "3rd"
    },
    {
        event: "Face Fantasy",
        faculty: "prof.Anjali Sahu",
        facultyPhone: "9776294542",
        studentCoordinators: ["Pratikshya Das", "Pritam Priyadarshi", "Roshan Ayush", "Waris Raj"],
        contacts: ["7978466012", "9672225267", "7858288329", "9835400188"],
        year: "2nd"
    },
    {
        event: "Rangstav - The Art of Colors",
        faculty: "Prof.Anjali Sahu",
        facultyPhone: "9776294542",
        studentCoordinators: ["Rishi kumar Sahoo", "Sania Mishra", "Ankita Jena", "Kanishka kumari"],
        contacts: ["8984801480", "7698529919", "6371096234", "8107220500"],
        year: "2nd"
    },
    {
        event: "Esports",
        faculty: "Prof Himanshu Bhusan Mohapatra",
        facultyPhone: "7978552954",
        studentCoordinators: ["Sushil Parida", "Paresh kumar Jena", "Matru prasad Moharty", "Rajnalan Samal", "Abhisek Dash", "Bimit Ranjan Nayak"],
        contacts: ["7894547073", "9302391275", "9337734500", "8760076329", "8248890306", "7250943171"],
        year: "3rd"
    },
    {
        event: "Flavour Fiesta",
        faculty: "prof Dibyalisha Rath",
        facultyPhone: "7894196460",
        studentCoordinators: ["Niharika Sahu", "Aanksha Panda", "Sunil Pradhan", "Swetapadma Sahoo"],
        contacts: ["9500938704", "7605985406", "7602986014", "8148025315"],
        year: "2nd"
    },
    {
        event: "Treasure Hunt",
        faculty: "Prof. Ambika Prasad Hota",
        facultyPhone: "9439687716",
        studentCoordinators: ["Biswaprakash Rout", "Suvam Khatoi", "krishna Prasad Dhal", "Ashutosh Jena", "Amit Karan", "Swayamprabha Padhi"],
        contacts: ["8984676600", "9346461420", "8260736828", "7847028928", "6207086905", "8144023632"],
        year: "2nd"
    },
    {
        event: "Pot Design",
        faculty: "Prof.Smruti Das",
        facultyPhone: "8800853174",
        studentCoordinators: ["Swatisudia Routray", "Juel Jaslan Sahoo", "Aparajita Nanda", "Situnarayan Dash"],
        contacts: ["8260116073", "8260818040", "9693251228", "7894894171"],
        year: "2nd"
    },
    {
        event: "Laugh Riot",
        faculty: "Prof. Debarand Sahu",
        facultyPhone: "7978773214",
        studentCoordinators: ["Rishi kumar Bagria", "Soumyajit Biswal", "Sania Mishra", "Soepak Roy"],
        contacts: ["8349598746", "7751990539", "7894529919", "9832762097"],
        year: "1st"
    },
    {
        event: "Talent Spotlight",
        faculty: "Prof. Bishupada Roul",
        facultyPhone: "9776535516",
        studentCoordinators: ["T Priyanka Patra", "Tejawsi Raj", "Archita Sahoo", "Priti Pragyan Biswal"],
        contacts: ["9872421482", "9263378668", "7335093978", "9771124371"],
        year: "2nd"
    },
    {
        event: "Photography",
        faculty: "Prof. Satyapirya Swain",
        facultyPhone: "7684850953",
        studentCoordinators: ["Om Prakash Parida", "Sujan Das", "Amar Aryan", "Sambit Nayak"],
        contacts: ["7008997487", "8926097825", "9777136478", "9861250898"],
        year: "2nd"
    },
    {
        event: "Mini Movie Fest",
        faculty: "prof. Jyoti Panda",
        facultyPhone: "7735025428",
        studentCoordinators: ["Smruti Ranjan Pradhan", "Snikey Dutta", "Subham Pradhan", "Smitanajali Nayak", "Krish Nayak"],
        contacts: ["9917947198", "9279652490", "9137963411", "8658053113", "9124030027"],
        year: "2nd"
    },
    {
        event: "Eat and Run",
        faculty: "Prof Soumik Mohapatra",
        facultyPhone: "7854837875",
        studentCoordinators: ["Amrusha Priyadarsini", "Akshita Priyadarsini", "Subhaxmvi Duit", "Sneha Panda", "Bhawani Sahoo"],
        contacts: ["8018092322", "8018200088", "9090177825", "8926333277", "9693809702"],
        year: "3rd"
    },
    {
        event: "Up Sync Battle",
        faculty: "Prof.Saraswati Devi",
        facultyPhone: "9861318329",
        studentCoordinators: ["Rupak Kumar Bera", "Jyoteemayee Barik", "Priyam Priyadarshi", "Roshan Kumar Panda"],
        contacts: ["9229919200", "9348771986", "9692225267", "8763252728"],
        year: "2nd"
    },
    {
        event: "Marketing Madness",
        faculty: "Prof. Jyoti Panda",
        facultyPhone: "7735025428",
        studentCoordinators: ["Abhijit Sahoo", "Abhijit Sahu", "Barisha Priyadarshi Panda", "Nirvaa Nayak"],
        contacts: ["8249083223", "7848983424", "9777741077", "8260051182"],
        year: "2nd"
    },
    {
        event: "Guest What!",
        faculty: "Prof. Smruti Das",
        facultyPhone: "8800853174",
        studentCoordinators: ["Sudigraxnt Panda", "Barsha Barenya Nandi", "Sambartha Jayasingh", "Priya Shah", "Siddharth Senili"],
        contacts: ["7735226841", "7439907553", "9610134238", "7936430184"],
        year: "2nd"
    }
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black px-4 py-10">
            <div className="w-full max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-center font-serif mb-8 text-orange-400">
                        Event Coordinators
                    </h1>

                    {/* Faculty Main Coordinators */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        {/* Faculty 1 */}
                        <div className="p-4 rounded-xl border border-orange-500 bg-black/60">
                            <h2 className="text-xl font-semibold mb-2 text-orange-300">
                                Prof. Himanshu Bhusan Mohapatra
                            </h2>
                            <h3 className="text-orange-300">
                                himansu.mohapatra@gec.edu.in
                            </h3>
                            <p className="text-orange-200">📞 +91 7978552954</p>
                        </div>

                        {/* Faculty 2 */}
                        <div className="p-4 rounded-xl border border-orange-500 bg-black/60">
                            <h2 className="text-xl font-semibold mb-2 text-orange-300">
                                Prof. Ambika Prasad Hota
                            </h2>
                            <h3 className="text-orange-300">
                                ambika.hota@gec.edu.in
                            </h3>
                            <p className="text-orange-200">📞 +91 9439687716</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="p-4 rounded-xl border border-orange-500 bg-orange-500 text-black font-semibold text-center mb-10">
                        Badaraghunathpur, PO:Madanpur, Near Janla Bhubaneswar, Orissa-752054
                    </div>

                    <h2 className="text-3xl font-bold text-orange-400 mb-6 font-serif">Event Details</h2>
                </div>

                {/* Events Table */}
                <div className="bg-gradient-to-br from-orange-600/20 to-black rounded-2xl shadow-2xl border border-orange-500 overflow-hidden">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-orange-600/40">
                                <TableRow className="border-orange-500">
                                    <TableHead className="text-orange-300 font-bold">Event</TableHead>
                                    <TableHead className="text-orange-300 font-bold">Faculty Coordinator</TableHead>
                                    <TableHead className="text-orange-300 font-bold">Phone</TableHead>
                                    <TableHead className="text-orange-300 font-bold">Student Coordinators</TableHead>
                                    <TableHead className="text-orange-300 font-bold">Contact Numbers</TableHead>
                                    <TableHead className="text-orange-300 font-bold">Year</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {eventCoordinators.map((event, index) => (
                                    <TableRow key={index} className="border-orange-500/30 hover:bg-orange-600/10">
                                        <TableCell className="font-semibold text-orange-300">{event.event}</TableCell>
                                        <TableCell className="text-orange-200">{event.faculty}</TableCell>
                                        <TableCell className="text-orange-200">{event.facultyPhone}</TableCell>
                                        <TableCell className="text-orange-200">
                                            <div className="space-y-1">
                                                {event.studentCoordinators.map((coordinator, idx) => (
                                                    <div key={idx}>{coordinator}</div>
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-orange-200">
                                            <div className="space-y-1">
                                                {event.contacts.map((contact, idx) => (
                                                    <div key={idx}>{contact}</div>
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-orange-200">{event.year}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}