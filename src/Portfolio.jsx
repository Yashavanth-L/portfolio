import React, { useState, useEffect } from "react";
import { Sun, Moon, Download} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaEnvelope as Mail } from "react-icons/fa";


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const projects = [
    {
      id: 1,
      title: "ML Restaurant Recommender",
      description: "A ML-powered app built with Streamlit helps the User to Spot Best in Town Restaurants in Bengaluru.",
      image: "/images/Restaurant.png",
      url: "https://yashavanth-l-bengaluru-restaurant-recommender.hf.space"
    },
    {
      id: 2,
      title: "Tambola Number Generator",
      description: "This Web-App helps you to generate Numbers from 1 to 90 to paly Tambola Game, No Tickets will be Generated.",
      image: "/images/tambola-num-gen.png",
      url: "https://yashavanth-l-tambola-number-generator.hf.space"
    },
    {
      id: 3,
      title: "Tambola Next Level",
      description: "This Web-Application is built to play Multiplayer Tambole or Housie Game(2 to 10 Players).",
      image: "/images/tambola-nxt-lvl.png",
      url: "https://tambola-next-lvl-xcwljth5jac6cjxxyejuc7.streamlit.app/"
    },
    {
      id: 4,
      title: "AR Navigation System",
      description: "AR-Based Navigation Application developed using Unity 3D, ARCore, GoogelMaps API, GCP, FireBase.",
      image: "/images/AR-Navigatio.png",
      url: "https://drive.google.com/file/d/1C0GPxvz8bEfYZW4icOjRqrjQxo2YGuWJ/view?usp=drive_link"
    },
    {
      id: 5,
      title: "AR-Based Cricket Score Display",
      description: "Immersive WebXR-based Web-App to Display Cricket Score-Board, developed using Three.js and CrickBuzz API.",
      image: "/images/IPL-Scorecard.png",
      url: "https://drive.google.com/file/d/1msl1-aBMr4--m6D_T2BUH2S51v1TTi89/view?usp=drive_link"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 p-6 scroll-smooth text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-md p-4 z-50 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide">YASHAVANTH L</h1>
          <nav className="hidden md:flex space-x-6 text-md font-medium">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Skills</a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Experience</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-gray-700" />}
            </button>
            <a
              href="/resume.pdf"
              download
              className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              <Download size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">Hi, I'm YASHAVANTH L</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          AI ML | Data Analysis | Web Development | Unity 3D | WebXR | Augmented Reality | AR VR
        </p>
        <div className="flex justify-center gap-4 mt-16">
          <a href="https://github.com/Yashavanth-L" target="_blank" rel="noopener noreferrer" className="p-2 border rounded hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors"><Github /></a>
          <a href="https://www.linkedin.com/in/yashavanthl/" target="_blank" rel="noopener noreferrer" className="p-2 border rounded hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors"><Linkedin /></a>
          <a href="mailto:yashvanthyuvi8055@gmail.com?subject=Portfolio Contact" className="p-2 border rounded hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors"><Mail /></a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="mb-16 scroll-mt-24 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          A learning enthusiast, I am constantly eager to learn, innovate, and push the boundaries of immersive technology. Looking forward to contributing my skills to impactful projects that bridge the gap between the real and digital worlds!
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-16 scroll-mt-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-colors">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 px-4 py-2 rounded transition-colors inline-block">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* Skills */}
      <section id="skills" className="mb-16 scroll-mt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors">
            <h3 className="text-xl font-semibold mb-4">Web Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["HTML5", "CSS", "javaScript", "TailwindCSS", "MERN Stack", "Three.js", "WebXR"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors">
            <h3 className="text-xl font-semibold mb-4">Python</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Data Analysis", "Machine Learning", "Streamlit", "FastAPI", "Artificial Intelligence", "GenAI", "LLM's", "Hugging Face"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors">
            <h3 className="text-xl font-semibold mb-4">Unity 3D</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["ARCore", "C#", "Augmented Reality", "AR/VR", "FireBase", "Google Cloud Platform", "3D Assets Handling"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors">
            <h3 className="text-xl font-semibold mb-4">Cloud Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Google Cloud Platform(GCP)", "FireBase"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-16 scroll-mt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Professional Experience</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-6 text-left transition-colors">
          <div>
            <h3 className="text-xl font-semibold">Software Developer at AagnyaSoft AI Labs</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Jun 2024 – May 2025</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Developed scalable frontend components using React and TailwindCSS, enhanced UI performance, and worked in agile teams to meet product milestones.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Machine Learning Engineer Intern at DEV Minds</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2023 – Oct 2023</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Built a Restaurant Recommendation system using Streamlit which recommends the restuarants based on user rating within and around Namma Bengaluru.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center scroll-mt-24 mb-16">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-lg">Feel free to reach out via email:</p>
        <a href="mailto:yashvanthyuvi8055@gmail.com" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">yashvanthyuvi8055@gmail.com</a>
      </section>
    </div>
  );
}










