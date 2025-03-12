"use client";

export const Step3 = ({ formvalue, onchange }) => {
  return (
    <div className="flex w-[416px] h-[288px] flex-col items-start gap-3 text-[#334155] font-[600] text-[14px]">
      <label>Date of birth *</label>
      <input
        value={formvalue.date}
        onChange={onchange}
        id="date"
        type="date"
        name="date"
        className="flex flex-row justify-center items-start gap-10 self-stretch p-3 rounded-[8px] border-solid border-[1px] border-[#CBD5E1]"></input>
      <label>Profile image *</label>
      <input
        value={formvalue.file}
        onChange={onchange}
        name="file"
        type="file"
        className="flex w-[416px] h-[180px] justify-between items-start self-stretch p-[16px] gap-[8px] rounded-md bg-[#7f7f800d] relative"></input>
      <div className="flex flex-col items-center gap-2 self-stretch absolute mx-[170px] mt-[200px]">
        <div className="size-[22px] flex justify-center items-center rounded-full bg-[#fff]">
          <img src="image.svg"></img>
        </div>
        <p className="align-middle">Add image</p>
      </div>
    </div>
  );
};
