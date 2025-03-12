export const Steps = ({ formvalue, onchange, type, error }) => {
  return (
    <div className="w-[418px] h-fit flex flex-col items-start gap-[12px] text-[#334155]">
      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold">First name {error}</p>
        <input
          value={formvalue.firstname}
          onChange={onchange}
          name="firstname"
          placeholder="Placeholder"
          type={type}
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold">Last name {error}</p>

        <input
          value={formvalue.lastname}
          onChange={onchange}
          name="lastname"
          placeholder="Placeholder"
          type={type}
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold">Username {error}</p>
        <input
          value={formvalue.username}
          onChange={onchange}
          name="username"
          placeholder="Placeholder"
          type={type}
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95]"
        />
      </div>
    </div>
  );
};
