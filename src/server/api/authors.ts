import config from "#config"
import { AuthorsData, Datum } from "../../@types/strapi/authors"
import { Author } from "../../@types/author"

function parseAuthor(authorsData: AuthorsData) {
    return authorsData.data.map((authorData: Datum) => {
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
    })
}

export default async () => {
    const response = await fetch(config.STRAPI_URL + `/api/authors?populate=*`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const authorsData: AuthorsData = await response.json()
    const authors: Author[] = parseAuthor(authorsData)
    console.log(authors)
    return authors
}
