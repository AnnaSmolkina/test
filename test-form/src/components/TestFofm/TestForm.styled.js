import styled from 'styled-components';

export const BackgroundWrapper = styled.div `
  max-width: 800px;
	height: 600px;
	background: #F2F2F2;
`;

export const WrapperContainer = styled.div `
  max-width: 665px;
	height: 481px;
	margin: auto;
	display: flex;
	flex-direction: row;
	border: solid;
`;

export const LeftBlockStyled = styled.div `
	width: 25%;
	height: 481px;
	background: #5A61ED;
//	display: flex;
//	justify-content: end;
`;

export const TextStyled = styled.div `
	min-width:162px;
	font-family: 'PT Sans',serif;
	font-style: normal;
	font-weight: 400;
	font-size: 49px;
	line-height: 63px;
	letter-spacing: 0.5px;
	color: #FFFFFF;
	transform: rotate(-90deg);
`;

export const RightBlock = styled.div `
	position: relative;
	font-family: 'WorkSans',sans-serif;
  width: 75%;
	height: 481px;
	background-color: white;
	
`;

export const ImageBlock = styled.img `
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 0;
`;
export const TitleStyled = styled.div `
	font-size: 22px;
	line-height: 26px;
	letter-spacing: -0.46px;
	color: #111111;
`;


export const InputName = styled.div `
	font-size: 12px;
	line-height: 14px;
	color: #7C7C7C;
`;

export const LabelName = styled.label `
	font-size: 12px;
	line-height: 14px;
	color: #7C7C7C;
`;

export const SubtitleStyled = styled.div `
	font-family: 'WorkSans',sans-serif;
	font-size: 14px;
	line-height: 16px;
	color: #111111;
`;

export  const CheckNameStyled = styled.div`
  display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export  const ElementFormStyled = styled.div`
  display: flex;
	flex-direction: column;
	width: 45%;
`;

export  const SelectStyled = styled.div`
  display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export  const InputStyled = styled.div`
	height: 20px;
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
