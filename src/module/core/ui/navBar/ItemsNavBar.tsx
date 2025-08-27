interface ItemNevBarProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  navigate?: string;
  // title: string;
}
export const ItemsNavBar = ({
  href,
  children,
  className,
  navigate,
}: ItemNevBarProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor jump
    const targetId = href.replace("#", ""); // Get the ID (e.g., "productos")
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the top of the section
      });
    }
  };
  return (
    <a
      href={href ? href : navigate ? navigate : ""}
      className={`text-secondary hover:text-yellow-600 font-medium ${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
