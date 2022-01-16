import { useSelector } from "react-redux";
import * as selectors from "../../redux/selectors";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

const CustomButtonRoot = styled("button")`
  background-color: #07b1fd;
  padding: 15px 20px;
  border-radius: 20px;
  width: 219px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  color: #ffffff;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default function UnstyledButtonsSimple() {
  const percentage = useSelector(selectors.getPercentage);
  const months = useSelector(selectors.getMonths);
  const firstInstallment = useSelector(selectors.getFirstinstallment);
  const priceForEveryMonth = useSelector(selectors.getPriceForEveryMonths);
  const information = useSelector(selectors.getInformation);
  const trusted = useSelector(selectors.getTrusted);

  const handleSubmit = () => {
    console.log(
      `При оплаті ${percentage}% вартості автомобіля, беручи позику під 17% на ${months} місяців, Ваша сума кредиту буде дорівнювати ${firstInstallment} грн з щомісячним латежем ${priceForEveryMonth} грн.
      
      Кредит надається: ${information.name}.
      Мобільний телефон: ${information.phone}.
      Робочий телефон: ${information.workPhone}.
      Адреса проживання: ${information.location}.

      Поручитель: ${trusted.name}.
      Мобільний телефон: ${trusted.phone}.
      Приходиться кредитуємому: ${trusted.person} 
      `
    );
  };

  return <CustomButton onClick={handleSubmit}>Отправить заявку</CustomButton>;
}
