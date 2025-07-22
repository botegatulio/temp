import React from 'react'
import { AppBar, Box, Tabs, useMediaQuery, useTheme } from '@material-ui/core'
import Tab from '@material-ui/core/Tab'
import useStyles from './styles'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

type ItemProps = {
  title: string
  link: string
  imgUrl: string
}

export type CasesTabProps = {
  items: ItemProps[]
}

const CasesTab = ({ items }: CasesTabProps) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
        className={classes.appBar}
        elevation={0}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant={matches ? 'fullWidth' : 'scrollable'}
          scrollButtons="on"
          indicatorColor="primary"
          textColor="inherit"
          aria-label="scrollable force tabs example"
          TabIndicatorProps={{ className: classes.indicator }}
          className={classes.tabs}
        >
          {items &&
            items.map((item, index) => (
              <Tab key={index} label={item.title} {...a11yProps(index)} />
            ))}
        </Tabs>
      </AppBar>

      {items &&
        items.map((item, index) => (
          <TabPanel value={value} index={index} key={index}>
            <a href={item.link}>
              <img
                src={item.imgUrl}
                alt={item.title}
                className={classes.image}
              />
            </a>
          </TabPanel>
        ))}
    </div>
  )
}

export default CasesTab
