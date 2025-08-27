interface TitleProps {
  children: React.ReactNode;
  href: string;
}

export const ButtonPrimary = ({ href, children }: TitleProps) => {
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
      href="#productos"
      className="bg-secondary hover:bg-secondary/80 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-500"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
