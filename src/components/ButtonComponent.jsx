const ButtonComponent = props => (
    <button htmlFor={props.id} className={props.className}>{props.buttonTxt}</button>
);

export default ButtonComponent;