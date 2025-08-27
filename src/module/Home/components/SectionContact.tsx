import { ButtonSecondary } from "../../core/ui/button/ButtonSecondary";

export const SectionContact = () => {
  return (
    <section
      id="contacto"
      className="w-full flex flex-col justify-center items-center px-4 gap-16 my-16"
    >
      <h3 className="text-2xl font-bold text-secondary drop-shadow-text">
        Contacto
      </h3>
      <form className="max-w-xl w-full grid gap-6">
        <input
          type="text"
          placeholder="Nombre"
          className="border border-pink-300 rounded-lg px-4 py-2 focus:outline-pink-400"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border border-pink-300 rounded-lg px-4 py-2 focus:outline-pink-400"
        />
        <textarea
          placeholder="Mensaje"
          className="border border-pink-300 rounded-lg px-4 py-2 focus:outline-pink-400"
          rows={4}
        ></textarea>
        <ButtonSecondary title={"Enviar"} />
      </form>
    </section>
  );
};
