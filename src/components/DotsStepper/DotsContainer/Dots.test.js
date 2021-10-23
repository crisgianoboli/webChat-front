import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'

import DotsContainer from './'

describe('<DotsContainer /> Component', () => {
  const novelties = [{ key: 1, label: 'test 1' }]

  it('renders DotsContainer', () => {
    render(<DotsContainer steps={novelties} />)
    const dot = screen.queryByTestId('dot-0')
    expect(dot).toBeTruthy()
  })

  it('renders DotsContainer with out steps', () => {
    render(<DotsContainer />)
    const dot = screen.queryByTestId('dot-0')
    expect(dot).toBeNull()
  })

  it('click dot', () => {
    const onChangeActive = jest.fn()
    render(<DotsContainer steps={novelties} onChangeActive={onChangeActive} />)
    const dot = screen.queryByTestId('dot-0')
    fireEvent.click(dot)
    expect(onChangeActive).toHaveBeenCalledTimes(1)
  })
})
