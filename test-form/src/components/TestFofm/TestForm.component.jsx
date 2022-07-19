import {
	BackgroundWrapper, ImageBlock,
	LeftBlockStyled,
	RightBlock,
	SubtitleStyled,
	ImageStyled,
	TitleStyled,
	WrapperContainer
} from "./TestForm.styled";
import {FormContainer} from "./form.container";

export const TestFormComponent = () => (
		<BackgroundWrapper>
		<WrapperContainer>
			<LeftBlockStyled>
				<ImageStyled>
					<img src='/Signup.svg'/>
				</ImageStyled>
			</LeftBlockStyled>
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
		</WrapperContainer>
		</BackgroundWrapper>
)