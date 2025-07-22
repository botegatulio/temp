import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Hidden,
  Typography
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from './styles'

type ItemAccordion = {
  title: string
  content: string
  urlImg: string
}

type TwoColumnsWithAccordionProps = {
  title: string
  text: string
  items?: ItemAccordion[]
  backgroundUrlImage?: string
}

const TwoColumnsWithAccordion = ({
  title = '',
  text = '',
  items,
  backgroundUrlImage
}: TwoColumnsWithAccordionProps) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) =>
    (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
  return (
    <section
      className={classes.root}
      id="two-columns-with-accordion"
      style={{
        backgroundImage: backgroundUrlImage
          ? `url(${backgroundUrlImage})`
          : undefined
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6}>
            <Typography variant="h1">
              <Box dangerouslySetInnerHTML={{ __html: title }} mb={1} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item className={classes.wrappText}>
            <Box dangerouslySetInnerHTML={{ __html: text }} />
          </Grid>
        </Grid>
      </Container>
      {items && (
        <Container maxWidth="lg">
          {items.map((item, index) => (
            <Grid container spacing={2} key={`${index}--${item.title}`}>
              <Grid item xs={12} md={6}>
                <Accordion
                  expanded={expanded === `panel-${index}`}
                  onChange={handleChange(`panel-${index}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="secondary" />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography className={classes.heading}>
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ flexWrap: 'wrap' }}>
                    <div
                      style={{ width: '100%' }}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    <Box style={{ width: '100%' }}>
                      <Hidden mdUp>
                        <img
                          src={item.urlImg}
                          alt=""
                          className={classes.imgContent}
                        />
                      </Hidden>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12} md={6}>
                {expanded === `panel-${index}` && (
                  <Hidden mdDown>
                    <img
                      src={item.urlImg}
                      alt=""
                      className={classes.imgContent}
                    />
                  </Hidden>
                )}
              </Grid>
            </Grid>
          ))}
        </Container>
      )}
    </section>
  )
}

export default TwoColumnsWithAccordion
