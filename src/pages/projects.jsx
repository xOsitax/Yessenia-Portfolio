import { useState } from "react";
import ProjectCard from "../components/ProjectC";
import ProjectPopup from "../components/ProjectPopup";

import responsiveNav from "../assets/website.PNG";
import BarWebsite from "../assets/responsive.PNG";
import InvitationCard from "../assets/color.jpg";

function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      name: "Group BarWebsite",
      image: responsiveNav,
      description: "A website for a bar with a responsive design",
      learnings: "I learned about responsive design and CSS Flexbox.",
      github: "https://github.com/xOsitax/BarWebsite",
      tech: "HTML, CSS",
      role: "Solo Project",
      challenges:
        "Ensuring proper project structure and form validation to meet development best practices.",
    },
    {
      name: "Responsive Navigation Bar",
      image: BarWebsite,
      description: "A responsive navigation bar",
      learnings: "Works across different platforms.",
      github: "https://github.com/xOsitax/responsive-navbar",
      tech: "HTML, CSS",
      role: "Solo Frontend Developer",
      challenges: "Making the layout pixel-perfect to the Figma design.",
    },
    {
      name: "Grid Color Palette",
      image: InvitationCard,
      description: "A color palette grid",
      learnings: "I learned about CSS Grid and color theory.",
      github: "https://github.com/xOsitax/Grid",
      tech: "HTML, CSS",
      role: "Frontend Developer",
      challenges: "Precise spacing and typography to match the design.",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <button
        className="projects-btn bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded mb-6"
        onClick={() => setShowProjects((prev) => !prev)}
        aria-expanded={showProjects}
      >
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      {showProjects && (
        <>
          <input
            type="text"
            placeholder="Search by name or tech..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded mb-6"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  image={project.image}
                  github={project.github}
                  tech={project.tech}
                  description={project.description}
                  learnings={project.learnings}
                  onClick={() => setSelectedProject(project)}
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No projects found.
              </p>
            )}
          </div>
        </>
      )}

      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;
