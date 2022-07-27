import { NextPage } from "next";
import Container from "../components/layout/Container";
import Head from "next/head";
import HeroImage from "../components/HeroImage";
import BtnModal from "../components/BtnModal";
import ServiceCard from "../components/ServiceCard";
import PageHero from "../components/PageHero";
import PageFooter from "../components/PageFooter";

const Design: NextPage = () => {
  return (
    <main>
      <PageHero
        title="design"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden."
      />
      <Container>
        <div className="col-span-7 mt-28 space-y-28">
          <ServiceCard
            listNo={"01."}
            title={
              <>
                <span className="text-white">Web</span> Design
              </>
            }
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            list={[
              "Web Interface",
              "User Experience",
              "Design System",
              "Wireframe",
              "Prototype",
            ]}
            link="#"
          />
          <ServiceCard
            listNo={"02."}
            title={
              <>
                visual<span className="text-white"> identity</span>
              </>
            }
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            list={[
              "Logo Designing",
              "Social Media",
              "Marketing Assets",
              "Presentations",
            ]}
            link="#"
          />
          <ServiceCard
            listNo={"03."}
            title={
              <>
                brand<span className="text-white"> design</span>
              </>
            }
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            list={["Story Board", "Hand Sketch", "Moodboard", "Digital Art"]}
            link="#"
          />
        </div>
      </Container>

      <PageFooter
        title={
          <>
            Great <span className="text-white">design</span> fits <br />
            <span className="text-white">like a</span> glove{" "}
            <span className="text-white">.</span>
          </>
        }
        description={
          <>
            Our unconventional process generates <br /> unconventional outcomes
          </>
        }
      />
    </main>
  );
};

export default Design;
