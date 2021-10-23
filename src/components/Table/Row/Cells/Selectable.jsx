const Selectable = Component => props => {
  const { headCells, keyCell, ...otherProps } = props

  const isSelect = name => {
    let select
    headCells.forEach(cell => {
      if (cell.id === name) {
        return (select = cell.isSelected)
      }
    })
    return select
  }

  return <>{isSelect(keyCell) && <Component {...otherProps} />}</>
}

export default Selectable
