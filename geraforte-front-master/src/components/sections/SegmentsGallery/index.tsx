import React from 'react'
import useStyles from './styles'

type SegmentsGalleyProps = {
  children: React.ReactNode
}
const SegmentsGallery = ({ children }: SegmentsGalleyProps) => {
  const classes = useStyles()
  return (
    <section id="carousel" className={classes.root}>
      <div className={classes.container}>{children}</div>
    </section>
  )
}

export default SegmentsGallery
