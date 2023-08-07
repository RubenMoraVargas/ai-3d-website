import { useSnapshot } from "valtio";

import state from "../store";
import { getContrastingColor } from "../config/helpers";

interface Props {
  children: React.ReactNode;
  customStyles?: string;
}

const CustomSpan = ({customStyles, children }: Props) => {
  const snap = useSnapshot(state);

  const generateStyle = ( ) => { 
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      }; 
  };

  return (
    <span
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle()} 
    >
      {children}
    </span>
  );
};

export default CustomSpan;
