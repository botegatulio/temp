import React from 'react'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import { Box, Grid, Paper, Typography } from '@material-ui/core'
import TableCustom, { TableCustomProps } from 'components/TableCustom'

type TableAndTitleProps = {
  title?: string
  aditionalBanners?: React.ReactNode
  styleSection?: React.CSSProperties
  disableSection?: boolean
} & TableCustomProps

const TableAndTitle = ({
  title = '',
  heads,
  items,
  aditionalBanners,
  styleSection,
  disableSection = false
}: TableAndTitleProps) => {
  const classes = useStyles()

  const renderControl = (children: JSX.Element): JSX.Element => {
    if (disableSection) {
      return children
    }
    return (
      <section id="table" className={classes.root} style={styleSection}>
        {children}
      </section>
    )
  }

  return renderControl(
    <Container maxWidth="lg">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {title && (
              <Typography variant="h1">
                <Box
                  py={1}
                  px={2}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </Typography>
            )}
            <TableCustom heads={heads} items={items} />
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {aditionalBanners && (
            <Box pt={2}>
              <Grid item xs={12}>
                {aditionalBanners}
              </Grid>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default TableAndTitle
