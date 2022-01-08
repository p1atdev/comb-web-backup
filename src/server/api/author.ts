import config from "#config"
import { Datum } from "../../@types/strapi/authors"
import { Author } from "../../@types/author"

function parseAuthor(authorData: Datum) {
    const { id, attributes } = authorData

    const { name, zenn, github, twitter, createdAt, updatedAt, publishedAt } = attributes

    const auhtor: Author = {
        id: id,
        name: name,
        zenn: zenn,
        github: github,
        twitter: twitter,
        createdAt: createdAt,
        updatedAt: updatedAt,
        publishedAt: publishedAt,
        icon: authorData.attributes.icon.data.attributes,
    }

    return auhtor
}

export default async (id: number) => {
    const response = await fetch(config.STRAPI_URL + `/api/authors/${id}?populate=*`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const authorsData: Datum = (await response.json()).data
    const author: Author = parseAuthor(authorsData)
    return author
}
