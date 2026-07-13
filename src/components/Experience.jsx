import {
  Briefcase,
  GraduationCap,
  Calendar,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Reveal from "./ui/Reveal";


const experiences = [
  {
    title: "Industrial Internship Training",
    company: "Technical Internship",
    period: "2024",
    icon: Briefcase,

    description:
      "Practical experience in networking, computer maintenance, troubleshooting, and technical support.",

    skills: [
      "Network Troubleshooting",
      "Hardware Maintenance",
      "IT Support",
      "Computer Systems",
    ],
  },

  {
    title: "Computer Science Graduate",
    company: "Academic Background",
    period: "2023",

    icon: GraduationCap,

    description:
      "Studied software development, programming concepts, databases, algorithms, and networking fundamentals.",

    skills: [
      "Java",
      "JavaScript",
      "SQL",
      "Computer Networks",
    ],
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      className="
        bg-white
        py-28
      "
    >

      <Container>

        <SectionTitle
          eyebrow="Experience"
          title="My Journey"
          description="Education, training, and practical experience that shaped my technical skills."
        />


        <div className="
          relative
          mx-auto
          max-w-4xl
        ">

          {/* Timeline line */}

          <div
            className="
              absolute
              left-6
              top-0
              h-full
              w-px
              bg-slate-200
              md:left-1/2
            "
          />


          <div className="space-y-12">

            {experiences.map((item, index) => {

              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.15}
                >

                  <div
                    className="
                      relative
                      md:flex
                      md:justify-between
                    "
                  >

                    {/* Icon */}

                    <div
                      className="
                        absolute
                        left-0
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-500
                        bg-white
                        text-blue-600
                        shadow-sm
                        md:left-1/2
                        md:-translate-x-1/2
                      "
                    >
                      <Icon size={22} />
                    </div>



                    {/* Card */}

                    <div
                      className="
                        ml-20
                        w-full
                        md:ml-0
                        md:w-[45%]
                        md:odd:mr-auto
                        md:even:ml-auto
                      "
                    >

                      <Card>

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            font-medium
                            text-blue-600
                          "
                        >
                          <Calendar size={16} />

                          {item.period}

                        </div>


                        <h3
                          className="
                            mt-4
                            font-heading
                            text-xl
                            font-bold
                            text-slate-900
                          "
                        >
                          {item.title}
                        </h3>


                        <p
                          className="
                            mt-1
                            text-sm
                            text-slate-500
                          "
                        >
                          {item.company}
                        </p>


                        <p
                          className="
                            mt-5
                            leading-7
                            text-slate-600
                          "
                        >
                          {item.description}
                        </p>


                        <div
                          className="
                            mt-5
                            flex
                            flex-wrap
                            gap-2
                          "
                        >

                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="
                                rounded-full
                                bg-blue-50
                                px-3
                                py-1
                                text-xs
                                font-medium
                                text-blue-700
                              "
                            >
                              {skill}
                            </span>
                          ))}

                        </div>


                      </Card>

                    </div>

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>

      </Container>

    </section>
  );
}