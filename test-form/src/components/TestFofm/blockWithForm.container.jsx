import {ImageBlock, RightBlock, SubtitleStyled, TitleStyled} from "./TestForm.styled";
import {FormContainer} from "./form.container";

export const BlockWithFormContainer = () => {
	return (
		<RightBlock>
			<ImageBlock src='/form.svg' />
			<TitleStyled>
				New user?
			</TitleStyled>
			<SubtitleStyled>
				Use the form below to create your account.
			</SubtitleStyled>
			<FormContainer/>
		</RightBlock>
	)
}