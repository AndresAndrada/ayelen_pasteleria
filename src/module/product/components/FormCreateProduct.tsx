import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { CreateProduct } from "../../../schemas";
// import useCreateProduct from "../hooks/useCreateProduct";
// import useGetType from "../hooks/useGetType";
import { MdOutlineAttachMoney } from "react-icons/md";
import img from "../../../assets/icons/user-circle.svg";
// import usePatchImageProduct from "../hooks/usePatchImageProduct";
import InputComponent from "../../core/ui/inputs/InputComponent";
import { useNavigate } from "react-router-dom";
import { ModalEditImgUser } from "../../core/ui/modal/ModalEditImgUser";
import InputNumberComponent from "../../core/ui/inputs/InputNumberComponent";

export const FormCreateProduct = () => {
  const navigate = useNavigate();
  const [showPromotion, setShowPromotion] = useState(false);
  const productAvatar = img;
  const [selectedFile, setSelectedFile] = useState(productAvatar);
  const [loading, setLoading] = useState(false);
  // const { Type } = useTypeStore();
  // const { createProduct } = useCreateProduct();
  // const { patchImageProduct } = usePatchImageProduct();
  // const { getAllType } = useGetType();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      setSelectedFile(URL.createObjectURL(event.currentTarget.files[0]));
      formik.setFieldValue("image", event.currentTarget.files[0]);
    }
  };

  // useEffect(() => {
  //   getAllType();
  // }, []);

  const formik = useFormik({
    initialValues: {
      type: "",
      name_product: "",
      image: "",
      description: "",
      descriptionPromotion: "",
      minorista: 0,
      mayorista: 0,
      pricePromotion: 0,
      promotionPrice: 0,
      stock: "",
    },
    validationSchema: CreateProduct,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("🚀 ~ FormCreateProduct ~ values:", values);
        setLoading(true);
        // const res = await createProduct(values);
        // if (res?.ok && res?.newProducto?.id) {
        //   console.log(res.newProducto?.id, "ENTEEEEEE");
        //   await patchImageProduct(values.image, res?.newProducto?.id);
        //   toast.success("Producto creado con éxito", {
        //     duration: 2000,
        //     position: "top-center",
        //   });
        navigate("/");
        //   setLoading(false);
        // } else {
        //   setLoading(false);
        //   toast.error("Error al crear producto", {
        //     duration: 4000,
        //     position: "top-center",
        //   });
        // }
      } catch (error) {
        console.log(error);
        // toast.error("Algo salio mal, vuelve a intentarlo", {
        //   duration: 3000,
        //   position: "top-center",
        // });
      } finally {
        setLoading(false);
        resetForm();
      }
    },
  });
  return (
    <div className="w-full sm:max-w-[40rem] inline-flex p-9 flex-col justify-center items-center gap-8 rounded-lg bg-gradient-section shadow-xl">
      <div>
        <Toaster />
      </div>
      <h1 className="text-teal-700 text-center font-product-sans font-bold text-lg leading-normal">
        Crear Producto
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full inline-flex flex-col justify-center items-center gap-5"
      >
        <div className="w-48">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <div className="flex justify-center items-center gap-x-5">
            <ModalEditImgUser
              handleImageChange={handleImageChange}
              loading={loading}
              selectedFile={selectedFile}
              img={productAvatar}
              handleSubmit={formik.handleSubmit}
            />
          </div>
        </div>
        <div className="w-[90%] sm:max-w-[90%] flex flex-col sm:flex-col md:flex-row justify-center gap-3 sm:gap-10 ">
          <div className="w-full flex flex-col gap-5">
            <InputComponent
              title="Nombre"
              name="name_product"
              formikTouched={formik.touched.name_product}
              formikError={formik.errors.name_product}
              formikOnBlur={formik.handleBlur}
              formikHandleChange={formik.handleChange}
              formikValuesName={formik.values.name_product}
            />
            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex px-4 justify-end items-start gap-2">
                <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                  Tipo
                </label>
              </div>
              <select
                className={`w-full h-8 bg-white flex px-1 items-center text-teal-700 gap-2 border-2 text-xs ${
                  formik.touched.type && formik.errors.type
                    ? "border-red-500"
                    : "border-teal-700"
                }  placeholder-teal-700 rounded-lg focus:border-primary`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.type}
                id="type"
                name="type"
                autoComplete="type"
              >
                <option value="" className="text-teal-700">
                  Tipo de producto
                </option>
                <option value="" className="text-teal-700">
                  Optcion 1
                </option>
                <option value="" className="text-teal-700">
                  Optcion 2
                </option>
                {/* {Type?.length > 0 &&
                  Type.map((type) => {
                    return (
                      <>
                        <option
                          value={type.id}
                          className="text-teal-700"
                          key={type.id}
                        >
                          {type.name_type}
                        </option>
                      </>
                    );
                  })} */}
              </select>
              {formik.touched.type && (
                <p
                  id="type-error"
                  className="text-center min-w-3 text-red-600 text-xs"
                >
                  {formik.errors.type}
                </p>
              )}
            </div>
            <InputComponent
              title="Descripción"
              name="description"
              formikTouched={formik.touched.description}
              formikError={formik.errors.description}
              formikOnBlur={formik.handleBlur}
              formikHandleChange={formik.handleChange}
              formikValuesName={formik.values.description}
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <InputNumberComponent
              title="Precio minorista"
              name="minorista"
              formikTouched={formik.touched.minorista}
              formikError={formik.errors.minorista}
              formikOnBlur={formik.handleBlur}
              formikHandleChange={formik.handleChange}
              formikValuesName={formik.values.minorista}
            />
            <InputNumberComponent
              title="Precio mayorista"
              name="mayorista"
              formikTouched={formik.touched.mayorista}
              formikError={formik.errors.mayorista}
              formikOnBlur={formik.handleBlur}
              formikHandleChange={formik.handleChange}
              formikValuesName={formik.values.mayorista}
            />
            <InputNumberComponent
              title="Stock"
              name="stock"
              formikTouched={formik.touched.stock}
              formikError={formik.errors.stock}
              formikOnBlur={formik.handleBlur}
              formikHandleChange={formik.handleChange}
              formikValuesName={Number(formik.values.stock)}
            />
          </div>
        </div>
        <div className="w-36">
          <label className="label cursor-pointer flex flex-col gap-2">
            <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
              Promoción
            </label>
            <input
              type="checkbox"
              className={`toggle [--tglbg:white] ${
                showPromotion ? "bg-teal-700 border-teal-700" : ""
              }`}
              onClick={() => setShowPromotion(!showPromotion)}
            />
          </label>
        </div>
        {showPromotion && (
          <div
            className={`w-[90%] sm:max-w-[90%] flex flex-col sm:flex-col md:flex-row justify-center gap-3 sm:gap-10 transition-opacity duration-500 ease-in-out ${
              showPromotion ? "opacity-100" : "opacity-0"
            }`}
          >
            <InputComponent
              title="Descripción promoción"
              name="descriptionPromotion"
              formikTouched={formik.touched.descriptionPromotion}
              formikError={formik.errors.descriptionPromotion}
              formikOnBlur={formik.handleBlur}
              formikHandleChange={formik.handleChange}
              formikValuesName={formik.values.descriptionPromotion}
            />
            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-col w-full items-start gap-2">
                <div className="flex px-4 justify-end items-start gap-2">
                  <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
                    Precios promoción{" "}
                    <span className="text-gray-400">{"(opcional)"}</span>
                  </label>
                </div>
                <label
                  className={
                    formik.touched.promotionPrice &&
                    formik.errors.promotionPrice
                      ? "input input-bordered w-full bg-white flex p-2 items-center gap-2 border-2 border-red-500 placeholder-teal-700 rounded-lg focus-within:border-primary"
                      : "input input-bordered flex items-center gap-2 w-full bg-white p-2 border-2 border-hawk-turquoise border-teal-700 rounded-lg focus-within:border-primary"
                  }
                >
                  <input
                    type="number"
                    className="grow placeholder-teal-700"
                    placeholder="0"
                    id="promotionPrice"
                    onBlur={formik.handleBlur}
                    value={formik.values.promotionPrice}
                    autoComplete="promotionPrice"
                    onChange={formik.handleChange}
                  />
                  <MdOutlineAttachMoney className="text-customColor" />
                </label>
                {formik.touched.promotionPrice && (
                  <p
                    id="promotionPrice-error"
                    className="text-center min-w-3 w-72 text-red-600 text-xs"
                  >
                    {formik.errors.promotionPrice}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="w-48">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className={
              formik.dirty && formik.isValid
                ? "flex w-full p-[0.5rem 1rem] h-10 justify-center items-center gap-2 rounded-[0.625rem] bg-teal-700 text-white hover:bg-primary"
                : "flex w-full p-[0.5rem 1rem] h-10 justify-center items-center gap-2 rounded-[0.625rem] bg-gray-500 text-white"
            }
            disabled={!(formik.dirty && formik.isValid && formik.values)}
          >
            Crear producto
          </button>
        </div>
      </form>
    </div>
  );
};
