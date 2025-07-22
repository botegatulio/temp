import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Typography
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from './styles'
import Paper from '@material-ui/core/Paper'
type ItemAccordion = {
  title: string
  content: string
}

type SimpleAccordionProps = {
  items?: ItemAccordion[]
  backgroundUrlImage?: string
}

const SimpleAccordion = ({
  items,
  backgroundUrlImage
}: SimpleAccordionProps) => {
  const classes = useStyles({ backgroundUrlImage })
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) =>
    (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
  return (
    <section className={classes.root} id="simple-accordion">
      {items && (
        <Container maxWidth="lg">
          <Paper elevation={4}>
            {items.map((item, index, arr) => (
              <Grid
                container
                spacing={2}
                key={`${index}--${item.title}`}
                className={classes.container}
              >
                <Grid item xs={12}>
                  <Accordion
                    expanded={expanded === `panel-${index}`}
                    onChange={handleChange(`panel-${index}`)}
                    elevation={0}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon className={classes.expandIcon} />
                      }
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <Typography variant="h5">
                        <Box fontWeight="fontWeightMedium">{item.title}</Box>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ flexWrap: 'wrap' }}>
                      <div
                        style={{ width: '100%' }}
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </AccordionDetails>
                  </Accordion>
                  {index + 1 !== arr.length && <Divider />}
                </Grid>
              </Grid>
            ))}
          </Paper>
        </Container>
      )}
    </section>
  )
}

export default SimpleAccordion
