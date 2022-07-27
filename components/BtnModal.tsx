type Props = {
  htmlFor: "cta-modal";
  className?: string;
};
function BtnModal({ htmlFor, className }: Props) {
  return (
    <button>
      {/* The button to open modal */}
      <label className={className} htmlFor={htmlFor}>
        Get In Touch
      </label>
    </button>
  );
}
export default BtnModal;
