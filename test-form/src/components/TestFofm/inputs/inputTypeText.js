import {ElementFormStyled, InputStyled, LabelName} from "../TestForm.styled";
import {useState} from "react";


export const InputTypeText = ({element,
																setErrorMessage,
																errorMessage,
}) => {
	const [field, setField] = useState('');
	const [fieldIsDirty, setFieldIsDirty] = useState(false);

	const blurHandler = (e)=> {
		switch (e.target.name) {
			case 'field':
				setFieldIsDirty(true)
				break
		}
	};

	const fieldHandler = (e) => {
		setField(e.target.value)
		if (e.target.value.length < 3 || e.target.value.length > 0 ) {
			setErrorMessage ('')
		} else {
			setErrorMessage ('Min 3 symbols')
		}
	}
	return (
		<ElementFormStyled key={element.name}>
			<LabelName htmlFor={element.name}>{element.name}</LabelName>
			<InputStyled  onBlur={e => blurHandler(e)}
										onChange={e => fieldHandler(e)}
										id={element.name}
										type={element.type}
										name='field'
										value={field}/>
			{(fieldIsDirty && errorMessage) && <div style={{color:'red',fontSize:'10px'}}>{errorMessage}</div>}
		</ElementFormStyled>
	)
}