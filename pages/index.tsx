import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BtnModal from "../components/BtnModal";
import HeroImage from "../components/HeroImage";
import Container from "../components/layout/Container";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SKDA | Home</title>
        <meta
          name="description"
          content="Digital agency providing solutions to digital problems"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Container className="mb-8">
          <div className="col-span-6 mt-44">
            <h1 className="text-6xl font-medium leading-[1.15]">
              Your partner in creating and growing brands.
            </h1>
            <h2 className="mt-8 text-2xl font-semibold">
              We transform your ideas into reality
            </h2>
            <BtnModal
              htmlFor="cta-modal"
              className="mt-10 block cursor-pointer rounded-md bg-gradient-to-r from-pink via-blue to-purple px-6 py-3"
            />
            <div className="mt-60 grid grid-cols-6 ">
              <div className="col-span-2">
                <img src="/identity.svg" />
                <h4 className="mt-5 text-xl">Strong Identity</h4>
                <p className="mt-2 font-light">
                  Grow you exposure with a stunning brand identity
                </p>
              </div>
              <div className="col-span-2 col-start-4">
                <img src="/circleWavyCheck.svg" />
                <h4 className="mt-5 text-xl ">Award Winning</h4>
                <p className="mt-2 font-light">
                  We create the unconventional products and eye catching.
                </p>
              </div>
            </div>
          </div>
          <HeroImage />
        </Container>
      </main>
    </div>
  );
};

export default Home;
