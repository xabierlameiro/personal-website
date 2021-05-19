import { render, screen } from '../../utils/test/test-utils'
import Coverage from '../coverage'

describe('Index page', () => {
    it('should render', () => {
        render(<Coverage />)
        const main = screen.getByRole('heading', {
            name: /All files/i,
        })
        expect(main).toBeInTheDocument()
    })
})
