import classes from "./Card.module.css";
interface CardProps {
    children: React.ReactNode,
    className: string
}
const Card: React.FC<CardProps> = (props: any) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;