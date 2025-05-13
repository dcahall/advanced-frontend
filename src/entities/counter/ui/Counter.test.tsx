import { screen } from '@testing-library/react'
import { Counter } from "./Counter"
import { renderComponent } from "@/shared/lib/test"

import { type StateSchema } from "@/app/providers/store"
import userEvent from '@testing-library/user-event'

describe('Counter test', () => {
    test('render test', () => {
        const store: DeepPartial<StateSchema> = {
            counter: {
                value: 10
            }
        }

        renderComponent(<Counter/>, { initialState: store })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })
    test('decrement', async () => {
        const store: DeepPartial<StateSchema> = {
            counter: {
                value: 10
            }
        }

        renderComponent(<Counter/>, { initialState: store })
        await userEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
    test('increment', async () => {
        const store: DeepPartial<StateSchema> = {
            counter: {
                value: 10
            }
        }

        renderComponent(<Counter/>, { initialState: store })
        await userEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
})
