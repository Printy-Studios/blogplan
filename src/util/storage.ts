const prefix = 'blogplan:'

const storage = {
    /**
     * Get a storage property
     * @param key Key of property
     * @returns Stored property or null if property not found
     */
    get(key: string) {
        return JSON.parse(localStorage.getItem(prefix + key) || "null");
    },
    set(key: string, value: any) {
        localStorage.setItem(prefix + key, JSON.stringify(value));
    }
}

export default storage;