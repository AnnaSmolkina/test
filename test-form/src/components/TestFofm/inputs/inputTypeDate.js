import {ElementFormStyled, InputName, SelectItemStyled, SelectStyled} from "../TestForm.styled";

export const InputTypeDate = ({element}) => {
	return (
		<ElementFormStyled>
			<InputName> {element.name} </InputName>
			<SelectStyled>
        <SelectItemStyled id="day" name="day">
				{element.dayOfMonth.map((day, index) => (
					<option key={index}>{day}</option>
				))}
        </SelectItemStyled>
        <SelectItemStyled id="month" name="month">
          {element.months.map((month, index) => (
						<option key={index}>{month}</option>
					))}
        </SelectItemStyled>
				<SelectItemStyled id="year" name="year">
					{element.years.map((year, index) => (
						<option key={index}>{year}</option>
					))}
				</SelectItemStyled>
			</SelectStyled>
		</ElementFormStyled>
	)
};