import { forwardRef } from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import { ThemeProvider } from '@material-ui/core'

import Drawer from './'
import { Context } from '../../context'
import theme from '../../theme/theme'

describe('<Drawer />', () => {
  const buttonsDrawer = [
    {
      name: 'Buscar',
    },
    {
      name: 'Historial',
      divider: true,
    },
  ]

  const DivRef = forwardRef((props, ref) => (
    <div {...props} ref={ref}>
      test
    </div>
  ))

  it('no rompe al tener un name invalido', () => {
    const invalidButtonsDrawer = [
      {
        name: 'invalido',
      },
    ]

    render(
      <ThemeProvider theme={theme}>
        <Drawer buttons={invalidButtonsDrawer}>
          <DivRef />
        </Drawer>
      </ThemeProvider>
    )

    const invalidDiv = screen.getByTestId('null-Icon')
    expect(invalidDiv).toBeTruthy()
  })

  it('click en buscar', () => {
    const mockDispatch = jest.fn()
    const modalState = {
      drawer: {
        isOpen: false,
      },
    }
    render(
      <Context.Provider
        value={{ dispatch: mockDispatch, state: { modalState } }}
      >
        <ThemeProvider theme={theme}>
          <Drawer buttons={buttonsDrawer}>
            <DivRef />
          </Drawer>
        </ThemeProvider>
      </Context.Provider>
    )
    const searchButton = screen.getByTitle('Buscar')
    fireEvent.click(searchButton)
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })

  it('render divider', () => {
    render(
      <ThemeProvider theme={theme}>
        <Drawer buttons={buttonsDrawer}>
          <DivRef />
        </Drawer>
      </ThemeProvider>
    )
    const hr = screen.getByTestId('hr-Historial')
    expect(hr).toBeTruthy()
  })

  it('render children', () => {
    const mockDispatch = jest.fn()
    const modalState = {
      drawer: {
        isOpen: true,
      },
    }
    render(
      <Context.Provider
        value={{ dispatch: mockDispatch, state: { modalState } }}
      >
        <ThemeProvider theme={theme}>
          <Drawer buttons={buttonsDrawer}>
            <DivRef />
          </Drawer>
        </ThemeProvider>
      </Context.Provider>
    )
    const divTest = screen.getByText('test')
    expect(divTest).toBeTruthy()
  })
})
