import {dataFormArray} from "./dataForm.constant";
import {InputTypeText} from "./inputs/inputTypeText";
import {InputTypeSelect} from "./inputs/inputTypeSelect";
import {InputTypeRadio} from "./inputs/inputTypeRadio";
import {InputTypeDate} from "./inputs/inputTypeDate";
import {ButtonWithLogInStyled, FormStyled, LogInStyled, SubmitButton} from "./TestForm.styled";
import { useState} from "react";
import {useInput} from "../../hooks/useInput.hook";



export const FormContainer = () => {

	const [errorMessage, setErrorMessage] = useState('This field is required');
	const [errorEmailMessage, setErrorEmailMessage] = useState('Not correct email');
	const email = useInput('', {isEmpty:true, minLength: 3, isValidEmail: false});
	const text = useInput('', {isEmpty:true, minLength: 3});
	const password = useInput('', {isEmpty:true, minLength: 5});


	return (
		<FormStyled action="" method="post">
			{dataFormArray.map((element) => (
				element.type === 'text' || element.type === 'password' || element.type === 'email' ? (
					<InputTypeText element={element}
												 errorMessage={errorMessage}
												 setErrorMessage={setErrorMessage}
												 key={element.name}
												 errorEmailMessage={errorEmailMessage}

					/>
				) : (
					element.type === 'select' ? (
						<InputTypeSelect key={element.name} element={element}/>
					) : (
						element.type === 'radio' ? (
							<InputTypeRadio key={element.name} element={element}/>
						) :  element.type === 'date' ? (
							<InputTypeDate key={element.name} element={element}/>
						) : null
					)
				)
			))}
			<ButtonWithLogInStyled>
				<LogInStyled>
					Have an account?
					<span>Login</span>
				</LogInStyled>
				<SubmitButton disabled={!email.isInputValid ||
				                        !password.isInputValid ||
				                        !text.isInputValid }
				>
					Complete Signup
				</SubmitButton>
			</ButtonWithLogInStyled>
		</FormStyled>
	)
}