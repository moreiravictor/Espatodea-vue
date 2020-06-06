export const Menu = [
  {
    title: "blog",
    post_category: 'all',
  },
  {
    title: "meio ambiente",
    post_category: 0,
    displaySub: 'none',
    submenu: [
      {
        title: "Dicas de Meio Ambiente",
        post_category: 1,
      },
      {
        title: "Projetos",
        post_category: 2,
        displaySub: 'none',
        submenu: [
          {
            title: "Nossos Projetos",
            post_category: 3,
          },
          {
            title: "Outros Projetos",
            post_category: 4,
          }
        ]
      },
    ]
  },
  {
    title: "entretenimento",
    post_category: 5,
  },
  {
    title: "alimentação",
    post_category: 6,
    displaySub: 'none',
    submenu: [
      {
        title: "Dicas de alimentação",
        post_category: 7,
      },
      {
        title: "Receitas",
        post_category: 8,
      },
    ]
  },
  {
    title: "entenda mais",
    post_category: 9,
  },
  {
    title: "comece aqui",
    post_category: 10,
  }
]
