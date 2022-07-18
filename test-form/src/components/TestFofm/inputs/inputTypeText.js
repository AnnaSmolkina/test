import {ElementFormStyled, InputStyled, LabelName} from "../TestForm.styled";

export const InputTypeText = ({element}) => {
	return (
		<ElementFormStyled key={element.name}>
			<LabelName htmlFor={element.name}>{element.name}</LabelName>
			<InputStyled id={element.name} type={element.type}/>
		</ElementFormStyled>
	)
}