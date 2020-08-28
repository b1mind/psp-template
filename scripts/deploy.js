const ghpages = require('gh-pages')
//You must add your own info and repo
ghpages.publish(
  '__sapper__/export/svelte-template',
  {
    branch: 'master',
    repo: '<your-githubrepo.git>',
    user: {
      name: '<Your-username>',
      email: '<Your-github-emailId>',
    },
  },
  () => {
    console.log('Deploy Complete!')
  },
)
