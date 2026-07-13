import {
  Github,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";

import { projects } from "../constants/site";


export default function Projects() {
  return (
    <section
      id="projects"
      className="
        bg-white
        py-28
      "
    >

      <Container>

        <SectionTitle
          eyebrow="Projects"
          title="Featured Work"
          description="A collection of software and technology projects I have built or designed."
        />


        <div className="space-y-10">

          {projects.map((project, index) => (

            <Reveal
              key={project.title}
              delay={index * 0.1}
            >

              <ProjectCard
                project={project}
                reverse={index % 2 !== 0}
              />

            </Reveal>

          ))}

        </div>


      </Container>

    </section>
  );
}



function ProjectCard({
  project,
  reverse,
}) {

  return (

    <Card
      className={`
        overflow-hidden
        p-0
        lg:flex
        ${
          reverse
            ? "lg:flex-row-reverse"
            : ""
        }
      `}
    >


      {/* Image */}

      <div
        className="
          relative
          overflow-hidden
          lg:w-1/2
        "
      >

        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            min-h-[320px]
            w-full
            object-cover
            transition
            duration-500
            hover:scale-105
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-900/30
            to-transparent
          "
        />

      </div>



      {/* Content */}

      <div
        className="
          flex
          flex-col
          justify-center
          p-8
          lg:w-1/2
          lg:p-12
        "
      >

        <h3
          className="
            flex
            items-center
            gap-2
            font-heading
            text-2xl
            font-bold
            text-slate-900
          "
        >

          {project.title}


          <ArrowUpRight
            size={20}
            className="text-blue-600"
          />

        </h3>



        <p
          className="
            mt-5
            leading-7
            text-slate-600
          "
        >
          {project.description}
        </p>



        {/* Technologies */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
        >

          {project.tech.map((item) => (
            <Badge key={item}>
              {item}
            </Badge>
          ))}

        </div>




        {/* Links */}

        <div
          className="
            mt-8
            flex
            gap-5
          "
        >

          {project.github && (

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-slate-700
                transition
                hover:text-blue-600
              "
            >

              <Github size={18}/>

              GitHub

            </a>

          )}




          {project.demo && (

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-slate-700
                transition
                hover:text-blue-600
              "
            >

              <ExternalLink size={18}/>

              Live Demo

            </a>

          )}

        </div>


      </div>


    </Card>

  );
}