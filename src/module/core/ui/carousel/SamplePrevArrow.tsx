import { FaArrowCircleLeft } from "react-icons/fa";

interface ArrowProps {
  onClick?: () => void; // Tipamos onClick como una función que no retorna nada
  className?: string; // Opcional, proporcionado por react-slick
  style?: React.CSSProperties; // Opcional, proporcionado por react-slick
}

export default function SamplePrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10"
    >
      <FaArrowCircleLeft
        size="20px"
        color="rgba(204, 156, 58, 1)"
        cursor="pointer"
      />
    </div>
  );
}
