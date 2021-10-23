import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './'
import { Context } from '../../context'

describe('<Modal />', () => {
  const open = true
  const toggleModal = jest.fn()

  it('children', () => {
    render(
      <Modal open={open}>
        <div>test</div>
      </Modal>
    )
    expect(screen.getByText('test')).toBeTruthy()
  })

  it('customToggle', () => {
    render(
      <Modal open={open} customToggle={toggleModal}>
        <div>test</div>
      </Modal>
    )

    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(toggleModal).toHaveBeenCalledTimes(1)
  })

  it('render title', () => {
    render(
      <Modal open={open} title="title">
        <div>test</div>
      </Modal>
    )

    expect(screen.getByText('title')).toBeTruthy()
  })

  it('toggleModal', () => {
    const mockDispatch = jest.fn()
    render(
      <Context.Provider value={{ dispatch: mockDispatch, state: {} }}>
        <Modal open={open} toggleModal={toggleModal}>
          <div>test</div>
        </Modal>
      </Context.Provider>
    )

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
