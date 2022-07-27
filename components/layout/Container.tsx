import React from "react";

type Props = { children: React.ReactNode; className?: string };
function Container({ children, className }: Props) {
  return (
    <article
      className={"mx-auto grid max-w-[1440px] grid-cols-12 px-20 " + className}
    >
      {children}
    </article>
  );
}
export default Container;
