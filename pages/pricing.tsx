import { NextPage } from "next";
import { useState } from "react";
import BtnModal from "../components/BtnModal";
import Container from "../components/layout/Container";
import PageFooter from "../components/PageFooter";

const Pricing: NextPage = () => {
  const [activeTabInd, setActiveTabInd] = useState(0);
  return (
    <main>
      <div className="relative -top-20 left-0 right-0  rounded-b-3xl bg-gradient-to-r from-pink via-blue to-purple pt-16">
        <Container className=" ">
          <h1 className="col-span-12 mt-24 text-center text-6xl font-bold tracking-tighter">
            Plans and Packages for all <br />
            your project needs
          </h1>
          <p className="col-span-8 col-start-3 mt-8 text-center text-2xl font-light leading-relaxed tracking-wide">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden.
          </p>
          <div className="col-span-12 text-center">
            <BtnModal
              htmlFor={"cta-modal"}
              className="mt-4 block cursor-pointer rounded-md bg-white px-6 py-3"
            />
          </div>
          <div className="tabs relative  col-span-full mt-10 flex">
            <a
              className={
                "tab tab-lifted h-14 basis-1/3 text-3xl tracking-tighter " +
                (activeTabInd == 0 ? "tab-active" : "")
              }
              onClick={() => setActiveTabInd(0)}
            >
              Design
            </a>
            <a
              className={
                "tab tab-lifted h-14 basis-1/3 text-3xl tracking-tighter " +
                (activeTabInd == 1 ? "tab-active" : "")
              }
              onClick={() => setActiveTabInd(1)}
            >
              Development
            </a>
            <a
              className={
                "tab tab-lifted h-14 basis-1/3 text-3xl tracking-tighter " +
                (activeTabInd == 2 ? "tab-active" : "")
              }
              onClick={() => setActiveTabInd(2)}
            >
              Management
            </a>
          </div>
        </Container>
      </div>
      {activeTabInd == 0 && (
        <Container className="space-y-20">
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            Web Design
          </div>
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            Graphic Design
          </div>
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            Marketing
          </div>
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            HTML Emails
          </div>
        </Container>
      )}
      {activeTabInd == 1 && (
        <Container className="space-y-20">
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            Web Development
          </div>
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            Smart Contract
          </div>
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            App Development
          </div>
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            Custom Bots
          </div>
        </Container>
      )}
      {activeTabInd == 2 && (
        <Container className="space-y-20">
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            Moderation
          </div>
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            Ama Speakers
          </div>
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            Copy writing
          </div>
          <div className=" col-span-10 col-start-2 flex h-80 items-end bg-gray p-8 text-4xl font-bold uppercase tracking-tight">
            Marketing Advisor
          </div>
        </Container>
      )}
      <PageFooter
        title={
          <>
            <span className="text-white">We</span> innovate{" "}
            <span className="text-white">through</span>
            <br /> creativity
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

export default Pricing;
