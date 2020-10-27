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
                  buildHookId: '5f97bd9b114ace1477e5d997',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ygrrzyri',
                  apiId: 'a541d61d-b86a-45af-820b-28a49ced336d'
                },
                {
                  buildHookId: '5f97bd9bd16a3512c1714c05',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yz1aubvk',
                  apiId: '5cad5286-f578-4629-b293-09d4c644359a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/websitegardener/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yz1aubvk.netlify.app',
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
