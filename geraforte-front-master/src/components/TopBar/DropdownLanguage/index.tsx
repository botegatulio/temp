import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

import useStyles from './styles'
import clsx from 'clsx'

type LanguagesAvaliable = 'pt' | 'en' | 'es'
type LanguageOption = {
  i18nKey: string
  flagCode: string
  languageCode: LanguagesAvaliable
}

const languagesOptions: LanguageOption[] = [
  {
    i18nKey: 'menu_language.pt',
    flagCode: '/img/flags/brazil_circular_flag.png',
    languageCode: 'pt'
  },
  {
    i18nKey: 'menu_language.en',
    flagCode: '/img/flags/usa_circular_flag.png',
    languageCode: 'en'
  },
  {
    i18nKey: 'menu_language.es',
    flagCode: '/img/flags/spanish_circular_flag.png',
    languageCode: 'es'
  }
]

export default function SplitButton() {
  const router = useRouter()
  const { locale } = router

  const classes = useStyles()
  const [selectedIndex] = useState(locale)

  return (
    <div className={classes.lineBlack}>
      <Container maxWidth="lg">
        <Grid container justify="flex-end" spacing={1}>
          {languagesOptions.map((option) => {
            return (
              <Grid key={option.flagCode} item>
                <a href={`/${option.languageCode}`}>
                  <div
                    style={{ backgroundImage: `url(${option.flagCode})` }}
                    className={clsx({
                      [classes.circularFlag]: true,
                      [classes.circularFlagActive]:
                        option.languageCode === selectedIndex
                    })}
                  />
                </a>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}
