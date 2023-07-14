import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, opacity }: IButtonProps) => {
  return <ButtonContainer opacity={opacity} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
