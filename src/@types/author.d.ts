export interface Author {
    id: number
    name: string
    zenn: string | null
    github: string | null
    twitter: string | null
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    icon: Icon
}

export interface Icon {
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
    path: null
    url: string
}
