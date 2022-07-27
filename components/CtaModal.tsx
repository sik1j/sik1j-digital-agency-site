import Input from "./Input";

type Props = {};
function CtaModal({}: Props) {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="cta-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative h-[100vh] max-h-[550px]  w-[50vw] max-w-[700px] py-6">
          <h3 className="text-center text-6xl font-light after:text-purple after:content-['.']">
            Get in touch
          </h3>
          <h4 className="mt-2 text-center text-sm">Enter your details below</h4>
          <form
            action=""
            className="mx-auto mt-4 flex w-[380px] flex-col space-y-6"
          >
            <Input name="name" type="text" />
            <Input name="email" type="email" />
            <Input name="message" type="textarea" />
          </form>
          <div className="modal-action absolute top-0 right-6">
            <label htmlFor="cta-modal" className="cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CtaModal;
