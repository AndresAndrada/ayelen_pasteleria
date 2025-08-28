// import { useUiStore } from "../../../../store";

interface AcordionProps {
  children: React.ReactNode;
}

export default function Acordion({ children }: AcordionProps) {
  // const { DarkMode } = useUiStore();
  return (
    <div
      className={`join-vertical bg-white transition-bg rounded-3xl w-full shadow-xl`}
    >
      {/* <input type="radio" name="my-accordion-4" defaultChecked /> */}
      <div className="collapse collapse-arrow join-item w-full">{children}</div>
    </div>
  );
}
