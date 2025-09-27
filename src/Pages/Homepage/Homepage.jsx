import React from "react";
import Navbar from "../../Components/Navbar";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Typescript",
      "Responsive Designs",
    ],
  },
  // { category: "Backend", items: ["Node.js", "Express", "Django"] },
  // { category: "Database", items: ["MongoDB", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Figma", "Postman", "VsCode"] },
];

const experiences = [
  {
    year: "2024 – Present",
    role: "Software Engineer",
    company: "Zeus Company",
    description: "Building scalable applications with React.",
  },
  {
    year: "2023 - 2024",
    role: "Frontend Intern",
    company: "Grazac Technology",
    description: "Worked on UI/UX implementations and component development.",
  },
  {
    year: "2022",
    role: "Frontend Developer",
    company: "Enoverlab Company",
    description: "Implementation of responsive designs and integration of APIs",
  },
];

const projects = [
  {
    title: "InvoiceU",
    description: "An invoice generator website.",
    link: "http://invoice-u.vercel.app",
    // github: "#",
    image: "/src/assets/invoice.png",
  },
  {
    title: "NephlySoul",
    description: "A Social Companionship Web Application.",
    link: "https://nephly-soul.vercel.app/",
    // github: "#",
    image: "/src/assets/nephly.png",
  },
  {
    title: "44saturnclothings",
    description: "A cothing e-commerce website.",
    link: "https://app.44saturnclothing.com/",
    image: "/src/assets/cloth.png",
  },
];

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center py-50 bg-black">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I’m <span className="text-amber-400">GBEMLIGHT</span> 👋
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            I build scalable web applications with React, Next.js, and
            Typescript.
          </p>
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href="#contact"
            className=" text-white bg-amber-400 hover:bg-amber-400 px-6 py-3 rounded-[50px] font-semibold"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="border border-amber-400 px-6 py-3 rounded-[50px] font-semibold hover:bg-amber-400 text-amber-400 hover:text-white"
          >
            View Projects
          </a>
        </div>
      </section>

      <section id="about" className="px-10 py-20 bg-neutral-950">
        <h2 className="text-3xl font-bold text-center text-amber-400">
          About Me
        </h2>
        <p className="mt-6 max-w-3xl text-[18px] mx-auto text-center text-gray-300">
          I am a passionate software developer dedicated to building scalable,
          high-performance web applications that solve real-world problems. I
          specialize in modern web technologies such as React, Next.js and
          TypeScript, and I focus on writing clean, maintainable code while
          delivering seamless and intuitive user experiences. I thrive in
          collaborative and fast-paced environments, leveraging strong
          problem-solving, creativity, and critical-thinking skills to tackle
          complex challenges efficiently. I enjoy exploring emerging
          technologies, contributing to open-source projects, and mentoring
          aspiring developers, constantly seeking opportunities to grow and
          refine my craft. My goal is to create software that not only meets
          functional requirements but also adds meaningful value to users and
          businesses alike. I bring dedication, curiosity, and a commitment to
          excellence to every project I work on, turning ideas into impactful
          digital solutions.
        </p>
      </section>

      <section id="skills" className="px-10 py-20 bg-black">
        <h2 className="text-3xl font-bold text-center text-amber-400">
          Skills
        </h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 mt-20 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-xl shadow hover:shadow-lg hover:bg-neutral-950 transition w-64"
            >
              <h3 className="text-xl font-semibold mb-4 text-amber-400">
                {skill.category}
              </h3>
              <ul className="space-y-2 text-gray-300">
                {skill.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-10 py-20 bg-neutral-900">
        <h2 className="text-3xl font-bold text-center text-amber-400">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 rounded-xl shadow hover:shadow-lg overflow-hidden block transform transition duration-300 hover:scale-105"
              style={{ textDecoration: "none", color: "inherit" }}
            >
        
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl transition duration-300 hover:opacity-90"
              />

          
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-white">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="px-10 py-20 bg-black">
        <h2 className="text-3xl font-bold text-center text-amber-400">
          Experience
        </h2>
        <div className="mt-10 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-white">
                {exp.role} @ {exp.company}
              </h3>
              <p className=" text-amber-400">{exp.year}</p>
              <p className="mt-2 text-white">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="px-10 py-28 bg-neutral-900 text-white">
        <h2 className="text-3xl font-bold text-center text-amber-400">
          Contact
        </h2>

      
        <footer className=" text-gray-300 mt-20 text-center">
          <h3 className="text-xl font-semibold text-white">
            Feel free to reach out 🚀
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
            I’m always open to discussing new ideas, opportunities, or
            collaborations. Let’s create something amazing together!
          </p>

          <div className="mt-6 space-y-2 text-sm flex flex-col items-center">
            <div className="mt-6 flex flex-row gap-6 justify-center items-center">
              <a
                href="mailto:adeyanjusunday114@gmail.com"
                className="hover:text-amber-400 transition"
              >
                <MdOutlineMailOutline className="h-[50px] w-[50px]" />
              </a>
              <a
                href="https://wa.me/2348132849122"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition"
              >
                <FaWhatsapp className="h-[50px] w-[50px]" />
              </a>
              <a
                href="https://github.com/Gbemlight"
                target="_blank"
                className="hover:text-amber-400 transition"
              >
                <IoLogoGithub className="h-[50px] w-[50px]" />
              </a>
            </div>
          </div>
        </footer>
      </footer>
      <div className=" border-slate-700 py-8 text-xs text-white text-center bg-black">
        © {new Date().getFullYear()} OLUWADAMILARE. All Rights Reserved.
      </div>
    </div>
  );
};

export default Homepage;
