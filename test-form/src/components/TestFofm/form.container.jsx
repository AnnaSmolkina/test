import {dataFormArray} from "./dataForm.constant";
import {InputTypeText} from "./inputs/inputTypeText";
import {InputTypeSelect} from "./inputs/inputTypeSelect";
import {InputTypeRadio} from "./inputs/inputTypeRadio";
import {InputTypeDate} from "./inputs/inputTypeDate";
import {ButtonWithLogInStyled, FormStyled, LogInStyled, SubmitButton} from "./TestForm.styled";
import {useState} from "react";
import {validateIsEmpty} from "../../validators/empty.validator";
import {validateEmail} from "../../validators/email.validator";

export const FormContainer = () => {
	const contactUsForm = {
		invalidEmail: 'Wrong email',
		invalidEmpty: 'This field is required',
	};
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isNameValid, setIsNameValid] = useState(true);
	const [nameVal, setNameVal] = useState('');
	const [emailVal, setEmailVal] = useState('');
	const [isFormValid, setIsFormValid] = useState(true);
	const [isPristine, setIsPristine] = useState(true);

	const validateForm = () => {
		setIsPristine(false);
		if (isNameValid && isEmailValid) {
			setIsFormValid(true);
		} else {
			setIsFormValid(false);
		}
	};

	const handleNameChange = (name) => {
		setNameVal(name);
		if (validateIsEmpty(name)) {
			setIsNameValid(true);
		} else {
			setIsNameValid(false);
		}
		validateForm();
	};

	const handleEmailChange = (email) => {
		setEmailVal(email);
		if (validateIsEmpty(email) && validateEmail(email)) {
			setIsEmailValid(true);
		} else {
			setIsEmailValid(false);
		}
		validateForm();
	};



	const sendData = () => {
		if (isFormValid || isPristine) {
			const data = {
				name: nameVal,
				email: emailVal,
			};
			fetch('https://reqres.in/api/users', {
				method: 'POST',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
		}
		validateForm();
	};
	return (
		<FormStyled action="" method="post">
			{dataFormArray.map((element) => (
				element.type === 'text' || element.type === 'password' ? (
					<InputTypeText element={element}
												 value=""
												 isValid={isNameValid}
												 emptyErrorText={contactUsForm.invalidEmpty || contactUsForm.invalidEmail}
												 handleChange={handleNameChange}
												 handleEmailChange={handleEmailChange}/>
				) : (
					element.type === 'select' ? (
						<InputTypeSelect element={element}/>
					) : (
						element.type === 'radio' ? (
							<InputTypeRadio element={element}/>
						) :  element.type === 'date' ? (
							<InputTypeDate element={element}/>
						) : null
					)
				)
			))}
			<ButtonWithLogInStyled>
				<LogInStyled>
					Have an account?
					<span>Login</span>
				</LogInStyled>
				<SubmitButton  disabled={!isFormValid} onClick={sendData}>
					Complete Signup
				</SubmitButton>
			</ButtonWithLogInStyled>

		</FormStyled>
	)
}