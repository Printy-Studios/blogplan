const prefix = 'blogplan:'

const storage = {
    get(key: string) {
        return JSON.parse(localStorage.getItem(prefix + key) || "null");
    },
    set(key: string, value: any) {
        localStorage.setItem(prefix + key, JSON.stringify(value));
    }
}

export default storage;