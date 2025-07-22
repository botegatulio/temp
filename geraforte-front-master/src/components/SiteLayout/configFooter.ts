import { MenuItemProps } from 'components/Footer/Menu/'
import { Language } from 'types/commons'

type ItemColumThreeProps = {
  title: string
  content: string
}
export const getListOne = (language: Language): MenuItemProps[] | undefined => {
  const listOne = new Map<Language, MenuItemProps[]>()

  listOne.set('en', [
    {
      label: 'History',
      href: '/en/about'
    },
    {
      label: 'Qualification',
      href: '/en/qualification'
    },
    {
      label: 'Diversity and sustainability',
      href: '/en/diversity'
    },
    {
      label: 'Segments',
      href: '/en/segments'
    },
    {
      label: 'Exportation',
      href: '/en/exportation'
    },
    {
      label: 'Cases',
      href: '/en/cases'
    },
    {
      label: 'Customer service',
      href: '/en/customer-service'
    },
    {
      label: 'Blog',
      href: '/en/blog'
    },
    {
      label: 'Contact',
      href: '/en/contact'
    }
  ])

  listOne.set('pt', [
    {
      label: 'História',
      href: '/pt/sobre'
    },
    {
      label: 'Qualificação',
      href: '/pt/qualificacao'
    },
    {
      label: 'Diversidade e sustentabilidade',
      href: '/pt/diversidade-e-sustentabilidade'
    },
    {
      label: 'Segmentos',
      href: '/pt/segmentos'
    },
    {
      label: 'Exportação',
      href: '/pt/exportacao'
    },
    {
      label: 'Cases',
      href: '/pt/cases'
    },
    {
      label: 'Pós venda',
      href: '/pt/pos-venda'
    },
    {
      label: 'Blog',
      href: '/pt/blog'
    },
    {
      label: 'Contato',
      href: '/pt/contato'
    }
  ])

  listOne.set('es', [
    {
      label: 'Historia',
      href: '/es/la-empresa'
    },
    {
      label: 'Calificación',
      href: '/es/calificacion'
    },
    {
      label: 'Diversidad y Sostenibilidad',
      href: '/es/diversidad-y-sostenibilidad'
    },
    {
      label: 'Segmentos',
      href: '/es/segments'
    },
    {
      label: 'Exportación',
      href: '/es/exportacion'
    },
    {
      label: 'Cases',
      href: '/es/cases'
    },
    {
      label: 'Post venta',
      href: '/es/post-venta'
    },
    {
      label: 'Blog',
      href: '/es/blog'
    },
    {
      label: 'Contacto',
      href: '/es/contacto'
    }
  ])

  return listOne.get(language)
}

export const getListTwo = (language: Language): MenuItemProps[] | undefined => {
  const listOne = new Map<Language, MenuItemProps[]>()

  listOne.set('en', [
    {
      label: 'Products',
      href: '/en/products'
    },
    {
      label: 'Diesel line',
      href: '/en/lines/diesel'
    },
    {
      label: 'Custom products',
      href: '/en/lines/customized'
    },
    {
      label: 'Gas line',
      href: '/en/lines/gas'
    },
    {
      label: 'Remote control',
      href: '/en/lines/remote-control'
    },
    {
      label: 'Command panels',
      href: '/en/lines/command-panels'
    },
    {
      label: 'Enclosure and attenuator',
      href: '/en/lines/enclosure'
    },
    {
      label: 'Ombudsman and Customer Service',
      href: '/en/ombudsman-and-customer-service'
    }
  ])

  listOne.set('pt', [
    {
      label: 'Produtos',
      href: '/pt/produtos'
    },
    {
      label: 'Linha a Diesel',
      href: '/pt/linhas/diesel'
    },
    {
      label: 'Produtos Customizados',
      href: '/pt/linhas/customizados'
    },
    {
      label: 'Linha a Gás',
      href: '/pt/linhas/gas'
    },
    {
      label: 'Telecomando',
      href: '/pt/linhas/telecomandado'
    },
    {
      label: 'Quadros de comando',
      href: '/pt/linhas/quadros-comando'
    },
    {
      label: 'Carenagem e atenuador',
      href: '/pt/linhas/carenagem'
    },
    {
      label: 'Biblioteca Geraforte',
      href: 'https://bibliotecageraforte.com/'
    },
    {
      label: 'Ouvidoria e SAC',
      href: '/pt/ouvidoria-e-sac'
    }
  ])

  listOne.set('es', [
    {
      label: 'Productos',
      href: '/es/productos'
    },
    {
      label: 'Línea a diesel',
      href: '/es/lineas/diesel'
    },
    {
      label: 'Productos personalizados',
      href: '/es/lineas/personalizado'
    },
    {
      label: 'Línea a gas',
      href: '/es/lineas/gas'
    },
    {
      label: 'Línea de telemando',
      href: '/es/lineas/control-remoto'
    },
    {
      label: 'Línea de tableros de mando',
      href: '/es/lineas/tableros-de-mando'
    },
    {
      label: 'Cabinas y atenuadores',
      href: '/es/lineas/cabinas-y-atenuadores'
    },
    {
      label: 'Servicio de Atención al Cliente',
      href: '/es/servicio-de-atencion-al-cliente'
    }
  ])

  return listOne.get(language)
}

export const getListThree = (
  language: Language
): ItemColumThreeProps[] | undefined => {
  const listOne = new Map<Language, ItemColumThreeProps[]>()

  listOne.set('en', [
    {
      title: '<b>Sales and Exportation</b>',
      content: '(31) 3396.9694<br />geraforte@geraforte.com'
    },
    {
      title: '<b>Technical Assistance</b>',
      content: 'assistenciatecnica@geraforte.com'
    },
    {
      title: '<b>Work with us</b>',
      content: 'dpessoal@geraforte.com'
    },
    {
      title: '<b>Address</b>',
      content:
        'Rio Branco Street, 214 <br /> Água Branca, Contagem/MG, Brazil<br />zip code 32.371.490'
    }
  ])

  listOne.set('pt', [
    {
      title: '<b>Central de Vendas</b>',
      content: '(31) 3396.9694<br />geraforte@geraforte.com'
    },
    {
      title: '<b>Assistência Técnica Nacional</b>',
      content: 'assistenciatecnica@geraforte.com'
    },
    {
      title: '<b>Trabalhe Conosco</b>',
      content: 'dpessoal@geraforte.com'
    },
    {
      title: '<b>Endereço</b>',
      content:
        'Rua Rio Branco, 214 <br /> Água Branca, Contagem/MG<br />CEP 32.371.490'
    }
  ])

  listOne.set('es', [
    {
      title: '<b>Ventas y Exportación</b>',
      content: '(31) 3396.9694<br />geraforte@geraforte.com'
    },
    {
      title: '<b>Asistencia Técnica</b>',
      content: 'assistenciatecnica@geraforte.com'
    },
    {
      title: '<b>Trabaja con Nosotros</b>',
      content: 'dpessoal@geraforte.com'
    },
    {
      title: '<b>Dirección</b>',
      content:
        'Calle Rio Branco, 214 <br /> Água Branca, Contagem/MG, Brasil<br />código postal 32.371.490'
    }
  ])

  return listOne.get(language)
}
