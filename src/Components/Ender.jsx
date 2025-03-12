export const Ender = ({ className }) => {
  return (
    <div
      className={`flex w-[416px] h-fit flex-col items-start gap-2 ${className}`}>
      <img className="size-[60px]" src="logo.png"></img>
      <p className={`flex text-[#202124] text-[26px] font-extrabold `}>
        You're All Set 🔥
      </p>
      <p className={`text-[#8E8E8E] text-[18px] align-center self-stretch `}>
        We have received your submission. Thank you!
      </p>
    </div>
  );
};
