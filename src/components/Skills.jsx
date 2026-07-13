import {
  Code2,
  Server,
  Database,
  Network,
  Wrench,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";


const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Laravel",
      "Node.js",
      "REST APIs",
      "PHP",
      "Express.js",
    ],
  },

  {
    title: "Database",
    icon: Database,
    skills: [
      "MySQL",
      "SQL",
      "Database Design",
      "MongoDB",
    ],
  },

  {
    title: "Networking",
    icon: Network,
    skills: [
      "Computer Networks",
      "TCP/IP",
      "Network Troubleshooting",
      "Routing",
      "Switching",
    ],
  },

  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Docker",
    ],
  },
];


export default function Skills() {

  return (

    <section
      id="skills"
      className="
        bg-slate-50
        py-28
      "
    >

      <Container>


        <SectionTitle
          eyebrow="Skills"
          title="Technical Expertise"
          description="Technologies and tools I use to build software, manage systems, and solve technical problems."
        />



        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {skillGroups.map((group, index) => {

            const Icon = group.icon;


            return (

              <Reveal
                key={group.title}
                delay={index * 0.1}
              >

                <Card>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                      "
                    >

                      <Icon size={22}/>

                    </div>


                    <h3
                      className="
                        font-heading
                        text-xl
                        font-bold
                        text-slate-900
                      "
                    >
                      {group.title}
                    </h3>


                  </div>



                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-3
                    "
                  >

                    {group.skills.map((skill) => (

                      <Badge
                        key={skill}
                      >
                        {skill}
                      </Badge>

                    ))}

                  </div>


                </Card>

              </Reveal>

            );

          })}


        </div>


      </Container>


    </section>

  );
}