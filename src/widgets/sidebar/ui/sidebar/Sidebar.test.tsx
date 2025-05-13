import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from "./Sidebar"
import { renderComponent } from "@/shared/lib/test"

describe('Sidebar test', () => {
    test('render test', () => {
        renderComponent(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle test', () => {
        renderComponent(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleBtn)
        const sidebar = screen.getByTestId('sidebar')

        expect(sidebar).toHaveClass('collapsed')
    })
})
