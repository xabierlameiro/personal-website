import { render, screen } from '../../utils/test/test-utils'
import Index from '../index'

describe('Index page', () => {
    it('should render', () => {
        render(<Index />)
        const main = screen.getByRole('heading', {
            name: /Index/i,
        })
        expect(main).toBeInTheDocument()
    })
})
