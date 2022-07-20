export const dataFormArray = [
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
		type: 'email',
	},
	{
		name: 'Date of Birth',
		type: 'date',
		dayOfMonth: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		years: [1995, 1996, 1997, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
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


