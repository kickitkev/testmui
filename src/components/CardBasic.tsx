import { Card } from "@mui/material";
import styles from "./CardBasic.module.css";

type Props = {
  children?: JSX.Element | JSX.Element[];
  heading?: string;
  className?: string;
};

const CardBasic = ({ children, heading }: Props) => {
  return (
    <Card className={styles.wrapper}>
      {heading && <h1>{heading}</h1>}
      {children}
    </Card>
  );
};

export default CardBasic;
