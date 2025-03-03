import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from "./Sidebar"
import { renderWithTranslations } from "@/shared/lib/test/renderWithTranslations/renderWithTranslations"

describe('Sidebar test', () => {
    test('render test', () => {
        renderWithTranslations(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle test', () => {
        renderWithTranslations(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleBtn)
        const sidebar = screen.getByTestId('sidebar')

        expect(sidebar).toHaveClass('collapsed')
    })
})
