import { MdOutlineAttachMoney } from "react-icons/md";
import type { FormikHandlers } from "formik";

interface InputComponentProps {
  formikTouched: boolean | undefined;
  formikError: string | undefined;
  formikOnBlur: FormikHandlers["handleBlur"];
  formikHandleChange: FormikHandlers["handleChange"];
  formikValuesName: number;
  title: string;
  name: string;
}

export default function InputNumberComponent({
  title,
  name,
  formikTouched,
  formikError,
  formikOnBlur,
  formikHandleChange,
  formikValuesName,
}: InputComponentProps) {
  return (
    <div className="flex flex-col w-full items-start gap-2">
      <div className="flex px-4 justify-end items-start gap-2">
        <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
          {title} <span className="text-gray-400">{"(opcional)"}</span>
        </label>
      </div>
      <label
        className={`input input-bordered w-full h-8 bg-white flex p-2 items-center gap-2 rounded-lg placeholder-teal-700 focus:border-primary border-2 text-xs ${
          formikTouched && formikError ? "border-red-500" : "border-teal-700"
        }`}
      >
        <input
          type="number"
          name={name}
          className="grow text-teal-700 placeholder-gray-400"
          placeholder="0"
          id={formikValuesName.toString()}
          onBlur={formikOnBlur}
          value={formikValuesName ? formikValuesName : ""}
          autoComplete={formikValuesName.toString()}
          onChange={formikHandleChange}
        />
        <MdOutlineAttachMoney className="text-customColor" />
      </label>
    </div>
  );
}
