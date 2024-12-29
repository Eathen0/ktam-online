const cache: { [key: string]: any } = {}

export function cacheSet(key: string, value: any) {
    cache[key] = value;
}

export function cacheGet<T = any>(key: string): T {
    return cache[key];
}