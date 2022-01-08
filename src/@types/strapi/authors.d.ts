export interface AuthorsData {
    data: Datum[]
    meta: Meta
}

export interface Datum {
    id: number
    attributes: DatumAttributes
}

export interface DatumAttributes {
    name: string
    zenn: null | string
    github: null | string
    twitter: null | string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    icon: Icon
}

export interface Icon {
    data: Data
}

export interface Data {
    id: number
    attributes: DataAttributes
}

export interface DataAttributes {
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

export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}
