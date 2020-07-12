export const Menu = [
  {
    title: "blog",
    post_category: 'all'
  },
  {
    title: "comece aqui",
    post_category: 1
  },
  {
    title: "na prática",
    post_category: 2,
    displaySub: 'none',
    submenu: [
      {
        title: "projetos",
        post_category: 5
      },
      {
        title: "dicas práticas",
        post_category: 6
      },
      {
        title: "alimentação",
        post_category: 4,
        displaySub: 'none',
        submenu: [
          {
            title: "dicas",
            post_category: 7            
          },
          {
            title: "receitas",
            post_category: 8
          }
        ]
      }
    ]
  },
  {
    title: "entenda mais",
    post_category: 3
  },
]
