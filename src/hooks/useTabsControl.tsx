import { createContext, PropsWithChildren, useContext, useState } from "react"

type tabType = 'configurationTabIsOpen' | 'userTabIsOpen' | 'navigationTabIsOpen'

interface IShowTabOpen {
  configurationTabIsOpen: boolean
  userTabIsOpen: boolean
  navigationTabIsOpen: boolean
}

interface ITabsControlProps {
  showTabOpen: IShowTabOpen
  handleToggleTabs: (tab: tabType) => void
}

interface ITabsControlContextProps extends PropsWithChildren {}


const TabsControlContext = createContext({} as ITabsControlProps)


export const TabsControlProvider = ({children}: ITabsControlContextProps) => {
  

  const [showTabOpen, setShowTabOpen] = useState({
    configurationTabIsOpen: false,
    userTabIsOpen: false,
    navigationTabIsOpen: false
  })

  function handleToggleTabs(tab: tabType) {
    setShowTabOpen(prev => {
      const newObj: IShowTabOpen = {} as IShowTabOpen
      Object.keys(prev).forEach(e => newObj[e as tabType] = e === tab && !prev[e])
      return newObj
    })
  }

  return (
    <TabsControlContext.Provider value={{showTabOpen, handleToggleTabs}}>
      {children}
    </TabsControlContext.Provider>
  )
}

export const useTabsControl = () => {
  const context = useContext(TabsControlContext)
  return context
}