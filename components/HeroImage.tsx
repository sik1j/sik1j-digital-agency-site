type Props = {};
function HeroImage({}: Props) {
  return (
    <div className="relative col-span-6 mt-16 h-min">
      <img src="/bg-obj.png" className="ml-auto" />
      <img src="/rings.svg" className="absolute -right-14 top-40" />
      <img src="/dashed-arrow.svg" className="absolute top-8 left-32" />
      <img src="/waves.svg" className="absolute top-48 -left-10" />
      <img src="/circle-dots.svg" className="absolute bottom-40 -left-5" />
      <img src="/loop.svg" className="absolute bottom-14 left-40" />
      <img src="/wiggle_1.svg" className="absolute bottom-72 -right-16" />
      <img src="/wiggle_2.svg" className="absolute bottom-48 -right-16" />
      <img src="/wiggle_3.svg" className="absolute bottom-40 -right-16" />
    </div>
  );
}
export default HeroImage;
