import { NextPage } from "next";
import Container from "../components/layout/Container";
import Head from "next/head";
import HeroImage from "../components/HeroImage";
import BtnModal from "../components/BtnModal";
import ServiceCard from "../components/ServiceCard";
import PageFooter from "../components/PageFooter";
import PageHero from "../components/PageHero";

const Services: NextPage = () => {
  return (
    <main>
      <PageHero
        title={"Services"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden."
        }
      />

      <Container>
        <div className="col-span-6 mt-28 space-y-28">
          <ServiceCard
            listNo={"01."}
            title={
              <>
                <span className="text-white">de</span>sign
              </>
            }
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            link="#"
          />
          <ServiceCard
            listNo={"02."}
            title={
              <>
                develop<span className="text-white">ment</span>
              </>
            }
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            link="#"
          />
          <ServiceCard
            listNo={"03."}
            title={
              <>
                manage<span className="text-white">ment</span>
              </>
            }
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
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
            Our unconventional process generates <br />
            unconventional results
          </>
        }
      />
    </main>
  );
};

export default Services;
