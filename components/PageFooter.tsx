import BtnModal from "./BtnModal";
import Container from "./layout/Container";

type Props = { title: JSX.Element; description: JSX.Element };
function PageFooter({ description, title }: Props) {
  return (
    <Container className="mt-60 mb-14">
      <h2 className="text-stroke-1  text-stroke-black col-span-12 text-center text-7xl font-semibold  tracking-tighter">
        {title}
      </h2>
      <p className="col-span-12 mt-10 text-center text-2xl font-extralight">
        {description}
      </p>
      <div className="col-span-12 mt-0 text-center">
        <BtnModal
          htmlFor="cta-modal"
          className="mt-10 block cursor-pointer rounded-md bg-gradient-to-r from-pink via-blue to-purple px-6 py-3"
        />
      </div>
    </Container>
  );
}
export default PageFooter;
