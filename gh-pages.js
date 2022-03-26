var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'build',
        repo: 'https://github.com/arupkumargupta/amsler-grid.git', // Update to point to your repository  
        user: {
            name: 'Arup Kumar Gupta', // update to use your name
            email: 'arup.shibai@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Amsler Deploy Complete!')
    }
)