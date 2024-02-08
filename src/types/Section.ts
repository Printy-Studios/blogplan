export type Section = {
    id: number,
    name: string,
    article_id: number
}

export type SectionCreate = Omit<Section, 'id'>;