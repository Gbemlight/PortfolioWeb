import React from "react";
import Navbar from "../../Components/Navbar";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Responsive UI"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "Figma", "Postman", "Agile"],
  },
];

const experiences = [
  {
    year: "2024 – 2025",
    role: "Software Engineer",
    company: "Zeus Company",
    description:
      "Built scalable frontend systems using React and Next.js with focus on performance, reusable components, and maintainable architecture.",
  },
  {
    year: "2023 – 2024",
    role: "Frontend Intern",
    company: "Grazac Technology",
    description:
      "Translated UI/UX designs into responsive interfaces and collaborated in Agile teams to ship production-ready features.",
  },
  {
    year: "2022",
    role: "Frontend Developer",
    company: "Enoverlab Company",
    description:
      "Developed responsive web pages and integrated APIs to improve application functionality and user experience.",
  },
];

const projects = [
  {
    title: "InvoiceU",
    description:
      "Invoice management system for creating, tracking and managing invoices efficiently.",
    link: "http://invoice-u.vercel.app",
    image: "/assets/invoice.png",
  },
  {
    title: "NephlySoul",
    description:
      "Social companionship platform with posts, messaging, and user interaction features.",
    link: "https://nephly-soul.vercel.app/",
    image: "/assets/nephly.png",
  },
  {
    title: "44Saturn Clothing",
    description:
      "E-commerce platform with product listing and checkout experience.",
    link: "https://app.44saturnclothing.com/",
    image: "/assets/cloth.png",
  },
];

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Homepage = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        {...sectionAnim}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          src="/assets/Gbemlight.png" 
          alt="Oluwadamilare Adeyanju"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-amber-400 object-cover mb-8 shadow-2xl shadow-amber-400/40 ring-8 ring-amber-400/10 transition-shadow"
        />
        <h2 className="text-amber-400 text-lg md:text-xl font-medium mb-2">
          Hi, I'm Oluwadamilare Adeyanju
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold">
          I build{" "}
          <span className="text-amber-400">high-performance</span> web apps
        </h1>

        <p className="mt-4 text-gray-300 max-w-2xl">
          Frontend Engineer specializing in React, Next.js, and TypeScript —
          focused on building scalable, fast, and production-ready applications
          with clean architecture and strong UX.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#contact"
            className="bg-amber-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="border border-amber-400 text-amber-400 px-6 py-3 rounded-full hover:bg-amber-400 hover:text-black transition"
          >
            View Work
          </a>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        {...sectionAnim}
        className="py-20 px-6 bg-neutral-950"
      >
        <h2 className="text-3xl font-bold text-center text-amber-400">
          About Me
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-300 leading-relaxed">
          I am a Frontend Developer focused on building scalable and
          performance-driven web applications. I specialize in React, Next.js,
          and TypeScript, with strong attention to UI consistency, usability,
          and maintainability. I enjoy solving real-world problems through code
          and continuously improving user experience through clean and efficient
          engineering.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        {...sectionAnim}
        className="py-20 px-6 bg-black"
      >
        <h2 className="text-3xl font-bold text-center text-amber-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <div key={i} className="bg-neutral-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">
                {skill.category}
              </h3>
              <ul className="text-gray-300 space-y-2">
                {skill.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        {...sectionAnim}
        className="py-20 px-6 bg-neutral-950"
      >
        <h2 className="text-3xl font-bold text-center text-amber-400">
          Experience
        </h2>

        <div className="mt-10 space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-neutral-900 p-6 rounded-xl">
              <h3 className="text-lg font-semibold">
                {exp.role} — {exp.company}
              </h3>
              <p className="text-amber-400 text-sm">{exp.year}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        {...sectionAnim}
        className="py-20 px-6 bg-black"
      >
        <h2 className="text-3xl font-bold text-center text-amber-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-neutral-900 rounded-xl overflow-hidden hover:scale-105 transition block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl text-amber-400 font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        {...sectionAnim}
        className="py-24 px-6 bg-neutral-950 text-center"
      >
        <h2 className="text-3xl font-bold text-amber-400">Let’s Work</h2>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          I’m open to internships, remote roles, Contracts and freelance opportunities.
          Let’s build something impactful.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a href="mailto:adeyanjusunday114@gmail.com">
            <MdOutlineMailOutline className="text-4xl hover:text-amber-400" />
          </a>
          <a href="https://wa.me/2348132849122">
            <FaWhatsapp className="text-4xl hover:text-amber-400" />
          </a>
          <a href="https://github.com/">
            <IoLogoGithub className="text-4xl hover:text-amber-400" />
          </a>
        </div>
      </motion.section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Oluwadamilare Adeyanju. Built with React.
      </footer>
    </div>
  );
};

export default Homepage;