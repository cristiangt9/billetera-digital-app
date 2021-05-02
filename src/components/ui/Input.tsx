import classes from "./Input.module.css";
interface propsInputInter {
  label: string;
  type: string;
  id: string;
  value: any;
  onChange: (event: any) => void;
  onBlur: (event: any) => void;
  isValid: boolean
}
const Input = (props: propsInputInter) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
