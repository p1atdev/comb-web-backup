import config from "#config"
import { ArticlesData, ArticlesDatum, TagsDatum } from "../../@types/strapi/atricles"
import { Article } from "../../@types/article"
import getAuthor from "./author"

async function parseArticle(articlesData: ArticlesData) {
    return await Promise.all(
        articlesData.data.map(async (articleData: ArticlesDatum) => {
            const { id, attributes } = articleData

            const {
                title,
                body,
                createdAt,
                updatedAt,
                publishedAt,
                description,
                views,
                likes,
                coverImage,
                author,
                tags,
            } = attributes

            const authorData = await getAuthor(author.data.id)

            const article: Article = {
                id: id,
                title: title,
                body: body,
                createdAt: createdAt,
                updatedAt: updatedAt,
                publishedAt: publishedAt,
                description: description,
                views: views,
                likes: likes,
                coverImage: {
                    id: coverImage.data.id,
                    name: coverImage.data.attributes.name,
                    alternativeText: coverImage.data.attributes.alternativeText,
                    caption: coverImage.data.attributes.caption,
                    width: coverImage.data.attributes.width,
                    height: coverImage.data.attributes.height,
                    formats: coverImage.data.attributes.formats,
                    hash: coverImage.data.attributes.hash,
                    ext: coverImage.data.attributes.ext,
                    mime: coverImage.data.attributes.mime,
                    size: coverImage.data.attributes.size,
                    url: coverImage.data.attributes.url,
                    previewUrl: coverImage.data.attributes.previewUrl,
                    provider: coverImage.data.attributes.provider,
                    provider_metadata: coverImage.data.attributes.provider_metadata,
                    createdAt: coverImage.data.attributes.createdAt,
                    updatedAt: coverImage.data.attributes.updatedAt,
                },
                author: authorData,
                tags: tags.data.map((tagData: TagsDatum) => {
                    return {
                        id: tagData.id,
                        name: tagData.attributes.name,
                        createdAt: tagData.attributes.createdAt,
                        updatedAt: tagData.attributes.updatedAt,
                        publishedAt: tagData.attributes.publishedAt,
                    }
                }),
            }

            return article
        })
    )
}

export default async () => {
    const response = await fetch(config.STRAPI_URL + "/api/articles?populate=*", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const articlesData: ArticlesData = await response.json()
    const articles: Article[] = await parseArticle(articlesData)
    return articles
}
