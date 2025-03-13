import { Children } from "react";
import { Error } from "./error/Error1";

export const Steps = ({ formvalue, isvalid, onchange, type, errorname }) => {
  return (
    <div className="w-[418px] h-fit flex flex-col items-start gap-[12px] text-[#334155]">
      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold">First name</p>
        <input
          value={formvalue.firstname}
          onChange={onchange}
          name="firstname"
          id="1"
          placeholder="Placeholder"
          type={type}
          className={`flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] placeholder:text-[#8B8E95] ${
            isvalid
              ? "border-[#0CA5E9] border-[1px] border-solid"
              : "border-[#E14942] border-[2px] border-solid"
          } `}
        />
        {isvalid ? <p className="hidden"></p> : <Error errorname={errorname} />}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold">Last name</p>

        <input
          value={formvalue.lastname}
          onChange={onchange}
          name="lastname"
          id="2"
          placeholder="Placeholder"
          type={type}
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95]"
        />
        {isvalid ? <p className="hidden"></p> : <Error errorname={errorname} />}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold">Username</p>
        <input
          value={formvalue.username}
          onChange={onchange}
          name="username"
          id="3"
          placeholder="Placeholder"
          type={type}
          className="flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] border-[#0CA5E9] border-[1px] border-solid placeholder:text-[#8B8E95]"
        />
        {isvalid ? <p className="hidden"></p> : <Error errorname={errorname} />}
      </div>
    </div>
  );
};
