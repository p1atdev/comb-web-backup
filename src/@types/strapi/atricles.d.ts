export interface ArticlesData {
    data: ArticlesDatum[]
    meta: Meta
}

export interface ArticlesDatum {
    id: number
    attributes: PurpleAttributes
}

export interface PurpleAttributes {
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
    tags: Tags
}

export interface Author {
    data: AuthorData
}

export interface AuthorData {
    id: number
    attributes: FluffyAttributes
}

export interface FluffyAttributes {
    name: string
    zenn: null | string
    github: null | string
    twitter: null | string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
}

export interface CoverImage {
    data: CoverImageData
}

export interface CoverImageData {
    id: number
    attributes: TentacledAttributes
}

export interface TentacledAttributes {
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

export interface Tags {
    data: TagsDatum[]
}

export interface TagsDatum {
    id: number
    attributes: StickyAttributes
}

export interface StickyAttributes {
    name: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
}

export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}
