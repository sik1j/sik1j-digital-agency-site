type Props = {
  listNo: string;
  title: React.ReactNode;
  description: string;
  list?: string[];
  link: string;
  className?: string;
};
function ServiceCard({
  listNo,
  title,
  description,
  link,
  className,
  list,
}: Props) {
  return (
    <div className={className}>
      <div className="text-xl font-extralight">{listNo}</div>
      <h2 className="text-stroke-1 text-stroke-black text-7xl font-medium uppercase -tracking-tight">
        {title}
      </h2>
      <p className="mt-8 max-w-[600px] text-3xl font-extralight leading-relaxed  ">
        {description}
      </p>
      {list && (
        <ul className="my-10 mt-8">
          {list.map((feature) => {
            return (
              <li
                key={feature}
                className="ml-6 list-disc text-[25px] font-extralight leading-loose -tracking-tight"
              >
                {feature}
              </li>
            );
          })}
        </ul>
      )}
      <a className="mt-10 block w-fit cursor-pointer rounded-md bg-gradient-to-r from-pink via-blue to-purple px-6 py-3">
        Learn More{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
export default ServiceCard;
