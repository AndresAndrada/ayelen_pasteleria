import type { FormikHandlers } from "formik";

interface InputComponentProps {
  formikTouched: boolean | undefined;
  formikError: string | undefined;
  formikOnBlur: FormikHandlers["handleBlur"];
  formikHandleChange: FormikHandlers["handleChange"];
  formikValuesName: string;
  title: string;
  name: string;
}

export default function InputComponent({
  formikTouched,
  formikError,
  formikOnBlur,
  formikHandleChange,
  formikValuesName,
  title,
  name,
}: InputComponentProps) {
  return (
    <div className="flex flex-col w-full items-start gap-2">
      <div className="flex px-4 justify-end items-start gap-2">
        <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
          {title}
        </label>
      </div>
      <input
        type="text"
        placeholder={title}
        className={`input input-bordered w-full h-8 bg-white flex p-2 items-center gap-2 rounded-lg text-teal-700 placeholder-gray-400 focus:border-primary border-2 text-xs ${
          formikTouched && formikError ? "border-red-500" : "border-teal-700"
        }`}
        onBlur={formikOnBlur}
        // onError={formik.touched.name_product && Boolean(formik.errors.name_product)}
        onChange={formikHandleChange}
        value={formikValuesName}
        id={name}
        name={name}
        autoComplete={name}
      />
      {formikTouched && (
        <p
          id={`${name}-error"`}
          className="text-center min-w-3 text-red-600 text-xs"
        >
          {formikError}
        </p>
      )}
    </div>
  );
}
