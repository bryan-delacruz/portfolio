"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Home, User, Code, Briefcase, Mail } from 'lucide-react'
import { ThemeToggle } from "./theme-toggle"

const sections = [
  { title: "Inicio", href: "#home", icon: Home },
  { title: "Sobre mí", href: "#about", icon: User },
  { title: "Habilidades", href: "#skills", icon: Code },
  { title: "Proyectos", href: "#projects", icon: Briefcase },
  { title: "Contacto", href: "#contact", icon: Mail },
]

export function Navbar() {
  return (
    <div className=" backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 shadow-lg rounded-xl border border-gray-300 dark:border-gray-600 sm:static fixed bottom-4 left-4 right-4">
      <div className="container w-full flex justify-between items-center px-4 py-2">
        <NavigationMenu className="w-full max-w-full">
          <NavigationMenuList className="hidden sm:flex">
            {sections.map((section) => (
              <NavigationMenuItem key={section.href}>
                <Link href={section.href} legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                    {section.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <NavigationMenuList className="flex sm:hidden justify-around w-full items-center">
            {sections.map((section) => (
              <NavigationMenuItem key={section.href}>
                <Link href={section.href} legacyBehavior passHref>
                  <NavigationMenuLink className="flex flex-col items-center justify-center w-9 h-9 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <section.icon className="h-6 w-6" aria-label={section.title} />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem className="flex items-center justify-center w-9 h-9">
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

