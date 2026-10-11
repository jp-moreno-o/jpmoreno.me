/* =====================================================================
   YOUR PORTFOLIO CONTENT
   This is the only file you need to edit.
   Change the text between the quotes "like this", save, and refresh.

   Each item in "projects" becomes one square on the home grid and one
   detail page. The order below is the order on the grid.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- ABOUT YOU ---------- */
  name: "John Paul Moreno",
  initials: "JM",
  photo: "images/JPLBR.jpg",                            // optional headshot: "images/headshot.jpg"
  headline: "Mechanical engineering student focused on CAD, prototyping, and design for manufacturing.",
  school: "Mechanical Engineering at UT Austin, class of 2028",
  location: "Austin, TX",

  about: "I'm a mechanical engineering student at The University of Texas at Austin. I've worked on 3D printed housings at Gel Blaster Nexus, parametric equipment models at Mirada3D, and ergonomics for the Longhorn Baja SAE team.",

  education: {
    school: "The University of Texas at Austin",
    degree: "Bachelor of Science in Mechanical Engineering | GPA: 3.7",
    date: "May 2028",
  },

  /* ---------- CONTACT ---------- */
  email: "jp.moreno.be@gmail.com",
  resume: "resume.pdf",                 // the PDF sitting next to index.html
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jpmoreno31" },
  ],

  /* ---------- PROJECTS ----------
     slug:    short web address for the page (letters and dashes only)
     title:   the descriptive title printed on the grid square
     image:   the grid picture ("" gives a plain text tile)
     gallery: more pictures shown on the detail page
     intro:   optional short paragraph at the top of the detail page
     bullets: your resume bullets, word for word
     notes:   optional extra paragraphs for a deeper write-up ("" to hide) */
  projects: [
    {
      slug: "battle-bay-pcb-housings",
      title: "Battle Bay PCB Housings and Frame Redesign",
      role: "Mechanical Engineering Intern",
      org: "Gel Blaster Nexus",
      place: "",
      dates: "Aug. 2026 - Present",
      image: "images/gel-blaster-pcb.jpg",
      imagePosition: "50% 50%",
      gallery: [
        { src: "images/gel-blaster-pcb.jpg", alt: "Several PCBs mounted on an aluminum extrusion frame with wiring routed between them" },
      ],
      intro: "",
      bullets: [
        "Led the prototyping and design for manufacturing in Fusion360 for 3D printed PCB housings using ABS.",
        "Refined packaging of electronic wiring for 4 different PCB types and routed 20+ ft in wiring into 10 x 8 in housing.",
        "Reduced material costs for Battle Bay product assembly by 50%, redesigning frame geometry validated by FEA.",
      ],
      tags: ["Fusion360", "FEA", "3D Printing", "ABS"],
      notes: "",
    },
    {
      slug: "baja-ergonomics",
      title: "Longhorn Baja Ergonomics: Pedals, Seat, and Body Panels",
      role: "Racing Team – Ergonomics Lead",
      org: "Longhorn Baja (Society of Automotive Engineers)",
      place: "",
      dates: "Sept. 2025 – Present",
      image: "images/baja-pedal-box.jpg",
      imagePosition: "50% 50%",
      gallery: [
        { src: "images/baja-pedal-box.jpg", alt: "Looking down into the Baja car's pedal box with master cylinders and brake lines inside the tube frame" },
        { src: "images/LBRCARSV.jpg", alt: "Side view of EJH-412" },
      ],
      intro: "The University of Texas at Austin’s collegiate design competition team that designs and optimizes a single-seat off-road vehicle.",
      bullets: [
        "Led pedal box geometry and prototyping, after evaluation pivoted to premanufactured pedals to reduce risk.",
        "Optimized aluminum body-panels by reducing sheet sizes from 4x10 ft to 3x4 ft, lowering material costs by over $600.",
        "Coordinated modification of racing seat mounting plate to integrate to chassis; routed brake lines; finalized driver harness mounting point.",
      ],
      tags: ["Prototyping", "Ergonomics", "SAE Baja"],
      notes: "",
    },
    {
      slug: "mirada3d-equipment-models",
      title: "Parametric Industrial Equipment Showcase Models",
      role: "CAD Modeling Engineer",
      org: "Mirada3D – Equipment 3D Models",
      place: "",
      dates: "Nov. 2025 – May 2026",
      image: "images/mirada3d-tank.jpg",
      imagePosition: "50% 62%",
      gallery: [
        { src: "images/mirada3d-tank.jpg", alt: "A silver 3D printed horizontal pressure vessel model inside a Bambu Lab printer" },
        { src: "images/mirada3d-printer-bed.jpg", alt: "A 3D printer bed covered in printed brackets, washers, and small parts" },
      ],
      intro: "",
      bullets: [
        "Converted 2D engineering drawings into scaled down parametric industrial-equipment showcase assemblies in Fusion 360.",
        "Produced over 100+ detailed sketches for 3D printed components by refining geometry down to .01 in tolerances.",
        "Fabricated custom box display cases with 6 laser-cut acrylic panels to present deliverables and meet project deadlines.",
      ],
      tags: ["Fusion 360", "3D Printing", "Laser Cutting"],
      notes: "",
    },
    {
      slug: "high-temperature-conductivity",
      title: "High-Temperature Conductivity of Composite Materials",
      role: "",
      org: "Undergraduate Research",
      place: "",
      dates: "Jan. 2025 – Apr. 2025",
      image: "images/research-furnace.jpg",
      imagePosition: "50% 35%",
      gallery: [
        { src: "images/research-furnace.jpg", alt: "An open tube furnace on a lab bench" },
      ],
      intro: "",
      bullets: [
        "Reconfigured a four-point probe device in SOLIDWORKS, incorporating torsion spring components and PTFE material selection research.",
        "Conducted in-house testing at temperatures above 250⁰C with 1,000+ resistance/voltage data points to analyze conductivity trends.",
        "Machined PTFE block using manual mill to adapt fasteners and springs; worked with insulating resin compound to adhere components.",
      ],
      tags: ["SOLIDWORKS", "Manual Mill", "PTFE"],
      notes: "",
    },
    {
      slug: "me302-battle-bot",
      title: "ME 302 One-Pound Battle Bot",
      role: "",
      org: "ME 302 Battle Bot (1-lb)",
      place: "",
      dates: "Jan. 2025 – Apr. 2025",
      image: "images/battle-bot.jpg",
      imagePosition: "50% 60%",
      gallery: [
        { src: "images/battle-bot.jpg", alt: "The finished battle bot with a gray wedge body, green frame, blue 3D printed parts, and a green roller" },
      ],
      intro: "",
      bullets: [
        "Drafted main design for a 1-lb battle bot, integrating 3 electric motors, three 20A ESCs, servo motor, kill switch and 7.4V battery pack.",
        "Designed, FEA-validated, and PLA 3D-printed custom wheels with interference fit and fastener access to integrate with N20 DC motors.",
        "Laser-cut a toleranced protective lid out of 3mm plywood for easy access to electronics while adhering to weight constraints.",
      ],
      tags: ["FEA", "PLA 3D Printing", "Laser Cutting"],
      notes: "",
    },
    {
      slug: "shpe-mentoring-outreach",
      title: "SHPE Mentoring and Student Outreach",
      role: "Mentor & SHPE Jr. Outreach Volunteer",
      org: "Society of Hispanic Professional Engineers (SHPE)",
      place: "",
      dates: "Aug. 2024 – Present",
      image: "",                        // add a photo, e.g. "images/shpe.jpg", to replace the text tile
      imagePosition: "50% 50%",
      gallery: [],
      intro: "",
      bullets: [
        "Mentor in SHPE for Big & Little program, advising student in mechanical engineering coursework and technical opportunities.",
        "Community outreach volunteer in SHPE Jr. to inform and guide 40+ students at Del Valle High School transition from high school to college.",
      ],
      tags: ["Mentoring", "Outreach"],
      notes: "",
    },
  ],

  /* ---------- SKILLS ---------- */
  skills: [
    { group: "CAD",         items: ["SolidWorks", "Fusion360"] },
    { group: "Fabrication", items: ["3D Printing", "Laser Cutting (Trotec)", "Prototyping", "Walker Department of Mechanical Engineering Shop Certification"] },
    { group: "Analysis",    items: ["FEA", "MATLAB"] },
    { group: "Other",       items: ["Report Writing", "Teamwork"] },
  ],

  /* ---------- AWARDS ---------- */
  awards: [
    "GeoFORCE STEM Four Year Scholarship ($60,000)",
    "HSF Scholar (2024, 2025)",
    "Dell Scholar (2024, 2025)",
    "Ramshorn Engineering Scholar (2024, 2025)",
    "AP Scholar (2024)",
    "Hispanic Recognition Award (SAT)",
  ],
};
