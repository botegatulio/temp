import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import TabsWithBackgroundImage, {
  TabsWithBackgroundImageProps
} from '../../TabsWithBackgroundImage'

type CasesProps = {
  styleSection?: React.CSSProperties
} & TabsWithBackgroundImageProps

const Cases = ({ styleSection, items }: CasesProps) => {
  const classes = useStyles()
  return (
    <section className={classes.root} style={styleSection}>
      <Container maxWidth="lg">
        <TabsWithBackgroundImage items={items} />
      </Container>
    </section>
  )
}

export default Cases
