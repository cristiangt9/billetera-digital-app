import classes from "./Button.module.css";
interface propsButtonInter {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
}
const Button = (props: propsButtonInter) => {
  return <button className={`${classes.Button} ${props.className}`} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
