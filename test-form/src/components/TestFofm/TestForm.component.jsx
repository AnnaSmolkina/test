import {
	BackgroundWrapper,
	LeftBlockStyled,
	ImageStyled,
	WrapperContainer
} from "./TestForm.styled";
import {BlockWithFormContainer} from "./blockWithForm.container";

export const TestFormComponent = () => (
		<BackgroundWrapper>
		<WrapperContainer>
			<LeftBlockStyled>
				<ImageStyled>
					<img src='/Signup.svg'/>
				</ImageStyled>
			</LeftBlockStyled>
		  <BlockWithFormContainer/>
		</WrapperContainer>
		</BackgroundWrapper>
)