import { useNavigate } from "react-router-dom";

interface ButtonSecondaryProps {
  title: string;
  navigate?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonSecondary = ({
  title,
  navigate,
  disabled,
  onClick,
}: ButtonSecondaryProps) => {
  const navigateRoute = useNavigate();
  return (
    <button
      type="submit"
      onClick={navigate ? () => navigateRoute(navigate) : onClick}
      className="bg-secondary hover:bg-secondary/80 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-colors duration-500"
      disabled={disabled}
    >
      {title}
    </button>
  );
};
