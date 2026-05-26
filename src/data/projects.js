const projects = [
  {
  id: "online-medicine-delivery-system",
  title: "Online Medicine Delivery System",
  description: "Full-featured online medicine delivery system with admin panel based on CRUD operation.",
  longDescription: `Online Medicine Delivery System is a fully scratch-built web application developed without any backend framework — powered entirely by core PHP and MySQL, hosted on XAMPP for local environment. The frontend is built with pure HTML and CSS, keeping it lightweight and fast. It includes a complete user authentication system and a powerful admin panel with full CRUD operations for managing medicines, orders, users, and more.

The admin panel features a real-time dashboard displaying total users, orders, prescriptions, and medicines at a glance. Admins can manage recent orders with status tracking (Confirmed, Cancelled), handle doctor appointments, manage prescriptions uploaded by users, add/remove medicines with pricing, and respond to contact messages — all from a clean and organized interface. Screenshots of the admin panel, database structure, and frontend UI are included below.`,
  tags: ["PHP", "MySQL", "HTML", "CSS"],
  category: ["BCA", "BIM"],
  price: "Rs. 2,000",
  screenshots: ["/screenshots/Homepage-easemeds.png",
    "/screenshots/adminpane-easemeds.png",
    "/screenshots/backend-easemeds.png"
  ],
},
  {
    id: "library-management-system",
    title: "Library Management System",
    description: "Full-featured library system with book tracking, member management, and fine calculation.",
    longDescription: "A comprehensive library management solution that handles book cataloging, member registration, borrowing/returning, and automatic fine calculation built with PHP & MySQL.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    category: "BCA",
    screenshots: [],
  },
  {
    id: "online-voting-system",
    title: "Online Voting System",
    description: "Secure e-voting platform with OTP verification, real-time results, and admin panel.",
    longDescription: "A secure digital voting platform featuring OTP-based authentication, real-time result display, and a comprehensive admin panel for managing elections built with React & Node.js.",
    tags: ["React", "Node.js", "MongoDB"],
    category: "BIT",
    screenshots: [],
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    description: "Patient records, appointment scheduling, and billing system for small clinics.",
    longDescription: "A full hospital management system covering patient record management, doctor appointment scheduling, billing, and pharmacy management built with Java & SQL.",
    tags: ["Java", "SQL", "Swing"],
    category: "BCA",
    screenshots: [],
  },
  {
    id: "e-commerce-website",
    title: "E-Commerce Website",
    description: "Complete shopping platform with cart, payment gateway, and admin dashboard.",
    longDescription: "A full-featured e-commerce platform with product listings, shopping cart, Khalti payment integration, order management, and a powerful admin dashboard built with Laravel.",
    tags: ["Laravel", "MySQL", "jQuery"],
    category: "BIT",
    screenshots: [],
  },
  {
    id: "student-result-system",
    title: "Student Result System",
    description: "Automated result processing with GPA calculation, marksheet generation, and SMS notifications.",
    longDescription: "An automated academic result management system with GPA calculation, digital marksheet generation, bulk result processing, and SMS notification support built with Python & Django.",
    tags: ["Python", "Django", "SQLite"],
    category: "BCA",
    screenshots: [],
  },
  {
    id: "bus-ticket-booking",
    title: "Bus Ticket Booking",
    description: "Online bus reservation system with seat selection, booking history, and payment integration.",
    longDescription: "A modern bus ticketing platform featuring interactive seat selection, real-time availability, booking history, and integrated payment gateway built with React & Firebase.",
    tags: ["React", "Firebase", "Tailwind"],
    category: "BIT",
    screenshots: [],
  },
];

export default projects;