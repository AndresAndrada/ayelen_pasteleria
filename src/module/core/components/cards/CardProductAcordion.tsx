import { useNavigate } from "react-router-dom";

interface CardProductAcordionProps {
  id?: number;
  img?: string;
  name?: string;
  description?: string;
}
export const CardProductAcordion = ({
  id,
  img,
  name,
  description,
}: CardProductAcordionProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="min-h-16 flex p-4 gap-4" onClick={handleClick}>
      <img
        src={img}
        alt="Torta de chocolate"
        className="w-16 object-cover rounded-full mb-4"
      />
      <div className="flex flex-col items-start">
        <h4 className="text-secondary text-start">{name}</h4>
        <p className="max-w-48 text-start">{description}</p>
      </div>
    </div>
  );
};
