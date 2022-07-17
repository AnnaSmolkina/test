import {
	BackgroundWrapper, CheckNameStyled,
	LeftBlockStyled,
	RightBlock,
	SubtitleStyled,
	TextStyled,
	TitleStyled,
	WrapperContainer
} from "./TestForm.styled";


export const TestFormComponent = () => {
	const dataFormArray = [
		{
			name: 'First Name',
			type: 'text',
		},
		{
			name: 'Last Name',
			type: 'text',
		},
		{
			name: 'Nationality',
			type: 'select',
			options: [
				{
					optionName: 'American',
					value: 'american'
				},
				{
					optionName: 'Italian',
					value: 'italian'
				},
				{
					optionName: 'Belarusian',
					value: 'belarusian'
				}
			]
		},
		{
			name: 'E-mail',
			type: 'text',
		},
		{
			name: 'Date of Birth',
			type: 'date',
		},
		{
			name: 'Gender',
			type: 'radio',
			gender: [
				{
					gender: 'Male',
					value: 'male',
					name: 'genderName'

				},
				{
					gender: 'Female',
					value: 'female',
					name: 'genderName'
				}
			],
		},
		{
			name: 'Password',
			type: 'password',
		},
		{
			name: 'Confirm Password',
			type: 'password',
		},
	];

	return (
		<BackgroundWrapper>
		<WrapperContainer>
			<LeftBlockStyled>
				<TextStyled>
					Sign up
				</TextStyled>
			</LeftBlockStyled>
			<RightBlock>
				<TitleStyled>
					New user?
				</TitleStyled>
				<SubtitleStyled>
					Use the form below to create your account.
				</SubtitleStyled>
				<form action="" method="post">
					{dataFormArray.map((element) => (
						 element.type === 'text' || element.type === 'password' ? (
							<div key={element.name}>
								<label htmlFor={element.name}>{element.name}</label>
								<input id={element.name} type={element.type}/>
							</div>
						) : (
							 element.type === 'select' ? (
								 <div>{element.name}
								 <select>
									 {element.options.map((nation)=> (
										 <option key={nation.optionName} value={nation.value}>
											 {nation.optionName}
										 </option>
									 ))}
								 </select>
								 </div>
							 ) : (
								 element.type === 'radio' ? (
									 <div > {element.name}
										 {element.gender.map((gender) => (
											 <CheckNameStyled key={gender.name}>
												 <div>
													 <input id={gender.gender} type={element.type} value={gender.value} name={gender.name}/>
													 <label htmlFor={gender.gender}>{gender.gender}</label>
												 </div>
												 </CheckNameStyled>
										 ))}
									 </div>
								 ) : null
							 )
						 )

					))}
				</form>
			</RightBlock>

		</WrapperContainer>
		</BackgroundWrapper>
	)
}