import { FaArrowAltCircleRight } from "react-icons/fa";

interface ArrowProps {
  onClick?: () => void; // Tipamos onClick como una función que no retorna nada
  className?: string; // Opcional, proporcionado por react-slick
  style?: React.CSSProperties; // Opcional, proporcionado por react-slick
}

export default function SampleNextArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10"
    >
      <FaArrowAltCircleRight
        size={"20px"}
        color="rgba(204, 156, 58, 1)"
        cursor="pointer"
      />
    </div>
  );
}
