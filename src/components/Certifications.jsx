import { BadgeCheck, Router } from "lucide-react";

import AnimatedSection from "./AnimatedSection.jsx";
import Container from "./ui/Container.jsx";
import Card from "./ui/Card.jsx";
import SectionTitle from "./ui/SectionTitle.jsx";

import { certifications } from "../constants/site";
export default function Certifications() {
  return (
    <AnimatedSection
      id="certifications"
      className="bg-slate-50 py-28"
    >
      <Container>

        <SectionTitle
          eyebrow="Certifications"
          title="Validated networking and IT support fundamentals."
          description="Professional certifications that strengthen my knowledge in networking, infrastructure, and technical support."
        />


        <div className="
          grid
          gap-8
          md:grid-cols-2
        ">
          {certifications.map((cert, index) => {
            const Icon = index === 0 ? Router : BadgeCheck;

            return (
              <Card key={cert.title}>

                <Icon
                  className="mb-5 text-blue-600"
                  size={34}
                />

                <h3 className="
                  text-xl
                  font-bold
                  text-slate-900
                ">
                  {cert.title}
                </h3>


                <p className="
                  mt-2
                  text-sm
                  font-semibold
                  text-blue-600
                ">
                  {cert.issuer}
                </p>


                <p className="
                  mt-4
                  leading-7
                  text-slate-600
                ">
                  {cert.detail}
                </p>

              </Card>
            );
          })}
        </div>

      </Container>
    </AnimatedSection>
  );
}