// ============================================
// SHIVA DRIVING SCHOOL - SITE CONFIGURATION
// Edit these values to update the website
// ============================================

const SITE_CONFIG = {

  // ---- CONTACT DETAILS ----
  phone: "07548899187",
  phoneDisplay: "075488 99187",
  email: "ShivaDriving@gmail.com",

  // ---- WHATSAPP ----
  // Country code WITHOUT + sign, followed by number (no spaces)
  whatsappNumber: "917548899187",
  whatsappDefaultMessage: "Hi, I want to know about driving classes at Shiva Driving School",

  // ---- ADDRESS ----
  addressLine1: "Plot No 267, Above Blue and White Saloon",
  addressLine2: "Sachidananda Puram, Thazhambur",
  addressLine3: "Chennai, Tamil Nadu 600130",
  pincode: "600130",

  // ---- WORKING HOURS ----
  workingHours: "Monday - Sunday: 6:00 AM - 8:00 PM",
  workingHoursNote: "Open all 7 days!",

  // ---- COURSE PRICES ----
  // Update these when prices change
  prices: {
    twoWheelerScooty:   "3,500",   // Scooty training for women
    fourWheelerManual:   "7,000",   // Manual car
    fourWheelerAutomatic:"8,000",   // Automatic car
    comboPackage:        "10,000",  // Scooty + Car combo
  },

  // ---- COURSE SESSIONS (number of practical classes) ----
  sessions: {
    twoWheelerScooty:    "12",
    fourWheelerManual:   "20",
    fourWheelerAutomatic:"18",
    comboPackage:        "30",
  },

  // ---- STATS ----
  studentsCount: "300+",
  googleRating:  "4.9",
  passRate:      "98%",
  yearsExperience: "5+",

  // ---- GOOGLE MAPS ----
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5!2d80.2095397!3d12.8481788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b880b58f4fd%3A0xcc43f98292131eda!2sShiva%20Driving%20School!5e0!3m2!1sen!2sin!4v1",
  mapsDirectionsUrl: "https://maps.app.goo.gl/bdGHXtpwj19V6XEZA",

  // ---- TEACHER PROFILES ----
  teachers: [
    {
      name: "Dinesh",
      role: "Senior Driving Instructor",
      experience: "8+ years",
      image: "teacher-dinesh.jpg",  // Replace with actual image file
      description: "Dinesh is known for his calm, patient teaching style that puts even the most nervous beginners at ease. Specializing in four-wheeler training, he has helped over 200 students get their licenses on the first attempt. Students consistently praise his clear instructions during highway and city driving sessions.",
    },
    {
      name: "Mukesh",
      role: "Driving Instructor & RTO Specialist",
      experience: "6+ years",
      image: "teacher-mukesh.jpg",  // Replace with actual image file
      description: "Mukesh brings energy and encouragement to every class. Expert in both two-wheeler and four-wheeler training, he is also the go-to person for RTO test preparation. His structured approach to teaching — from basics to confident road navigation — has earned him praise from students of all ages.",
    }
  ],

  // ---- SEO ----
  siteUrl: "https://shivadrivingschool.in",
  siteName: "Shiva Driving School",
};
