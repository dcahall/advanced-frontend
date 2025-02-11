import { classNames } from "@/shared/lib/classNames/classNames"

describe('test classNames utilities', () => {
    test('single class', () => {
        expect(classNames('box')).toBe('box')
    })

    test('single class with positive mods', () => {
        expect(classNames('box', { hovered: true, active: true }))
            .toBe('box hovered active')
    })

    test('single class with mixed mods', () => {
        expect(classNames('box', { hovered: true, active: false }))
            .toBe('box hovered')
    })

    test('single class with mixed mods and additional className', () => {
        expect(classNames('box', { hovered: true, active: undefined }, ['red']))
            .toBe('box hovered red')
    })

    test('only additional class', () => {
        expect(classNames('', {}, ['red']))
            .toBe('red')
    })
})
