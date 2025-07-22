import { Language } from 'types/commons'

export type SubMenuItem = {
  link: string
  label: string
  hiddenOnDrawerDesktop?: boolean
}
export type MenuItem = {
  link: string
  label: string
  highlighted: boolean
  hasChildren: boolean
  subItems?: SubMenuItem[]
}

export const menuProducts: SubMenuItem[] = [
  { label: 'Linha a diesel', link: '/lineDiesel' },
  { label: 'Produtos Customizados', link: '/productsCustom' },
  { label: 'Linha a gás', link: '/lineGas' },
  { label: 'Telecomando', link: '/remoteCommander' },
  { label: 'Quadros de comando', link: '/commandsBoards' },
  { label: 'Carenagem e atenuador', link: '/carenagem' }
]

export const getMenu = (language: Language = 'pt'): MenuItem[] | undefined => {
  const menuItems = new Map<string, MenuItem[]>()
  menuItems.set('en', [
    {
      label: 'ABOUT',
      link: '/en/about',
      highlighted: false,
      hasChildren: true,
      subItems: [
        {
          label: 'History',
          link: '/en/about',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Qualification',
          link: '/en/qualification',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Diversity and sustainability',
          link: '/en/diversity',
          hiddenOnDrawerDesktop: false
        }
      ]
    },
    {
      label: 'PRODUCTS',
      link: '/en/products',
      highlighted: false,
      hasChildren: true,
      subItems: [
        {
          label: 'Product lines',
          link: '/en/products',
          hiddenOnDrawerDesktop: true
        },
        {
          label: 'Diesel line',
          link: '/en/lines/diesel',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Custom products',
          link: '/en/lines/customized',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Gas line',
          link: '/en/lines/gas',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Remote control',
          link: '/en/lines/remote-control',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Command panels',
          link: '/en/lines/command-panels',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Enclosure and attenuator',
          link: '/en/lines/enclosure',
          hiddenOnDrawerDesktop: false
        }
      ]
    },
    {
      label: 'SEGMENTS',
      link: '/en/segments',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'EXPORTATION',
      link: '/en/exportation',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'CASES',
      link: '/en/cases',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'CUSTOMER SERVICE',
      link: '/en/customer-service',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'BLOG',
      link: '/en/blog',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'CONTACT',
      link: '/en/contact',
      highlighted: true,
      hasChildren: false
    }
  ])

  menuItems.set('pt', [
    {
      label: 'SOBRE',
      link: '/pt/sobre',
      highlighted: false,
      hasChildren: true,
      subItems: [
        {
          label: 'História',
          link: '/pt/sobre',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Qualificação',
          link: '/pt/qualificacao',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Diversidade e sustentabilidade',
          link: '/pt/diversidade-e-sustentabilidade',
          hiddenOnDrawerDesktop: false
        }
      ]
    },
    {
      label: 'PRODUTOS',
      link: '/pt/produtos',
      highlighted: false,
      hasChildren: true,
      subItems: [
        {
          label: 'Linhas de produto',
          link: '/pt/products',
          hiddenOnDrawerDesktop: true
        },
        {
          label: 'Linha diesel',
          link: '/pt/linhas/diesel',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Produtos customizados',
          link: '/pt/linhas/customizados',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Linha gás',
          link: '/pt/linhas/gas',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Linha de telecomando',
          link: '/pt/linhas/telecomandado',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Quadros de comando',
          link: '/pt/linhas/quadros-comando',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Carenagem e atenuador',
          link: '/pt/linhas/carenagem',
          hiddenOnDrawerDesktop: false
        }
      ]
    },
    {
      label: 'SEGMENTOS',
      link: '/pt/segmentos',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'EXPORTAÇÃO',
      link: '/pt/exportacao',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'CASES',
      link: '/pt/cases',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'PÓS-VENDA',
      link: '/pt/pos-venda',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'BLOG',
      link: '/pt/blog',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'CONTATO',
      link: '/pt/contato',
      highlighted: true,
      hasChildren: false
    }
  ])

  menuItems.set('es', [
    {
      label: 'LA EMPRESA',
      link: '/es/la-empresa',
      highlighted: false,
      hasChildren: true,
      subItems: [
        {
          label: 'Historia',
          link: '/es/la-empresa',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Calificación',
          link: '/es/calificacion',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Diversidad y Sustentabilidad',
          link: '/es/diversidad-y-sostenibilidad',
          hiddenOnDrawerDesktop: false
        }
      ]
    },
    {
      label: 'PRODUCTOS',
      link: '/es/productos',
      highlighted: false,
      hasChildren: true,
      subItems: [
        {
          label: 'Líneas de productos',
          link: '/es/productos',
          hiddenOnDrawerDesktop: true
        },
        {
          label: 'Línea a diesel',
          link: '/es/lineas/diesel',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Productos personalizados',
          link: '/es/lineas/personalizado',
          hiddenOnDrawerDesktop: false
        },
        { label: 'Línea a gas', link: '/es/lineas/gas' },
        {
          label: 'Línea de telemando',
          link: '/es/lineas/control-remoto',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Línea de tableros de mando',
          link: '/es/lineas/tableros-de-mando',
          hiddenOnDrawerDesktop: false
        },
        {
          label: 'Cabinas y atenuadores',
          link: '/es/lineas/cabinas-y-atenuadores',
          hiddenOnDrawerDesktop: false
        }
      ]
    },
    {
      label: 'SEGMENTOS',
      link: '/es/segments',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'EXPORTACIÓN',
      link: '/es/exportacion',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'CASES',
      link: '/es/cases',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'POST VENTA',
      link: '/es/post-venta',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'BLOG',
      link: '/es/blog',
      highlighted: false,
      hasChildren: false
    },
    {
      label: 'CONTACTO',
      link: '/es/contacto',
      highlighted: true,
      hasChildren: false
    }
  ])

  return menuItems.get(language)
}
