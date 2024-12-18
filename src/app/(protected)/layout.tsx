import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

type Props={
    children : React.ReactNode
}

const Sidebarlayout = ({children} : Props) => {
  return (
 <SidebarProvider>
    <main>
        
    </main>
 </SidebarProvider>
  )
}

export default Sidebarlayout
