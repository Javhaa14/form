export const Header = ({}) => {
  return (
    <div className="flex w-[416px] h-fit flex-col items-start gap-2">
      <img className="size-[60px]" src="logo.png"></img>
      <p className={`text-[#202124] text-[26px] font-extrabold `}>
        Join Us! 😎
      </p>
      <p className={`text-[#8E8E8E] text-[18px] align-center self-stretch `}>
        Please provide all current information accurately.
      </p>
    </div>
  );
};
