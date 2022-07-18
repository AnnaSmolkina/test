import {CheckNameStyled, ElementFormStyled, InputName} from "../TestForm.styled";

export const InputTypeRadio = ({element}) => {
	return (
		<ElementFormStyled>
		<InputName > {element.name} </InputName>
			{element.gender.map((gender) => (
				<CheckNameStyled key={gender.name}>
					<div>
						<input id={gender.gender} type={element.type} value={gender.value} name={gender.name}/>
						<label htmlFor={gender.gender}>{gender.gender}</label>
					</div>
				</CheckNameStyled>
			))}
		</ElementFormStyled>
	)
}