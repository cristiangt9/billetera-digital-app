import classes from "./Button.module.css";
interface propsButtonInter {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}
const Button = (props: propsButtonInter) => {
  return (
    <button
      className={`${classes.Button} ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
