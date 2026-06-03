export interface College {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
  established: number;
  type: "Government" | "Private" | "Deemed";
  rank: number;
  stream: "Engineering" | "MBA" | "Medical" | "Law" | "Design" | "Science";
  infrastructure: {
    library: boolean;
    hostel: boolean;
    sports: boolean;
    labs: number;
    canteen: boolean;
  };
  courses: string[];
  placements: {
    averagePackage: number;
    highestPackage: number;
    topRecruiters: string[];
    placementRate: number;
  };
  overview: string;
  reviews: { author: string; rating: number; comment: string; year: number }[];
}

export const colleges: College[] = [
  {
    id: 1,
    name: "Jawaharlal Nehru Technological University (JNTUA)",
    location: "Anantapur, Andhra Pradesh",
    fees: 55000,
    rating: 4.2,
    established: 1946,
    type: "Government",
    rank: 85,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 25, canteen: true },
    courses: ["Computer Science", "Electronics & Communication", "Mechanical", "Civil", "Electrical"],
    placements: {
      averagePackage: 4.5,
      highestPackage: 15.0,
      topRecruiters: ["TCS", "Wipro", "Infosys", "Cognizant", "Tech Mahindra"],
      placementRate: 85
    },
    overview: "JNTU Anantapur is one of the premier technical universities in Andhra Pradesh, offering quality engineering education with strong industry ties. It has a sprawling campus and highly experienced faculty.",
    reviews: [
      { author: "Kiran Kumar", rating: 4, comment: "Great faculty and vast campus. Placements are decent for CS and IT branches.", year: 2023 },
      { author: "Priya Reddy", rating: 5, comment: "Government college tag really helps. Very low fee and good exposure.", year: 2022 }
    ]
  },
  {
    id: 2,
    name: "Sri Venkateswara College of Engineering and Technology (SVCET)",
    location: "Chittoor, Andhra Pradesh",
    fees: 85000,
    rating: 4.0,
    established: 1998,
    type: "Private",
    rank: 150,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 20, canteen: true },
    courses: ["Computer Science", "Information Technology", "Artificial Intelligence", "Data Science"],
    placements: {
      averagePackage: 4.0,
      highestPackage: 12.5,
      topRecruiters: ["TCS", "HCL", "Wipro", "L&T"],
      placementRate: 80
    },
    overview: "SVCET is an autonomous institution known for its modern infrastructure and updated curriculum. It strongly emphasizes practical learning and project-based education.",
    reviews: [
      { author: "Rahul V", rating: 4, comment: "Good infrastructure and labs. Faculty are supportive.", year: 2023 },
      { author: "Sowmya S", rating: 3, comment: "Placements could be better for core branches, but CS is good.", year: 2021 }
    ]
  },
  {
    id: 3,
    name: "VIT-AP University",
    location: "Amaravati, Andhra Pradesh",
    fees: 198000,
    rating: 4.5,
    established: 2017,
    type: "Private",
    rank: 64,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 40, canteen: true },
    courses: ["Computer Science", "Software Engineering", "AI & ML", "Robotics", "Cyber Security"],
    placements: {
      averagePackage: 7.2,
      highestPackage: 63.0,
      topRecruiters: ["Microsoft", "Amazon", "Intel", "Deloitte", "Oracle"],
      placementRate: 95
    },
    overview: "Part of the prestigious VIT group, VIT-AP offers a truly global learning experience in the capital region of Andhra Pradesh. The FFCS (Fully Flexible Credit System) is a major highlight.",
    reviews: [
      { author: "Ananya M", rating: 5, comment: "Excellent coding culture and top-notch placements. The campus life is vibrant.", year: 2024 },
      { author: "Vikram R", rating: 4, comment: "Fees are a bit high, but the ROI is totally worth it given the placement opportunities.", year: 2023 }
    ]
  },
  {
    id: 4,
    name: "Amrita Vishwa Vidyapeetham",
    location: "Amaravati, Andhra Pradesh",
    fees: 250000,
    rating: 4.6,
    established: 2018,
    type: "Deemed",
    rank: 19,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 35, canteen: true },
    courses: ["Computer Science", "AI & Data Science", "Electronics & Communication", "Computer & Communication Engineering"],
    placements: {
      averagePackage: 8.5,
      highestPackage: 56.0,
      topRecruiters: ["Cisco", "TCS", "Cognizant", "Arcesium", "Bosch"],
      placementRate: 93
    },
    overview: "Amrita Amaravati campus brings the excellence of Amrita University to Andhra Pradesh. It is known for value-based education and research-driven curriculum.",
    reviews: [
      { author: "Deepak S", rating: 5, comment: "Strict discipline but amazing academic environment. Research opportunities are great.", year: 2023 }
    ]
  },
  {
    id: 5,
    name: "G. Narayanamma Institute of Technology and Science (GNITS)",
    location: "Hyderabad, Telangana",
    fees: 122000,
    rating: 4.4,
    established: 1997,
    type: "Private",
    rank: 110,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 30, canteen: true },
    courses: ["Computer Science", "Information Technology", "Electronics & Telematics", "Electrical"],
    placements: {
      averagePackage: 6.0,
      highestPackage: 44.0,
      topRecruiters: ["JP Morgan", "Deloitte", "Accenture", "Infosys"],
      placementRate: 90
    },
    overview: "A premier engineering college exclusively for women in Telangana. GNITS has an outstanding track record of placements and women empowerment in technology.",
    reviews: [
      { author: "Sneha G", rating: 5, comment: "Best women's college in TS. Safety is great, and placements are phenomenal.", year: 2024 }
    ]
  },
  {
    id: 6,
    name: "Chaitanya Bharathi Institute of Technology (CBIT)",
    location: "Hyderabad, Telangana",
    fees: 140000,
    rating: 4.5,
    established: 1979,
    type: "Private",
    rank: 55,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 45, canteen: true },
    courses: ["Computer Science", "Artificial Intelligence", "Mechanical", "Civil", "Chemical"],
    placements: {
      averagePackage: 7.5,
      highestPackage: 43.0,
      topRecruiters: ["ServiceNow", "Oracle", "Infosys", "Wipro", "TCS"],
      placementRate: 92
    },
    overview: "CBIT is one of the oldest and most reputed private engineering colleges in Telangana. It boasts a strong alumni network and excellent academic rigor.",
    reviews: [
      { author: "Karthik P", rating: 4, comment: "Legacy college with amazing faculty. Placements are assured if you maintain a good GPA.", year: 2023 }
    ]
  },
  {
    id: 7,
    name: "VNR Vignana Jyothi Institute of Engineering and Technology",
    location: "Hyderabad, Telangana",
    fees: 135000,
    rating: 4.7,
    established: 1995,
    type: "Private",
    rank: 82,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 35, canteen: true },
    courses: ["Computer Science", "Data Science", "Cyber Security", "Automobile", "Electronics"],
    placements: {
      averagePackage: 8.0,
      highestPackage: 97.0,
      topRecruiters: ["Amazon", "TCS", "Cognizant", "Capgemini", "Hyundai"],
      placementRate: 94
    },
    overview: "VNR VJIET is renowned for its technical fests, active student clubs, and staggering placement records. It focuses heavily on holistic student development.",
    reviews: [
      { author: "Rishab M", rating: 5, comment: "Campus life is the best here. TnP cell is highly active and brings top product-based companies.", year: 2024 },
      { author: "Harika B", rating: 5, comment: "Excellent focus on emerging tech like AI and Cyber Security.", year: 2023 }
    ]
  },
  {
    id: 8,
    name: "SRM University, AP",
    location: "Amaravati, Andhra Pradesh",
    fees: 250000,
    rating: 4.4,
    established: 2017,
    type: "Private",
    rank: 70,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 40, canteen: true },
    courses: ["Computer Science", "Mechanical", "Civil", "Electrical", "Bioinformatics"],
    placements: {
      averagePackage: 7.0,
      highestPackage: 50.0,
      topRecruiters: ["Google", "TCS", "Barclays", "Bank of America"],
      placementRate: 91
    },
    overview: "SRM AP offers a multi-disciplinary approach to learning with state-of-the-art infrastructure. It has active collaborations with international universities like MIT and UC Berkeley.",
    reviews: [
      { author: "Nikhil T", rating: 4, comment: "Good global exposure. Labs are very modern.", year: 2022 }
    ]
  },
  {
    id: 9,
    name: "Osmania University College of Engineering (OUCE)",
    location: "Hyderabad, Telangana",
    fees: 50000,
    rating: 4.3,
    established: 1929,
    type: "Government",
    rank: 60,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 50, canteen: true },
    courses: ["Computer Science", "Electronics & Communication", "Mechanical", "Civil", "Biomedical"],
    placements: {
      averagePackage: 6.5,
      highestPackage: 24.0,
      topRecruiters: ["Maruti Suzuki", "TCS", "Wipro", "MathWorks"],
      placementRate: 82
    },
    overview: "One of the oldest engineering colleges in the country. OUCE is highly respected for its legacy, extremely affordable fees, and experienced faculty members.",
    reviews: [
      { author: "Abdul K", rating: 5, comment: "Historic campus. The faculty here actually authored many textbooks we use.", year: 2023 },
      { author: "Meghana L", rating: 4, comment: "Placements for CS/IT are good, core branches depend more on GATE/IES prep.", year: 2021 }
    ]
  },
  {
    id: 10,
    name: "Gayatri Vidya Parishad College of Engineering (GVPCE)",
    location: "Visakhapatnam, Andhra Pradesh",
    fees: 105000,
    rating: 4.1,
    established: 1996,
    type: "Private",
    rank: 95,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 28, canteen: true },
    courses: ["Computer Science", "Chemical", "Mechanical", "Information Technology"],
    placements: {
      averagePackage: 4.8,
      highestPackage: 31.0,
      topRecruiters: ["TCS", "Infosys", "Wipro", "L&T", "Tech Mahindra"],
      placementRate: 88
    },
    overview: "Located in the beautiful city of Vizag, GVPCE is highly rated in the coastal Andhra region. It is known for strong academics and disciplined environment.",
    reviews: [
      { author: "Srinivas K", rating: 4, comment: "Academics are very strict but it pays off during placements.", year: 2023 }
    ]
  },
  {
    id: 11,
    name: "Indian Institute of Technology (IIT) Bombay",
    location: "Mumbai, Maharashtra",
    fees: 220000,
    rating: 4.9,
    established: 1958,
    type: "Government",
    rank: 3,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 150, canteen: true },
    courses: ["Computer Science", "Electrical", "Mechanical", "Civil", "Aerospace"],
    placements: {
      averagePackage: 23.0,
      highestPackage: 150.0,
      topRecruiters: ["Google", "Microsoft", "Jane Street", "Tower Research"],
      placementRate: 98
    },
    overview: "IIT Bombay is a globally recognized institution for engineering education and research.",
    reviews: [
      { author: "Aarav", rating: 5, comment: "Top notch peers and faculty.", year: 2023 }
    ]
  },
  {
    id: 12,
    name: "Indian Institute of Management (IIM) Ahmedabad",
    location: "Ahmedabad, Gujarat",
    fees: 2500000,
    rating: 5.0,
    established: 1961,
    type: "Government",
    rank: 1,
    stream: "MBA",
    infrastructure: { library: true, hostel: true, sports: true, labs: 10, canteen: true },
    courses: ["PGP", "PGP-FABM", "ePGP"],
    placements: {
      averagePackage: 33.0,
      highestPackage: 115.0,
      topRecruiters: ["McKinsey", "BCG", "Bain", "Goldman Sachs"],
      placementRate: 100
    },
    overview: "IIM Ahmedabad is India's premier management institute.",
    reviews: [
      { author: "Rohan", rating: 5, comment: "Transformational experience.", year: 2024 }
    ]
  },
  {
    id: 13,
    name: "All India Institute of Medical Sciences (AIIMS) Delhi",
    location: "New Delhi, Delhi",
    fees: 6000,
    rating: 4.9,
    established: 1956,
    type: "Government",
    rank: 1,
    stream: "Medical",
    infrastructure: { library: true, hostel: true, sports: true, labs: 80, canteen: true },
    courses: ["MBBS", "BSc Nursing", "MD", "MS"],
    placements: {
      averagePackage: 12.0,
      highestPackage: 24.0,
      topRecruiters: ["AIIMS", "Apollo", "Max", "Fortis"],
      placementRate: 100
    },
    overview: "AIIMS Delhi is a medical hospital and public medical research university.",
    reviews: [
      { author: "Priya", rating: 5, comment: "Best medical college in India.", year: 2023 }
    ]
  },
  {
    id: 14,
    name: "National Law University (NLU) Delhi",
    location: "New Delhi, Delhi",
    fees: 160000,
    rating: 4.8,
    established: 2008,
    type: "Government",
    rank: 2,
    stream: "Law",
    infrastructure: { library: true, hostel: true, sports: true, labs: 5, canteen: true },
    courses: ["BA LLB", "LLM", "Ph.D"],
    placements: {
      averagePackage: 15.0,
      highestPackage: 45.0,
      topRecruiters: ["Cyril Amarchand Mangaldas", "Khaitan & Co", "Trilegal"],
      placementRate: 95
    },
    overview: "NLU Delhi is one of the elite national law schools in India.",
    reviews: [
      { author: "Neha", rating: 5, comment: "Excellent moot court culture.", year: 2022 }
    ]
  },
  {
    id: 15,
    name: "National Institute of Design (NID) Ahmedabad",
    location: "Ahmedabad, Gujarat",
    fees: 300000,
    rating: 4.9,
    established: 1961,
    type: "Government",
    rank: 1,
    stream: "Design",
    infrastructure: { library: true, hostel: true, sports: true, labs: 30, canteen: true },
    courses: ["B.Des", "M.Des"],
    placements: {
      averagePackage: 14.0,
      highestPackage: 50.0,
      topRecruiters: ["Microsoft", "Wipro", "TCS", "Infosys"],
      placementRate: 95
    },
    overview: "NID Ahmedabad is internationally acclaimed as one of the finest educational and research institutions for Industrial, Communication, Textile and IT Integrated Design.",
    reviews: [
      { author: "Kabir", rating: 5, comment: "The design pedagogy is brilliant.", year: 2023 }
    ]
  },
  {
    id: 16,
    name: "Indian Institute of Technology (IIT) Delhi",
    location: "New Delhi, Delhi",
    fees: 220000,
    rating: 4.8,
    established: 1961,
    type: "Government",
    rank: 2,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 140, canteen: true },
    courses: ["Computer Science", "Mathematics & Computing", "Electrical", "Mechanical"],
    placements: {
      averagePackage: 21.0,
      highestPackage: 140.0,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Optiver"],
      placementRate: 97
    },
    overview: "IIT Delhi offers world-class education and research opportunities in engineering and technology.",
    reviews: [
      { author: "Sahil", rating: 5, comment: "Exceptional environment for tech enthusiasts.", year: 2024 }
    ]
  },
  {
    id: 17,
    name: "National Institute of Technology (NIT) Trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    fees: 150000,
    rating: 4.7,
    established: 1964,
    type: "Government",
    rank: 8,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 80, canteen: true },
    courses: ["Computer Science", "Electronics & Communication", "Electrical", "Mechanical"],
    placements: {
      averagePackage: 14.0,
      highestPackage: 60.0,
      topRecruiters: ["Google", "Microsoft", "TCS", "L&T"],
      placementRate: 92
    },
    overview: "NIT Trichy is one of the best NITs in India with a strong alumni base.",
    reviews: [
      { author: "Manoj", rating: 4, comment: "Top ranking NIT, great placements.", year: 2023 }
    ]
  },
  {
    id: 18,
    name: "Birla Institute of Technology and Science (BITS) Pilani",
    location: "Pilani, Rajasthan",
    fees: 500000,
    rating: 4.8,
    established: 1964,
    type: "Private",
    rank: 15,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 100, canteen: true },
    courses: ["Computer Science", "Electrical", "Mechanical", "Chemical"],
    placements: {
      averagePackage: 18.0,
      highestPackage: 80.0,
      topRecruiters: ["Amazon", "Google", "Oracle", "Goldman Sachs"],
      placementRate: 96
    },
    overview: "BITS Pilani is a premier private engineering college with a no-attendance policy and a strong startup culture.",
    reviews: [
      { author: "Aditi", rating: 5, comment: "The startup culture is unmatched.", year: 2022 }
    ]
  },
  {
    id: 19,
    name: "Symbiosis Law School",
    location: "Pune, Maharashtra",
    fees: 400000,
    rating: 4.5,
    established: 1977,
    type: "Private",
    rank: 5,
    stream: "Law",
    infrastructure: { library: true, hostel: true, sports: true, labs: 10, canteen: true },
    courses: ["BA LLB", "BBA LLB", "LLM"],
    placements: {
      averagePackage: 10.0,
      highestPackage: 30.0,
      topRecruiters: ["AZB & Partners", "Trilegal", "Shardul Amarchand Mangaldas"],
      placementRate: 85
    },
    overview: "A prestigious law school offering comprehensive legal education.",
    reviews: [
      { author: "Karan", rating: 4, comment: "Great faculty and mooting culture.", year: 2023 }
    ]
  },
  {
    id: 20,
    name: "Manipal College of Medical Sciences",
    location: "Manipal, Karnataka",
    fees: 1500000,
    rating: 4.6,
    established: 1953,
    type: "Private",
    rank: 12,
    stream: "Medical",
    infrastructure: { library: true, hostel: true, sports: true, labs: 60, canteen: true },
    courses: ["MBBS", "MD", "MS"],
    placements: {
      averagePackage: 10.0,
      highestPackage: 20.0,
      topRecruiters: ["Manipal Hospitals", "Apollo", "Fortis"],
      placementRate: 98
    },
    overview: "Manipal offers top-notch medical facilities and education.",
    reviews: [
      { author: "Anjali", rating: 5, comment: "Excellent clinical exposure.", year: 2024 }
    ]
  },
  {
    id: 21,
    name: "SP Jain Institute of Management and Research (SPJIMR)",
    location: "Mumbai, Maharashtra",
    fees: 2000000,
    rating: 4.7,
    established: 1981,
    type: "Private",
    rank: 8,
    stream: "MBA",
    infrastructure: { library: true, hostel: true, sports: true, labs: 15, canteen: true },
    courses: ["PGDM", "PGPM", "FMB"],
    placements: {
      averagePackage: 28.0,
      highestPackage: 70.0,
      topRecruiters: ["Amazon", "Bain", "McKinsey", "HUL"],
      placementRate: 100
    },
    overview: "SPJIMR is one of the top business schools in Mumbai with a unique value-based approach.",
    reviews: [
      { author: "Vikram", rating: 5, comment: "Great peer group and placements.", year: 2023 }
    ]
  },
  {
    id: 22,
    name: "Indian Institute of Technology (IIT) Madras",
    location: "Chennai, Tamil Nadu",
    fees: 210000,
    rating: 4.9,
    established: 1959,
    type: "Government",
    rank: 1,
    stream: "Engineering",
    infrastructure: { library: true, hostel: true, sports: true, labs: 160, canteen: true },
    courses: ["Computer Science", "Aerospace", "Electrical", "Mechanical"],
    placements: {
      averagePackage: 22.0,
      highestPackage: 130.0,
      topRecruiters: ["Microsoft", "Google", "Texas Instruments", "Apple"],
      placementRate: 96
    },
    overview: "IIT Madras consistently ranks as the top engineering institute in India.",
    reviews: [
      { author: "Siddharth", rating: 5, comment: "Incredible campus inside a national park.", year: 2024 }
    ]
  },
  {
    id: 23,
    name: "Christian Medical College (CMC) Vellore",
    location: "Vellore, Tamil Nadu",
    fees: 50000,
    rating: 4.8,
    established: 1900,
    type: "Private",
    rank: 3,
    stream: "Medical",
    infrastructure: { library: true, hostel: true, sports: true, labs: 70, canteen: true },
    courses: ["MBBS", "BSc Nursing", "MD", "MS"],
    placements: {
      averagePackage: 10.0,
      highestPackage: 18.0,
      topRecruiters: ["CMC Vellore", "Apollo", "Max Healthcare"],
      placementRate: 100
    },
    overview: "CMC Vellore is highly regarded for its commitment to service and medical excellence.",
    reviews: [
      { author: "Rachel", rating: 5, comment: "Service-oriented ethos is inspiring.", year: 2023 }
    ]
  },
  {
    id: 24,
    name: "National Law School of India University (NLSIU)",
    location: "Bengaluru, Karnataka",
    fees: 300000,
    rating: 4.9,
    established: 1986,
    type: "Government",
    rank: 1,
    stream: "Law",
    infrastructure: { library: true, hostel: true, sports: true, labs: 5, canteen: true },
    courses: ["BA LLB", "LLM", "MPP"],
    placements: {
      averagePackage: 16.0,
      highestPackage: 50.0,
      topRecruiters: ["Cyril Amarchand Mangaldas", "Khaitan & Co", "L&L Partners"],
      placementRate: 100
    },
    overview: "NLSIU is the premier law university in India.",
    reviews: [
      { author: "Amit", rating: 5, comment: "The Oxford of the East for Law.", year: 2024 }
    ]
  },
  {
    id: 25,
    name: "Indian Institute of Management (IIM) Bangalore",
    location: "Bengaluru, Karnataka",
    fees: 2400000,
    rating: 4.9,
    established: 1973,
    type: "Government",
    rank: 2,
    stream: "MBA",
    infrastructure: { library: true, hostel: true, sports: true, labs: 12, canteen: true },
    courses: ["PGP", "EPGP", "PGPPM"],
    placements: {
      averagePackage: 31.0,
      highestPackage: 100.0,
      topRecruiters: ["BCG", "Bain", "McKinsey", "Goldman Sachs"],
      placementRate: 100
    },
    overview: "IIM Bangalore is known for its serene campus and excellent management programs.",
    reviews: [
      { author: "Divya", rating: 5, comment: "Amazing faculty and network.", year: 2023 }
    ]
  }
];
