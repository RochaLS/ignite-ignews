import { render, screen } from '@testing-library/react'
import { ActiveLink } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {
    it('renders correctly', () => {
      render(
        <ActiveLink href='/' activeClassName='active'>
          <a>Home</a>
        </ActiveLink>
      )

      expect(screen.getByText('Home')).toBeInTheDocument()
    })

  it('applies the active class to the anchor', () => {
    render(
      <ActiveLink href='/' activeClassName='active'>
        <a>Home</a>
      </ActiveLink>
    )

    expect(screen.getByText('Home')).toHaveClass('active')
  })
})

