export const categories = {
    0:  "Blog",
    1:	"Comece aqui",
    2:	"Na prática",
    3:	"Entenda mais",
    4:	"Alimentação",
    5:	"Projetos",
    6:	"Dicas práticas",
    7:	"Dicas de alimentação",
    8:  "Receitas",
    9:  "Plantar"
}

export function getMostRelatedCategory(post_categories) {
    let relevance = {
        "Comece aqui":          9,
        "Alimentação":          8,
        "Plantar":              7,
        "Entenda mais":         6,
        "Projetos":             5,
        "Na prática":           4,
        "Receitas":             3,
        "Dicas de alimentação": 2,
        "Dicas práticas":       1,
        "Blog":                 0
    }
    let most_related = {relevance: 0, id: 9};
    post_categories.forEach(category => {
        let category_relevance = relevance[category.category_description];
        if (category_relevance > most_related.relevance) {
            most_related.relevance = category_relevance;
            most_related.id = category.category_id;
        }
    });
    return most_related.id;
}