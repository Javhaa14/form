export const Step2 = ({ onchange, formvalue }) => {
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
          id=""
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95] placeholder:text-[16px]"
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
          id=""
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95] placeholder:text-[16px]"
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
          id=""
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95] placeholder:text-[16px]"
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
          id=""
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95] placeholder:text-[16px]"
        />
      </div>
    </div>
  );
};
