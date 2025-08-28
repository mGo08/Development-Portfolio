import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import previewImage from "../../assets/image.png";
import preview1Image from "../../assets/noctura.webp";
import project2Image from "../../assets/brewacademyThumbnail.png";
import project3Image from "../../assets/sspThumbnail.png";
import project4Image from "../../assets/vrmsThumbnail.png";
import project5Image from "../../assets/flip.png";
import project6Image from "../../assets/attend.png";

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("web");

    const webProjects = [
        {
            title: "Fingerprint Attendance System",
            image: project6Image,
            desc: "An attendance management system that integrates biometric authentication using an Arduino and R307 fingerprint sensor. The desktop UI is built with Tkinter and sv_ttk, while SQLite is used as the database for storing attendance records.",
            tech: [
                "Python",
                "Tkinter",
                "sv_ttk",
                "Arduino",
                "R307 Fingerprint Sensor",
                "SQLite"
              ],
        },
        {
            title: "Flippify",
            image: project5Image,
            desc: "A desktop application for tracking item flips and generating analytics reports. Built with Python and Tkinter for the UI, it integrates matplotlib for visualizations and uses python-docx/openpyxl to export reports in Word and Excel formats.",
            tech: [
                "Python",
                "Tkinter",
                "sv_ttk",
                "matplotlib",
                "python-docx",
                "openpyxl"
              ],
            link: "https://github.com/mGo08/Flippify---Flip-Item-Tracker-Analytics"
        },
        {
            title: "noctura",
            image: preview1Image,
            desc: "The Noctura landing page is a bold and stylish pre-launch site designed for an upcoming apparel brand. Featuring a sleek black-and-white color palette, it captures attention with strong typography and minimalistic layouts. The page highlights the brand’s modern aesthetic with high-fashion photography and clean, modular sections.",
            tech: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
        },
        {
            title: "BYTEBISTRO",
            image: previewImage,
            desc: "BYTEBISTRO streamlines restaurant operations by efficiently handling order processing, menu management, sales tracking, ultimately enhancing workflow, improving customer experience, and optimizing overall business performance.",
            tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
            link: "https://github.com/mGo08/Restaurant-Management-System-RMS-"
        },
        {
            title: "BrewAcademy",
            image: project2Image,
            desc: "BrewAcademy Demo is a Java-based educational and recruitment tool designed to assess coffee-making knowledge through interactive quizzes and ingredient-based exercises. It also streamlines the hiring process by handling user data, enabling employers to evaluate candidates efficiently.",
            tech: ["Java", "MySQL"],
            link: "https://github.com/mGo08/BrewAcademy_DEMO"
        },
        {
            title: "SecurePass Pro",
            image: project3Image,
            desc: "SecurePass Pro is a modern password generator that allows users to create secure passwords with customizable strength and length. It features an intuitive interface for generating, copying, and saving passwords efficiently.",
            tech: ["Python"],
            link: "https://github.com/mGo08/SSP-SecurePassPro"
        },
        {
            title: "Vehicle Rental Management System",
            image: project4Image,
            desc: "The Vehicle Rental Management System (VRMS) is a digital platform designed to streamline vehicle rental operations by managing clients, vehicles, and transactions efficiently.",
            tech: ["C#", "MySQL"],
            link: "https://github.com/mGo08/VRMS-Demo"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 font-roboto">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#363636] to-[#697565] bg-clip-text text-transparent text-center"
                    >
                        Featured Projects
                    </motion.h2>

                    <AnimatePresence>
                        {activeCategory === "web" && (
                            <motion.div
                                key="web"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {webProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="text-[#363636] p-6 rounded-xl border-2 border-[#363636]/30 hover:-translate-y-1 shadow-[#363636] hover:shadow-[0_3px_10px_rgba(236,223,204,0.1)] transition-all"
                                    >
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="mb-4 rounded-lg w-full h-auto"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        />
                                        <p className="mb-4">{project.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="bg-[#363636] text-white py-1 px-3 rounded-full text-sm hover:bg-[#363636]/80 transition-all"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                        {project.link && (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                className="text-md text-[#363636] hover:text-[#363636]/70 transition-colors my-4"
                                            >
                                                View Project →
                                            </motion.a>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </RevealOnScroll>
        </section>
    );
};
