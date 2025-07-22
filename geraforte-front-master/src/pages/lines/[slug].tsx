import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPaths, GetStaticProps } from 'next'
import client from 'graphql/client'
import TemplateA from '../../pageTemplate/templateA'
import TemplateB from '../../pageTemplate/templateB'
import TemplateC from '../../pageTemplate/templateC'
import TemplateD from '../../pageTemplate/templateD'
import TemplateE from '../../pageTemplate/templateE'
import TemplateF from '../../pageTemplate/templateF'

import {
  get_graphql_query_all_lines,
  get_line_by_slug_and_language,
  ItemLinesProp
} from 'graphql/queries/lines'

export default function ItemLinesProps({
  pageA,
  pageB,
  pageC,
  pageD,
  pageE,
  pageF
}: ItemLinesProp) {
  if (pageA) {
    return <TemplateA {...pageA} />
  }
  if (pageB) {
    return <TemplateB {...pageB} />
  }
  if (pageC) {
    return <TemplateC {...pageC} />
  }
  if (pageD) {
    return <TemplateD {...pageD} />
  }
  if (pageE) {
    return <TemplateE {...pageE} />
  }
  if (pageF) {
    return <TemplateF {...pageF} />
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale = 'pt'
}) => {
  if (params?.slug && typeof params.slug === 'string') {
    const {
      categoriesA,
      categoriesB,
      categoriesC,
      categoriesD,
      categoriesE,
      categoriesF
    } = await client.request(get_line_by_slug_and_language(params.slug, locale))

    return {
      props: {
        pageA: categoriesA.length ? categoriesA[0] : null,
        pageB: categoriesB.length ? categoriesB[0] : null,
        pageC: categoriesC.length ? categoriesC[0] : null,
        pageD: categoriesD.length ? categoriesD[0] : null,
        pageE: categoriesE.length ? categoriesE[0] : null,
        pageF: categoriesF.length ? categoriesF[0] : null,
        ...(await serverSideTranslations(locale, ['common']))
      }
    }
  }
  return {
    props: {}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  type page = {
    slug_pt: string
    slug_en: string
    slug_es: string
    metaInfo: {
      title: string
    }
  }
  type CategoriesType = {
    categoriesTypeA: page[]
    categoriesTypeB: page[]
    categoriesTypeC: page[]
    categoriesTypeD: page[]
    categoriesTypeE: page[]
    categoriesTypeF: page[]
  }

  type ItemRoute = {
    params: {
      slug: string
    }
    locale: 'en' | 'pt' | 'es'
  }

  const {
    categoriesTypeA,
    categoriesTypeB,
    categoriesTypeC,
    categoriesTypeD,
    categoriesTypeE,
    categoriesTypeF
  }: CategoriesType = await client.request(get_graphql_query_all_lines())

  const customPaths: ItemRoute[] = []

  categoriesTypeA.forEach((item) => {
    customPaths.push({ params: { slug: item.slug_en }, locale: 'en' })
    customPaths.push({ params: { slug: item.slug_pt }, locale: 'pt' })
    customPaths.push({ params: { slug: item.slug_es }, locale: 'es' })
  })

  categoriesTypeB.forEach((item) => {
    customPaths.push({ params: { slug: item.slug_en }, locale: 'en' })
    customPaths.push({ params: { slug: item.slug_pt }, locale: 'pt' })
    customPaths.push({ params: { slug: item.slug_es }, locale: 'es' })
  })

  categoriesTypeC.forEach((item) => {
    customPaths.push({ params: { slug: item.slug_en }, locale: 'en' })
    customPaths.push({ params: { slug: item.slug_pt }, locale: 'pt' })
    customPaths.push({ params: { slug: item.slug_es }, locale: 'es' })
  })

  categoriesTypeD.forEach((item) => {
    customPaths.push({ params: { slug: item.slug_en }, locale: 'en' })
    customPaths.push({ params: { slug: item.slug_pt }, locale: 'pt' })
    customPaths.push({ params: { slug: item.slug_es }, locale: 'es' })
  })

  categoriesTypeE.forEach((item) => {
    customPaths.push({ params: { slug: item.slug_en }, locale: 'en' })
    customPaths.push({ params: { slug: item.slug_pt }, locale: 'pt' })
    customPaths.push({ params: { slug: item.slug_es }, locale: 'es' })
  })

  categoriesTypeF.forEach((item) => {
    customPaths.push({ params: { slug: item.slug_en }, locale: 'en' })
    customPaths.push({ params: { slug: item.slug_pt }, locale: 'pt' })
    customPaths.push({ params: { slug: item.slug_es }, locale: 'es' })
  })
  return {
    paths: customPaths,
    fallback: false
  }
}
