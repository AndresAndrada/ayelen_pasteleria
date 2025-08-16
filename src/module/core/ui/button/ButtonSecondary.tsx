interface ButtonSecondaryProps {
  title: string;
}

export const ButtonSecondary = ({ title }: ButtonSecondaryProps) => {
  return (
    <button
      type="submit"
      className="bg-secondary hover:bg-secondary/80 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-colors duration-500"
    >
      {title}
    </button>
  );
};
