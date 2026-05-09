export const businessInfo = {
  name: "Goodwill GATE Academy",
  tagline: "Since 2007 - Engineering Excellence",
  description: "Nagpur's premier institute for GATE coaching, engineering classes, polytechnic preparation, and computer institute programs. 17+ years of excellence with 3000+ successful students.",
  website: "www.goodwillgateacademy.co.in",
  phone: "+91 8237812411",
  whatsapp: "918237812411",
  email: "goodwillacademy2007@gmail.com",
  addresses: [
    { label: "Main Branch", address: "Opposite Priyadarshini Girls Hostel, Hingna T-Point, Nagpur - 440016" },
    { label: "Yashoda Nagar", address: "BUS STOP, Hingna Rd, Yashoda Nagar, Nagpur - 440022" }
  ],
  hours: {
    weekday: { open: "7:00 AM", close: "9:00 PM" },
    weekend: { open: "8:00 AM", close: "6:00 PM" }
  },
  social: {
    facebook: "https://www.facebook.com/p/Goodwill-Classes-100054337548980/",
    instagram: "https://www.instagram.com/goodwill_academyy/"
  }
};

export const courses = [
  {
    id: "gate",
    title: "GATE Coaching",
    subtitle: "PSU & M.Tech Preparation",
    description: "Comprehensive GATE preparation with IIT-expert faculty, previous year papers analysis, test series, and PSU interview guidance. 85% success rate in GATE exam.",
    duration: "6-12 Months",
    mode: "Classroom + Online",
    highlights: ["IIT Expert Faculty", "Test Series Included", "Study Material", "PSU Guidance", "Interview Training"]
  },
  {
    id: "engg",
    title: "Engineering Classes",
    subtitle: "Diploma to Degree Bridge",
    description: "Bridge courses and coaching for engineering students targeting better career opportunities. Complete support from diploma to degree with placement assistance.",
    duration: "6-24 Months",
    mode: "Classroom",
    highlights: ["Expert Faculty", "Practical Approach", "Career Counseling", "Placement Support", "Industry Projects"]
  },
  {
    id: "poly",
    title: "Polytechnic Coaching",
    subtitle: "Entrance Exam Prep",
    description: "Specialized coaching for polytechnic entrance exams and diploma programs. High success rate in Maharashtra Polytechnic entrance exam (ME/PCE).",
    duration: "3-6 Months",
    mode: "Classroom",
    highlights: ["Entrance Focus", "Daily Practice", "Mock Tests", "Expert Guidance", "Previous Year Papers"]
  },
  {
    id: "computer",
    title: "Computer Institute",
    subtitle: "IT Skills & Certification",
    description: "Modern computer training with industry-relevant courses and certifications. Job-oriented programs in Web Development, Programming, Office Applications, and more.",
    duration: "3-12 Months",
    mode: "Classroom + Practical",
    highlights: ["Industry Courses", "Certification", "Practical Training", "Job Support", "Resume Building"]
  }
];

export const stats = [
  { value: 17, suffix: "+", label: "Years Experience" },
  { value: 3000, suffix: "+", label: "Students Trained" },
  { value: 85, suffix: "%", label: "Success Rate" },
  { value: 15, suffix: "+", label: "Expert Faculty" }
];

export const testimonials = [
  {
    name: "Rahul Thakre",
    role: "GATE Qualified - PSU Selection",
    quote: "Goodwill GATE Academy's structured approach helped me crack GATE with AIR 1200 and join ONGC as a PSU engineer. Best coaching in Nagpur for GATE!"
  },
  {
    name: "Pooja Meshram",
    role: "Computer Institute - Job Placement",
    quote: "The computer institute training helped me secure a great job as a Web Developer. The practical approach and industry-relevant curriculum made the difference."
  },
  {
    name: "Suresh Wagh",
    role: "Polytechnic Entrance - Selected",
    quote: "Excellent coaching for polytechnic entrance. Faculty is very supportive and the study material is comprehensive. Cleared the exam in first attempt!"
  },
  {
    name: "Kavita Deshmukh",
    role: "Engineering Student - COEP",
    quote: "The bridge course helped me transition from diploma to degree seamlessly. Now I'm studying at COEP thanks to Goodwill GATE Academy's guidance."
  }
];

export const whyChooseUs = [
  { label: "17+ Years Experience", description: "Nagpur's most trusted engineering coaching institute" },
  { label: "85% Success Rate", description: "Consistent results in GATE and engineering exams" },
  { label: "IIT Expert Faculty", description: "Faculty from IITs and premier engineering colleges" },
  { label: "Complete Programs", description: "GATE, Engineering, Polytechnic under one roof" },
  { label: "Computer Institute", description: "Modern IT skills with certification" },
  { label: "Placement Support", description: "Career guidance and job assistance" }
];