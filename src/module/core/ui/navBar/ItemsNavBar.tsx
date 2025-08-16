interface ItemNevBarProps {
  href: string;
  title: string;
}
export const ItemsNavBar = ({ href, title }: ItemNevBarProps) => {
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
      href={href}
      className="text-secondary hover:text-yellow-600 font-medium"
      onClick={handleClick}
    >
      {title}
    </a>
  );
};
