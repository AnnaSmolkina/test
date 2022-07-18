import {ElementFormStyled, InputName, SelectItemStyled} from "../TestForm.styled";

export const InputTypeSelect = ({element}) => {
	return (
		<ElementFormStyled>
		<InputName>{element.name}</InputName>
			<SelectItemStyled>
				{element.options.map((nation)=> (
					<option key={nation.optionName} value={nation.value}>
						{nation.optionName}
					</option>
				))}
			</SelectItemStyled>
		</ElementFormStyled>
	)
}