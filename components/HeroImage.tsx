type Props = {};
function HeroImage({}: Props) {
  return (
    <div className="relative col-span-6 mt-16 h-min">
      <img src="/bg-obj.png" className="ml-auto" />
      <img src="/rings.svg" className="absolute -right-14 top-40  scale-50" />
      <img
        src="/dashed-arrow.svg"
        className="absolute top-8 left-32  scale-50"
      />
      <img src="/waves.svg" className="absolute top-48 -left-10  scale-50" />
      <img
        src="/circle-dots.svg"
        className="absolute bottom-40 -left-5  scale-50"
      />
      <img src="/loop.svg" className="absolute bottom-14 left-40  scale-50" />
      <img
        src="/wiggle_1.svg"
        className="absolute bottom-72 -right-16  scale-50"
      />
      <img
        src="/wiggle_2.svg"
        className="absolute bottom-48 -right-16  scale-50"
      />
      <img
        src="/wiggle_3.svg"
        className="absolute bottom-40 -right-16  scale-50"
      />
    </div>
  );
}
export default HeroImage;
