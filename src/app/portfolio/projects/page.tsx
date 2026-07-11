import { Projects } from "@/constants/portfolio";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section about="projects">
      <article className="p-4 text-amber-50">
        <div className="text-3xl font-bold border-b border-brand-border pb-2">
          Projects
        </div>

        <div className="flex gap-7 flex-wrap">
          {Projects.map(
            (project, idx) =>
              project.isVisible && (
                <div
                  key={`project-card-${idx}`}
                  className="my-5 p-3 border-2 border-brand-border rounded-xl bg-brand-primary-deep-dark shadow-2xl w-120"
                >
                  <div className="mb-2 flex justify-between">
                    <span className="text-xl font-bold">{project.name}</span>
                    {project.isPersonal && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-primary-deep-dark border border-brand-border text-white text-xs font-medium h-6">
                        <span className="w-2 h-2 rounded-full bg-[#ff5a60]" />
                        Personal
                      </span>
                    )}
                  </div>
                  {project.company && (
                    <div className="text-brand-border mb-5 text-[0.8rem] italic">
                      <span className="mr-1">For:</span>
                      <span className="text-gray-400">
                        {project.company.name}
                      </span>
                    </div>
                  )}
                  {project.highlight && (
                    <div className="mb-3 text-sm font-sans text-amber-50 line-clamp-3 ">
                      {project.highlight}
                    </div>
                  )}
                  <div className="flex gap-2 text-2xl">
                    {project.techStack.map((tech, idx) => (
                      <span key={`${project.name}-tech-${idx}`}>
                        <Icon icon={tech.icon ?? ""} />
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex justify-between">
                    <div>
                      <small className="text-gray-500 ">
                        Duration: {project.duration}
                      </small>
                    </div>
                    <div className=" flex gap-2">
                      {project.liveUrl && (
                        <small className="mt-2">
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            className="hover:cursor-pointer border border-blue-500 text-blue-500 py-1 px-2 rounded-2xl hover:bg-brand-primary-highlight"
                          >
                            Live Demo
                          </Link>
                        </small>
                      )}
                      <small className="mt-2">
                        <Link
                          href={`projects/${project.alias}`}
                          className="hover:cursor-pointer border py-1 px-2 rounded-2xl hover:bg-green-900 border-green-500 text-green-500"
                        >
                          See More
                        </Link>
                      </small>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>
      </article>
    </section>
  );
}
