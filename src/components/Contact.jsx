import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import SocialLinks from "./ui/SocialLinks";

import { profile } from "../constants/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        bg-slate-50
        py-28
      "
    >
      <Container>

        <SectionTitle
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a project idea or want to discuss technology? Feel free to reach out."
        />


        <div className="
          grid
          gap-8
          lg:grid-cols-2
        ">


          {/* Information */}

          <Reveal>

            <Card className="h-full">

              <h3 className="
                font-heading
                text-2xl
                font-bold
                text-slate-900
              ">
                Get In Touch
              </h3>


              <p className="
                mt-5
                leading-7
                text-slate-600
              ">
                I'm open to opportunities in software development,
                networking, and IT support.
              </p>


              <div className="
                mt-8
                space-y-5
              ">

                <ContactItem
                  icon={Mail}
                  label="Email"
                  value={profile.email}
                />

                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value={profile.phone}
                />

                <ContactItem
                  icon={MapPin}
                  label="Location"
                  value={profile.location}
                />

              </div>


              <div className="mt-10">
                <SocialLinks />
              </div>


            </Card>

          </Reveal>



          {/* Form */}

          <Reveal delay={0.15}>

            <Card>

              <form className="space-y-5">

                <Input
                  placeholder="Your Name"
                  type="text"
                />


                <Input
                  placeholder="Your Email"
                  type="email"
                />


                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-slate-900
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />


                <Button>
                  Send Message
                </Button>


              </form>

            </Card>

          </Reveal>


        </div>

      </Container>
    </section>
  );
}



function ContactItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="
      flex
      items-center
      gap-4
    ">

      <div className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        bg-blue-50
        text-blue-600
      ">
        <Icon size={20} />
      </div>


      <div>

        <p className="
          text-sm
          text-slate-500
        ">
          {label}
        </p>


        <p className="
          text-slate-900
        ">
          {value}
        </p>

      </div>

    </div>
  );
}



function Input({
  placeholder,
  type,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        rounded-xl
        border
        border-slate-200
        bg-white
        px-4
        py-3
        text-slate-900
        outline-none
        transition
        placeholder:text-slate-400
        focus:border-blue-500
        focus:ring-4
        focus:ring-blue-100
      "
    />
  );
}