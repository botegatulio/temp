import React from 'react'

import useStyles from './styles'

export type CardImageWithThumbTopProps = {
  topThumbUrl?: string
  imageUrl: string
  disableTopThumb?: boolean
  href?: string
}

export default function CardImageWithThumbTop({
  topThumbUrl,
  imageUrl,
  disableTopThumb = false,
  href = '#'
}: CardImageWithThumbTopProps) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {!disableTopThumb && topThumbUrl && (
        <img src={topThumbUrl} alt="foo" className={classes.topThumb} />
      )}
      <a href={href}>
        <img src={imageUrl} alt="foo" className={classes.image} />
      </a>
    </div>
  )
}
