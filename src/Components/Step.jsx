import { Children } from "react";
import { Error } from "./error/Error1";

export const Steps = ({ formvalue, onchange, formerror }) => {
  return (
    <div className="w-[418px] h-fit flex flex-col items-start gap-[12px] text-[#334155]">
      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold">First name</p>
        <input
          value={formvalue.firstname}
          onChange={onchange}
          name="firstname"
          placeholder="Placeholder"
          className={`flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] placeholder:text-[#8B8E95] ${
            formerror.firstname
              ? "border-[#E14942] border-[2px] border-solid text-[#E14942]"
              : "border-[#0CA5E9] border-[1px] border-solid"
          } `}
        />

        {formerror.firstname ? (
          <Error
            errorname={
              "First name cannot contain special characters or numbers."
            }
          />
        ) : (
          <p className="hidden"></p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold">Last name</p>

        <input
          value={formvalue.lastname}
          onChange={onchange}
          name="lastname"
          placeholder="Placeholder"
          className={`flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] placeholder:text-[#8B8E95] ${
            formerror.lastname
              ? "border-[#E14942] border-[2px] border-solid text-[#E14942]"
              : "border-[#0CA5E9] border-[1px] border-solid"
          } `}
        />
        {formerror.lastname ? (
          <Error
            errorname={
              "Last name cannot contain special characters or numbers."
            }
          />
        ) : (
          <p className="hidden"></p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#334155] font-bold">Username</p>
        <input
          value={formvalue.username}
          onChange={onchange}
          name="username"
          placeholder="Placeholder"
          className={`flex w-[392px] h-[20px] gap-2 items-center self-stretch rounded-[8px] p-[22px] placeholder:text-[#8B8E95] ${
            formerror.username
              ? "border-[#E14942] border-[2px] border-solid text-[#E14942]"
              : "border-[#0CA5E9] border-[1px] border-solid"
          } `}
        />
        {formerror.username ? (
          <Error
            errorname={
              "This username is already taken. Please choose another one."
            }
          />
        ) : (
          <p className="hidden"></p>
        )}
      </div>
    </div>
  );
};
