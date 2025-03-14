export const Step2 = ({ onchange, formvalue, formerror }) => {
  return (
    <div className="w-[418px] h-fit flex flex-col items-start gap-[12px] text-[#334155]">
      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold text-[14px]">Email *</p>
        <input
          value={formvalue.email}
          onChange={onchange}
          placeholder="Placeholder"
          type="email"
          name="email"
          className={`flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] placeholder:text-[#8B8E95] ${
            formerror.firstname
              ? "border-[#E14942] border-[2px] border-solid text-[#E14942]"
              : "border-[#0CA5E9] border-[1px] border-solid"
          } `}
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <p className="text-[#334155] font-bold text-[14px]">Phone Number*</p>

        <input
          value={formvalue.number}
          onChange={onchange}
          placeholder="1234-5678"
          pattern="[0-9]{4}-[0-9]{4}"
          required
          type="number"
          name="number"
          className={`flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] placeholder:text-[#8B8E95] ${
            formerror.firstname
              ? "border-[#E14942] border-[2px] border-solid text-[#E14942]"
              : "border-[#0CA5E9] border-[1px] border-solid"
          } `}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold text-[14px]">Password *</p>
        <input
          value={formvalue.password}
          onChange={onchange}
          placeholder="Placeholder"
          type="password"
          name="password"
          className={`flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] placeholder:text-[#8B8E95] ${
            formerror.firstname
              ? "border-[#E14942] border-[2px] border-solid text-[#E14942]"
              : "border-[#0CA5E9] border-[1px] border-solid"
          } `}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold text-[14px]">
          Confirm Password *
        </p>
        <input
          value={formvalue.confirm}
          onChange={onchange}
          placeholder="Placeholder"
          type="password"
          name="confirm"
          className={`flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] placeholder:text-[#8B8E95] ${
            formerror.firstname
              ? "border-[#E14942] border-[2px] border-solid text-[#E14942]"
              : "border-[#0CA5E9] border-[1px] border-solid"
          } `}
        />
      </div>
    </div>
  );
};
