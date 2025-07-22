import React from 'react'
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      color: theme.palette.common.white,
      backgroundColor: '#1d1d1c',
      borderBottom: 0,
      textAlign: 'center',
      '&:last-child': {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
      },
      '&:first-child': {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
      }
    },
    body: {
      fontSize: 15,
      whiteSpace: 'nowrap'
    }
  })
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover
      }
    }
  })
)(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
})

export type TableCustomProps = {
  heads?: string[]
  items?: Array<Array<string | React.ReactNode>>
}

export default function TableCustom({ heads, items }: TableCustomProps) {
  const classes = useStyles()

  return (
    <TableContainer>
      <Table
        className={classes.table}
        size="small"
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            {heads &&
              heads.map((item) => {
                return (
                  <StyledTableCell
                    key={item}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                )
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {items &&
            items.map((itemInternal, index) => (
              <StyledTableRow key={`row-${index}`}>
                {itemInternal.map((cell, indexCel) => (
                  <StyledTableCell align="center" key={`cel-${indexCel}`}>
                    {cell}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
