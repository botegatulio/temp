import React from 'react'
import { useTranslation } from 'next-i18next'
import TopBar from 'components/TopBar'
import Footer from 'components/Footer'
import { Language } from 'types/commons'
import { getListOne, getListTwo, getListThree } from './configFooter'
import Dialog from 'components/Dialog'

type SiteLayoutProps = {
  children: React.ReactNode
  language?: Language
}

const SiteLayout = ({ children, language = 'pt' }: SiteLayoutProps) => {
  const { t } = useTranslation('common')
  return (
    <>
      <TopBar language={language} />
      <main>{children}</main>
      <Footer
        listOne={getListOne(language)}
        listTwo={getListTwo(language)}
        listsColumnThree={getListThree(language)}
        linkedinUrl={t('social_networks_link.linkedin')}
        facebookUrl={t('social_networks_link.facebook')}
        instagramUrl={t('social_networks_link.instagram')}
      />
      <Dialog />
    </>
  )
}
export default SiteLayout
