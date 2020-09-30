export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f73d28c5abce139ec5ca430',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1k6unc66',
                  apiId: 'a5d43650-d305-4c8a-8441-b1a80a61084e'
                },
                {
                  buildHookId: '5f73d28c51d122379d18f63d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g6rp7dhu',
                  apiId: '03cb18f0-43b5-4129-939d-267eb723b684'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sgrvl/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g6rp7dhu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
