export const Steps = ({}) => {
  return (
    <div className="w-[418px] h-[228px] flex-col items-start gap3">
      <div>
        <p className="text-[#334155]">First name *</p>
        <input
          placeholder="Placeholder"
          type="text"
          name=""
          id=""
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95]"
        />
      </div>

      <div>
        <p className="text-[#334155]">Last name</p>
        <input
          placeholder="Placeholder"
          type="text"
          name=""
          id=""
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95]"
        />
      </div>
      <div>
        <p className="text-[#334155]">Username</p>
        <input
          placeholder="Placeholder"
          type="text"
          name=""
          id=""
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95]"
        />
      </div>
    </div>
  );
};
