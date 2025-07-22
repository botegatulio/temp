import content from 'content-pre-build/whatsapp-modal.json'

export type DepartmentOption = {
  phone: number
  name: string
}

export const getOptionsByLocale = (locale: string) => {
  const mapContent = new Map<string, DepartmentOption[]>()
  mapContent.set('pt', [])
  mapContent.set('en', [])
  mapContent.set('es', [])

  content.departments.forEach((element) => {
    mapContent.get('pt')?.push({
      phone: element.phone_number_pt,
      name: element.name_pt
    })
    mapContent.get('en')?.push({
      phone: element.phone_number_en,
      name: element.name_en
    })
    mapContent.get('es')?.push({
      phone: element.phone_number_es,
      name: element.name_es
    })
  })

  return mapContent.get(locale) || []
}
export const getTitle = (locale: string) => {
  const title = new Map<string, string>()
  title.set('pt', content.title_pt)
  title.set('en', content.title_en)
  title.set('es', content.title_es)

  return title.get(locale)
}
