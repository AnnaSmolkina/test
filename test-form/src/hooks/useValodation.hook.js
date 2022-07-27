import {useEffect, useState} from "react";

export const useValidation = (value, validations) => {
	const [isEmpty, setIsEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false );
	const [maxLengthError, setMaxLengthError] = useState(false );
	const [isValidEmail, setIsValidEmail] = useState(false );
	const [errorMessage, setErrorMessage] = useState('');
	const [isInputValid, setIsInputValid] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setMinLengthError(true) && setErrorMessage('Not correct') : setMinLengthError(false);
					break;
				case 'maxLength':
					value.length > validations[validation] ? setMaxLengthError(true) && setErrorMessage('Not correct') : setMaxLengthError(false);
					break;
				case 'isEmpty':
					value ? setIsEmpty(false) : setIsEmpty(true) && setErrorMessage('This field is required');
					break
				case 'isEmail':
					const re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
					  re.test(String(value).toLowerCase()) ? setIsValidEmail(true)  : setIsValidEmail(false) && setErrorMessage('Email is not correct');
					break

			}
		}
	}, [value]);

	useEffect(()=> {
		if(isEmpty || maxLengthError || minLengthError || isValidEmail) {
			setIsInputValid(false)
		} else {
			setIsInputValid(true)
		}
	}, [isEmpty || maxLengthError || minLengthError || isValidEmail ]);

	return {
		isEmpty,
		minLengthError,
		maxLengthError,
		errorMessage,
		isValidEmail,
		isInputValid
	}
};