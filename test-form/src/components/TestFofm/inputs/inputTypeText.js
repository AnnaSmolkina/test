import {ElementFormStyled, InputStyled, LabelName} from "../TestForm.styled";
import {useInput} from "../../../hooks/useInput.hook";


export const InputTypeText = ({element, errorMessage, errorEmailMessage}) => {
	const email = useInput('', {isEmpty:true, minLength: 3,isValidEmail: false});
	const text = useInput('', {isEmpty:true, minLength: 3});
	const password = useInput('', {isEmpty:true, minLength: 5});

	return (
			<ElementFormStyled>
				<LabelName htmlFor={element.name}>{element.name}</LabelName>
				<InputStyled  id={element.name}
											type={element.type}
											name={element.name}
											onChange={element.isEmail ? e => email.onChange(e)
												: element.isPassword ? e => password.onChange(e)
												:  e => text.onChange(e) }
											onBlur={element.isEmail ? e => email.onBlur(e)
												: element.isPassword ? e => password.onBlur(e)
												:  e => text.onBlur(e)}
											value={element.isEmail ? email.value
												: element.isPassword ? password.value
															: text.value}
				/>
				{(email.isDirty && email.isEmpty || email.isValidEmail) && <div style={{color:'red',fontSize:'10px'}}>{errorMessage}</div>}
				{(email.isDirty && email.isValidEmail) && <div style={{color:'red',fontSize:'10px'}}>{errorEmailMessage}</div>}
				{(password.isDirty && password.isEmpty) && <div style={{color:'red',fontSize:'10px'}}>{errorMessage}</div>}
				{(text.isDirty && text.isEmpty) && <div style={{color:'red',fontSize:'10px'}}>{errorMessage}</div>}
			</ElementFormStyled>
	)
}