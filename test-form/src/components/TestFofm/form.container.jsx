import {dataFormArray} from "./dataForm.constant";
import {InputTypeText} from "./inputs/inputTypeText";
import {InputTypeSelect} from "./inputs/inputTypeSelect";
import {InputTypeRadio} from "./inputs/inputTypeRadio";
import {InputTypeDate} from "./inputs/inputTypeDate";
import {FormStyled} from "./TestForm.styled";

export const FormContainer = () => {
	return (
		<FormStyled action="" method="post">
			{dataFormArray.map((element) => (
				element.type === 'text' || element.type === 'password' ? (
					<InputTypeText element={element}/>
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
		</FormStyled>
	)
}