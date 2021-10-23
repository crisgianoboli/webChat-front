import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import DotsStepper from './index'

describe('<DotStepper />', () => {
  it('renders DotStepper', () => {
    const queryClient = new QueryClient()
    const component = render(
      <QueryClientProvider client={queryClient}>
        <DotsStepper />
      </QueryClientProvider>
    )
    expect(component).not.toBeNull()
  })
})

//TODO hacer test para el componente dot
