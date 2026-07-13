import Container from "./ui/Container";
import SocialLinks from "./ui/SocialLinks";

import { profile } from "../constants/profile";


export default function Footer() {

  return (

    <footer
      className="
        border-t
        border-slate-200
        bg-white
        py-10
      "
    >

      <Container>


        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            md:flex-row
          "
        >


          {/* Brand */}

          <div
            className="
              text-center
              md:text-left
            "
          >

            <a
              href="#home"
              className="
                font-heading
                text-2xl
                font-black
                text-slate-900
              "
            >
              IL<span className="text-blue-600">.</span>
            </a>


            <p
              className="
                mt-2
                text-sm
                text-slate-600
              "
            >
              {profile.fullName}
            </p>


            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Software • Networking • IT
            </p>


          </div>



          {/* Social */}

          <SocialLinks />


        </div>




        {/* Bottom */}

        <div
          className="
            mt-10
            border-t
            border-slate-200
            pt-6
            text-center
            text-sm
            text-slate-500
          "
        >

          © {new Date().getFullYear()} {profile.fullName}.
          All rights reserved.

        </div>


      </Container>


    </footer>

  );
}