export type Mods = Record<string, string | boolean | undefined>

export const classNames = (cls: string = '', mods: Mods = {}, additional: Array<string | undefined> = []): string => {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([className, val]) => Boolean(val))
            .map(([className]) => className),
        ...additional.filter(Boolean)
    ].join(' ').trim()
}
