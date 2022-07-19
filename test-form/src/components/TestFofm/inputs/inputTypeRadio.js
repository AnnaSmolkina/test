import {CheckBlockStyled, CheckNameStyled, ElementFormStyled, InputName} from "../TestForm.styled";

export const InputTypeRadio = ({element}) => {
	return (
		<ElementFormStyled>
		<InputName > {element.name} </InputName>
			<CheckBlockStyled >
			{element.gender.map((gender) => (
				<CheckNameStyled key={gender.name}>
						<input id={gender.gender} type={element.type} value={gender.value} name={gender.name}/>
						<label htmlFor={gender.gender}>{gender.gender}</label>
				</CheckNameStyled>
			))}
			</CheckBlockStyled>
		</ElementFormStyled>
	)
}