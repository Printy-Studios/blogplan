export type StorageKeyName = 'articles' | 'sections' | 'max_ids'

export type StorageKeys = Record<StorageKeyName, string>

const storage_keys: StorageKeys = {
    articles: 'articles',
    sections: 'sections',
    max_ids: 'max_ids'
}

export default storage_keys;