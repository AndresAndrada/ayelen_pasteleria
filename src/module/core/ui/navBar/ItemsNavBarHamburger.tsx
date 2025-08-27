import { useNavigate } from "react-router-dom";

interface ItemNevBarHamburgerProps {
  children: React.ReactNode;
  className?: string;
  navigate?: string;
  // title: string;
}
export const ItemsNavBarHamburger = ({
  children,
  className,
  navigate,
}: ItemNevBarHamburgerProps) => {
  const navigateRoute = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor jump
    navigateRoute(navigate ? navigate : "");
  };
  return (
    <a
      className={`text-secondary hover:text-yellow-600 font-medium ${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
