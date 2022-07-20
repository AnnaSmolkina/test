import {dataFormArray} from "./dataForm.constant";
import {InputTypeText} from "./inputs/inputTypeText";
import {InputTypeSelect} from "./inputs/inputTypeSelect";
import {InputTypeRadio} from "./inputs/inputTypeRadio";
import {InputTypeDate} from "./inputs/inputTypeDate";
import {ButtonWithLogInStyled, FormStyled, LogInStyled, SubmitButton} from "./TestForm.styled";
import {useEffect, useState} from "react";
import {validateEmail} from "../../validators/email.validator";
import {validateIsEmpty} from "../../validators/empty.validator";


export const FormContainer = () => {
	const [formIsValid, setFormIsValid] = useState(false);
	const [errorMessage, setErrorMessage] = useState('This field is required');


	useEffect(()=> {
		if(errorMessage) {
			setFormIsValid(false)
		} else {
			setFormIsValid(true)
		}
	}, [errorMessage]);


	return (
		<FormStyled action="" method="post">
			{dataFormArray.map((element) => (
				element.type === 'text' || element.type === 'password' || element.type === 'email' ? (
					<InputTypeText element={element}
												 errorMessage={errorMessage}
												 setErrorMessage={setErrorMessage}
					/>
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
				<SubmitButton disabled={!formIsValid}>
					Complete Signup
				</SubmitButton>
			</ButtonWithLogInStyled>

		</FormStyled>
	)
}