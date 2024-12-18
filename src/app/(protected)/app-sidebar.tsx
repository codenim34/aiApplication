'use client'

import { Sidebar,SidebarContent,SidebarGroup,SidebarGroupContent,SidebarGroupLabel,SidebarHeader,SidebarMenuItem,SidebarMenuButton,SidebarMenu, useSidebar} from "@/components/ui/sidebar"
import { LayoutDashboard, Bot, Presentation, CreditCard, Plus } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { use } from "react"


const items=[
    {
        title: "Dashboard",
        url:"/dashboard",
        icon:LayoutDashboard
    },
    {
        title: "Q&A",
        url:"/qa",
        icon:Bot,
    },
    {
        title: "Meetings",
        url:"/meetings",
        icon:Presentation,
    },
    {
        title: "Billing",
        url:"/billing",
        icon:CreditCard,
    }
]

const projects=[
    {
        name:"Project 1",
        
    },{
        name:"Project 2",
    },
    {
        name:"Project 3",
    }
]
export function AppSidebar(){
    const {open}= useSidebar()
    const pathname=usePathname()
    return(
       <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader>
           <div className="flex items-center gap-2">
            <Image src="/logo.png" width={40} height={40} alt="logo" />
           {
            open && (
                <h1 className="text-xl font-bold text-primary/80">
                XtraDrill
            </h1>
            )
           } 
           </div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>
                    Application
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {items.map(item=>(
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                               <Link href={item.url} className={cn({
                                '!bg-primary !text-white': pathname===item.url
                               },'list-none')}>
                                <item.icon/>
                                <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                    
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarGroupLabel>
                    Your Projects
                </SidebarGroupLabel>
                <SidebarGroupContent>
                   <SidebarMenu>
                   {projects.map(project=>(
                        <SidebarMenuItem key={project.name}>
                            <SidebarMenuButton asChild>
                               <div>
                                <div className={cn( 
                                    'rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary',{
                                          'bg-primary text-white': true
                                    }
                                )
                            }>
                                  {project.name[0]}
                                </div>
                                <span>{project.name}</span>
                               </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                      <div className="h-2">

                     </div>
                    {
                        open&& (
                            <SidebarMenuItem>
                            <Link href={'/create'}>
                            <Button size='sm' variant={'outline'} className="w-fit">
                                    <Plus/>
                                    Create Project
                                  </Button> 
                            </Link>
                              
                         
                         </SidebarMenuItem>
                        )
                    }
                    
                   </SidebarMenu>
                   
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>

       </Sidebar>
    )
}