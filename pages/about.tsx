import { NextPage } from "next";
import Container from "../components/layout/Container";
import PageFooter from "../components/PageFooter";
import PageHero from "../components/PageHero";

const About: NextPage = () => {
  return (
    <main>
      <PageHero
        title={"About"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden."
        }
      />
      <Container>
        <h2 className="text-stroke-1 text-stroke-black col-span-12 mt-28 text-7xl font-medium uppercase -tracking-tight">
          Peo<span className="text-white">ple</span>
        </h2>
        <div className="col-span-12 mt-16 grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <div className="h-[500px] w-full bg-gray"></div>
            <p className="mt-8 text-2xl font-light tracking-wide">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden.
            </p>
          </div>
          <div className="col-span-3">
            <div className="h-[500px] w-full bg-gray"></div>
            <p className="mt-8 text-2xl font-light tracking-wide">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden.
            </p>
          </div>
          <div className="col-span-3">
            <div className="h-[500px] w-full bg-gray"></div>
            <p className="mt-8 text-2xl font-light tracking-wide">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden.
            </p>
          </div>
          <div className="col-span-3">
            <div className="h-[500px] w-full bg-gray"></div>
            <p className="mt-8 text-2xl font-light tracking-wide">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden.
            </p>
          </div>
        </div>
        <div className="col-span-6">
          <h2 className="text-stroke-1 text-stroke-black col-span-12 mt-24 text-7xl font-medium uppercase -tracking-tight">
            Local
          </h2>
          <p className="col-span-6 mt-8 text-2xl font-light leading-relaxed tracking-wide">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden.
          </p>
        </div>
        <div className="col-span-4 col-start-9 mt-24 aspect-square w-full rounded-3xl bg-gray"></div>
      </Container>
      <PageFooter
        title={
          <>
            <span className="text-white">We</span> innovate{" "}
            <span className="text-white">through</span> <br />
            creativity
            <span className="text-white">.</span>
          </>
        }
        description={
          <>
            Our unconventional process generates <br />
            unconventional outcomes{" "}
          </>
        }
      />
    </main>
  );
};

export default About;
