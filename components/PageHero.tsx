import BtnModal from "./BtnModal";
import HeroImage from "./HeroImage";
import Container from "./layout/Container";

type Props = { title: string; description: string };
function PageHero({ title, description }: Props) {
  return (
    <Container className="min-h-screen">
      <div className="relative col-span-6 mt-44 ">
        <h1 className="text-stroke-2 text-stroke-black stroke-black text-8xl font-bold  uppercase tracking-tighter text-white">
          {title}
        </h1>
        <p className="mt-4 max-w-[500px] text-2xl leading-relaxed -tracking-tight">
          {description}
        </p>
        <BtnModal
          htmlFor="cta-modal"
          className="mt-10 block cursor-pointer rounded-md bg-gradient-to-r from-pink via-blue to-purple px-6 py-3"
        />
        <p className="absolute top-[850px]">
          <img src="/arrowULeftDown.svg" className="inline" />
          Scroll to explore
        </p>
      </div>
      <HeroImage />
    </Container>
  );
}
export default PageHero;
