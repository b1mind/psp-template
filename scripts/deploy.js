const ghpages = require('gh-pages')

ghpages.publish(
	'./dist/build/',
	{
		branch: 'master',
		repo: 'https://github.com/b1m1nd/psp-template',
		user: {
			name: 'b1m1nd',
			email: 'brent@1mindsolutions.com',
		},
	},
	() => {
		console.log('Deploy Complete!')
	},
)
