import SectionTitle from "./ui/SectionTitle";
import Container from "./ui/Container";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";

import { profile } from "../constants/profile";

import {
  GraduationCap,
  MapPin,
  Languages,
  Lightbulb,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        bg-white
        py-28
      "
    >
      <Container>

        <SectionTitle
          eyebrow="About Me"
          title="Who I Am"
          description="A computer science graduate passionate about software development, networking, and technology."
        />


        <div className="
          grid
          gap-8
          lg:grid-cols-3
        ">

          {/* Main Story */}

          <Reveal>

            <Card className="lg:col-span-2">

              <h3 className="
                flex
                items-center
                gap-3
                font-heading
                text-2xl
                font-bold
                text-slate-900
              ">
                <Lightbulb
                  className="text-blue-600"
                />

                My Journey
              </h3>


              <p className="
                mt-6
                leading-8
                text-slate-600
              ">
                {profile.summary}
              </p>


              <p className="
                mt-5
                leading-8
                text-slate-600
              ">
                I enjoy creating practical solutions through
                programming, network technologies, and continuous
                learning. My goal is to contribute to projects
                where software and infrastructure meet.
              </p>


            </Card>

          </Reveal>



          {/* Info Cards */}

          <div className="space-y-8">

            <Reveal delay={0.1}>

              <Card>

                <div className="flex items-center gap-4">

                  <GraduationCap
                    className="text-blue-600"
                    size={28}
                  />

                  <div>

                    <p className="text-sm text-slate-500">
                      Education
                    </p>

                    <p className="
                      font-semibold
                      text-slate-900
                    ">
                      Computer Science Graduate
                    </p>

                  </div>

                </div>

              </Card>

            </Reveal>



            <Reveal delay={0.2}>

              <Card>

                <div className="flex items-center gap-4">

                  <MapPin
                    className="text-blue-600"
                    size={28}
                  />

                  <div>

                    <p className="text-sm text-slate-500">
                      Location
                    </p>

                    <p className="
                      font-semibold
                      text-slate-900
                    ">
                      {profile.location}
                    </p>

                  </div>

                </div>

              </Card>

            </Reveal>

          </div>

        </div>



        {/* Languages */}

        <Reveal>

          <div className="mt-12">

            <Card>

              <div className="flex items-center gap-3">

                <Languages
                  className="text-blue-600"
                />

                <h3 className="
                  font-heading
                  text-xl
                  font-bold
                  text-slate-900
                ">
                  Languages
                </h3>

              </div>


              <div className="
                mt-6
                flex
                flex-wrap
                gap-3
              ">
                {profile.languages.map((language) => (
                  <Badge key={language}>
                    {language}
                  </Badge>
                ))}
              </div>


            </Card>

          </div>

        </Reveal>



        {/* Interests */}

        <Reveal delay={0.1}>

          <div className="mt-8">

            <Card>

              <h3 className="
                font-heading
                text-xl
                font-bold
                text-slate-900
              ">
                Areas of Interest
              </h3>


              <div className="
                mt-6
                flex
                flex-wrap
                gap-3
              ">
                {profile.interests.map((interest) => (
                  <Badge key={interest}>
                    {interest}
                  </Badge>
                ))}
              </div>


            </Card>

          </div>

        </Reveal>


      </Container>

    </section>
  );
}