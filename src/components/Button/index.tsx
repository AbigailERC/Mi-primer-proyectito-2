import { ReactNode } from "react";
import styles from "./Button.module.css";
type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};
console.log(styles);
function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      
      onClick={onClick}
      disabled={isLoading}
      type="button"
      //className={[styles.button, styles.padded].join(" ")}
      className={[
        `btn btn-${isLoading ? "secondary" : "primary"}`,
        styles.button,
      ].join(" ")}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Button;