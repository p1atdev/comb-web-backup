import { Author } from "./author"

export interface Article {
    id: number
    title: string
    body: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    description: string
    views: number
    likes: number
    coverImage: CoverImage
    author: Author
    tags: Tag[]
}

export interface CoverImage {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: string | null
    createdAt: Date
    updatedAt: Date
}

export interface Formats {
    thumbnail: Thumbnail
}

export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path: string | null
    url: string
}

export interface Tag {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
}
