import React from 'react'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'next-i18next'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import GetAppIcon from '@material-ui/icons/GetApp'
import { gaEvent } from 'utils/ga'

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      color: '#1d1d1c',
      fontSize: 14,
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  })
)

type ButtonDownloadFileProps = {
  urlFile: string
}

const ButtonDownloadFile = ({ urlFile }: ButtonDownloadFileProps) => {
  const classes = useStyles()
  const { t } = useTranslation('common')

  const handleOnClick = () => {
    gaEvent({
      category: 'ContentTable',
      action: 'DownloadFile'
    })
  }
  return (
    <div>
      <Button
        onClick={handleOnClick}
        size="small"
        variant="text"
        color="inherit"
        href={urlFile}
        target="_blank"
        className={classes.button}
        endIcon={<GetAppIcon />}
        disableFocusRipple
      >
        {t('table_content.download_file')}
      </Button>
    </div>
  )
}

export default ButtonDownloadFile
