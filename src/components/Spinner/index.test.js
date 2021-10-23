import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import withSpinner from './'

describe('whitSpinner HOC', () => {
  const Fake = ({ name }) => <div>{name}</div>

  it('render spinner', () => {
    const FakeWithSpinner = withSpinner(Fake)

    render(<FakeWithSpinner name="fake component" isLoading={true} />)

    const spinner = screen.getByRole('progressbar')
    const fake = screen.queryByText('fake component')

    expect(spinner).toBeTruthy()
    expect(fake).toBeFalsy()
  })

  it('render fake component and other props', () => {
    const FakeWithSpinner = withSpinner(Fake)

    render(<FakeWithSpinner name="fake component" isLoading={false} />)

    const spinner = screen.queryByRole('progressbar')
    const fake = screen.getByText('fake component')

    expect(spinner).toBeFalsy()
    expect(fake).toBeTruthy()
  })
})
