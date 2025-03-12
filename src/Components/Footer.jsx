import { FaChevronRight } from "react-icons/fa6";

export const Footer = ({ darsan, count }) => {
  return (
    <button
      onClick={darsan}
      className="flex w-full px-[12px] py-[10px] gap-1 justify-center items-center bg-[#121316] rounded-[6px]">
      <p>Continue</p>
      <div className="flex flex-row">
        <p>{count}</p>
        <p>/3</p>
      </div>
      <FaChevronRight />
    </button>
  );
};
