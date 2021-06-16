import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Home, { getStaticProps } from '../../pages'
import { stripe } from "../../services/stripe";

jest.mock('next/router')
jest.mock('next-auth/client', () => {
  return { useSession: () => [null, false] }
})

jest.mock('../../services/stripe')

describe('Home Page', () => {
  it('should render correctly', () => {

    render(<Home product={{priceId: 'fake-priceId', amount: '$9.90'}}/>)

    expect(screen.getByText('for $9.90 month')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const retrieveStripePricesMocked = mocked(stripe.prices.retrieve)

    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 990
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceID: 'fake-price-id',
            amount: '$9.90'
          }
        }
      })
    )
  })

})