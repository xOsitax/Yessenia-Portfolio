import React from "react";

function ProjectPopup({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          {project.name}
        </h2>

        <p className="text-gray-700 mb-3">
          <span className="font-semibold">Tech Used:</span> {project.tech}
        </p>

        <p className="text-gray-700 mb-3">
          <span className="font-semibold">Role:</span> {project.role}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Challenges:</span>{" "}
          {project.challenges}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-blue-600 hover:underline font-medium"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default ProjectPopup;
