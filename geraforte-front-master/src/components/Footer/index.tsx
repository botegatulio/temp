import React, { useState } from 'react'

import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import Menu from './Menu'
import SocialNetworks, { SocialNetWorksProps } from './SocialNetworks'
import Certificates from './Certificates'
import { WhatsApp } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import ModalWhatsApp from './ModalWhatsApp'

import { MenuItemProps } from './Menu/'

type ContentProps = {
  title: string
  content: string
}

type FooterProps = {
  listOne?: MenuItemProps[]
  listTwo?: MenuItemProps[]
  listsColumnThree?: ContentProps[]
} & SocialNetWorksProps

const Footer = ({
  listOne,
  listTwo,
  listsColumnThree,
  linkedinUrl,
  facebookUrl,
  instagramUrl
}: FooterProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const classes = useStyles()

  const handleOnClickWhatsAppButton = () => {
    setIsModalOpen(true)
  }

  return (
    <section className={classes.root} id="footer">
      <Container maxWidth="lg">
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} md={3}>
            <Menu items={listOne} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Menu items={listTwo} />
          </Grid>
          <Grid item xs={12} md={3}>
            {listsColumnThree &&
              listsColumnThree.map((item, index) => (
                <Box px={2} pt={2} key={index}>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    variant="subtitle1"
                  />
                  <p
                    style={{
                      marginTop: '0.3em'
                    }}
                    className={classes.paragraph}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </Box>
              ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <SocialNetworks
              linkedinUrl={linkedinUrl}
              facebookUrl={facebookUrl}
              instagramUrl={instagramUrl}
            />
            <Certificates />
          </Grid>
        </Grid>
      </Container>
      <IconButton
        size="medium"
        className={classes.wrapperWhatsAppIcon}
        color="default"
        onClick={handleOnClickWhatsAppButton}
      >
        <WhatsApp className={classes.whatsAppIcon} />
      </IconButton>
      <ModalWhatsApp isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  )
}

export default Footer
