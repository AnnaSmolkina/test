import styled from 'styled-components';

export const BackgroundWrapper = styled.div `
  max-width: 800px;
	min-height: 600px;
	background: #F2F2F2;
`;

export const WrapperContainer = styled.div `
  max-width: 665px;
	min-height: 481px;
	margin: auto;
	display: flex;
	flex-direction: row;
	padding-top: 60.48px;
`;

export const LeftBlockStyled = styled.div `
	width: 137.2px;
	min-height: 481px;
	background: #5A61ED;
`;

export const ImageStyled = styled.div `
	padding: 296.02px 0 0 68.5px;
`;

export const RightBlock = styled.div `
	position: relative;
	${({ theme }) => theme.blockFontFamily};
  width: 75%;
	min-height: 481px;
	background-color: white;
	padding-left: 20.8px;
`;

export const ImageBlock = styled.img `
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: -1;
`;
export const TitleStyled = styled.div `
	font-size: 22px;
	line-height: 26px;
	letter-spacing: -0.46px;
	padding-top: 38.52px;
`;


export const InputName = styled.div `
	font-size: 12px;
	line-height: 14px;
	color: #7C7C7C;
	padding-bottom: 4.9px;
`;

export const LabelName = styled.label `
	font-size: 12px;
	line-height: 14px;
	color: #7C7C7C;
`;

export const SubtitleStyled = styled.div `
	font-size: 14px;
	line-height: 16px;
`;

export  const CheckBlockStyled = styled.div`
  display: flex;
	flex-direction: row;
`;

export  const CheckNameStyled = styled.div`
  padding-right: 19px;
	font-size: 14px;
	line-height: 16px;
`;
export  const ElementFormStyled = styled.div`
  display: flex;
	flex-direction: column;
	width: 47.1%;
	padding: 16.18px 2.9% 0 0;
	 @media (max-width: 560px) {
		 width: 100%;
	 }
`;

export  const SelectStyled = styled.div`
  display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export  const InputStyled = styled.input`
	height: 20px;
	border: none;
	border-bottom: solid #F2F2F2;
`;

export  const FormStyled = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export  const SelectItemStyled = styled.select`
	height: 20px;
	border: none;
	border-bottom: solid #F2F2F2;
`;

export const InputErrorStyled = styled.div`
  color: red;
	font-size: 8px;
`;

export const SubmitButton = styled.button`
 width: 154px;
	height: 32px;
	background: #5A61ED;
	border: 0.5px solid #FFFFFF;
	${({ theme }) => theme.textBlockFont};
	font-size: 14px;
	line-height: 18px;
	color: #FFFFFF;
	margin-right: 50px;
	cursor: pointer;
`;

export const ButtonWithLogInStyled = styled.div`
	width: 100%;
	margin-top: 20%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
`;

export const LogInStyled = styled.div`
	font-size: 13px;
	line-height: 15px;
	color: #000000;
	span {
		color: #5A61ED;
		border-bottom: solid 1px #5A61ED;
		padding-left: 5px;
	}
`;