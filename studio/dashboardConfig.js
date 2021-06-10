export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60c2768fd80bda00be11853b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-33eefa7v',
                  apiId: '22bc7222-7165-42a9-96f8-9fce2ff299fb'
                },
                {
                  buildHookId: '60c2768fd80bda008711836c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-51p1fixw',
                  apiId: 'e687438e-5f90-4cf3-ab6b-0ac0eb0a36da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xnslx/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-51p1fixw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
