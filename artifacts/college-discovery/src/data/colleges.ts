export interface College {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
  established: number;
  type: "Government" | "Private" | "Deemed";
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
  }
];
