import { Card, CardMedia } from "@mui/material";
import styles from "./CardImage.module.css";

type Props = {
  children?: JSX.Element | JSX.Element[];
  component: React.ElementType;
  image: string;
  alt: string;
  heading?: string;
};

const CardImage = ({ children, component, image, alt, heading }: Props) => {
  return (
    <Card className={styles.wrapper}>
      <CardMedia component={component} image={image} alt={alt} />
      <div className={styles.content}>
        {heading && <h1>{heading}</h1>}
        {children}
      </div>
    </Card>
  );
};

export default CardImage;
