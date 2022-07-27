import BtnModal from "../BtnModal";
import CtaModal from "../CtaModal";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};
function Header({ children }: Props) {
  const router = useRouter();
  return (
    <>
      <div className="drawer drawer-end overflow-hidden">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div>
            <div className="navbar relative z-10 mx-auto mt-4 w-full max-w-[1440px] items-center">
              <Link href={"/"}>
                <a className="mx-2 flex-auto px-2">
                  <img src="/logo.svg" width={45} height={45} />
                  <span className="ml-3 text-2xl">SKDA</span>
                </a>
              </Link>
              <div className="hidden flex-auto lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li>
                    <Link href="services">Services</Link>
                  </li>
                  <li>
                    <Link href="about">About</Link>
                  </li>
                  <li>
                    <Link href="design">Design</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing</Link>
                  </li>
                </ul>
              </div>
              <BtnModal
                className={
                  "mx-2 hidden cursor-pointer rounded-md  px-6 py-3 transition-colors lg:block" +
                  (router.pathname == "/pricing"
                    ? " bg-white"
                    : " bg-gradient-to-r from-pink via-blue to-purple")
                }
                htmlFor="cta-modal"
              />
              {/* location of modal */}
              <CtaModal />
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-ghost btn-square"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay" />
          <ul className="menu w-80 overflow-y-auto bg-base-100 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="services">Services</Link>
            </li>
            <li>
              <Link href="case">Case Studies</Link>
            </li>
            <li>
              <Link href="portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
