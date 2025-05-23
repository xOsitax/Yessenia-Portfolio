function ProjectCard({ image, name, description, github, learnings, onClick }) {
  return (
    <div
      className="project-card bg-white shadow-lg rounded-lg p-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={`Screenshot of ${name}`}
          className="object-contain h-full"
        />
      </div>

      <h2 className="project-name text-2xl font-semibold text-gray-800 mt-4">
        {name}
      </h2>

      <p className="project-description text-gray-600 mt-2">
        <strong>Description:</strong> {description}
      </p>

      <p className="project-learnings text-gray-600 mt-2">
        <strong>What I Learned:</strong> {learnings}
      </p>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 mt-4 block"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
