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
  width: 75%;
	height: 481px;
	background: white;
`;

export const TitleStyled = styled.div `
	font-family: 'WorkSans',serif;
	font-size: 22px;
	line-height: 26px;
	letter-spacing: -0.46px;
	color: #111111;
`;

export const SubtitleStyled = styled.div `
	font-family: 'WorkSans',serif;
	font-size: 22px;
	line-height: 26px;
	letter-spacing: -0.46px;
	color: #111111;
`;

export  const CheckNameStyled = styled.div`
display: flex;
	flex-direction: row;
	justify-content: space-around;
`;