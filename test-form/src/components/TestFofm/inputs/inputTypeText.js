import {ElementFormStyled, InputErrorStyled, InputStyled, LabelName} from "../TestForm.styled";
import {useState} from "react";

export const InputTypeText = ({element,
																value = '',
																handleEmailChange= () => {},
																handleChange = () => {},
																isValid = true,
																errorText = '',
																emptyErrorText = '',}) => {
	const [internalValue, setInternalValue] = useState(value);
	const onChange = (event) => {
		setInternalValue(event.target.value);
	};
	const onBlur = () => {
		handleChange(internalValue);
	};
	const errorMessage =
		!isValid && internalValue.length !== 0 ? errorText : emptyErrorText;

	return (
		<ElementFormStyled key={element.name}>
			<LabelName htmlFor={element.name}>{element.name}</LabelName>
			<InputStyled
									 isValid={isValid}
									 text={internalValue}
									 onChange={onChange}
									 onBlur={onBlur} id={element.name} type={element.type}/>
			{isValid ? null : <InputErrorStyled>{errorMessage}</InputErrorStyled>}
		</ElementFormStyled>
	)
}