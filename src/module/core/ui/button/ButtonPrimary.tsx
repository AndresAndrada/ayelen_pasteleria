interface ButtonPrimaryProps {
  children: React.ReactNode;
  href: string;
}

export const ButtonPrimary = ({ href, children }: ButtonPrimaryProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <a
      href={href}
      className="bg-secondary hover:bg-secondary/80 text-white font-semibold px-4 py-3 rounded-full shadow-md transition-colors duration-500"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
