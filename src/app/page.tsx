'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from 'lucide-react'
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"

import MetaLogo from "@/assets/icons/meta-logo.svg"

import { homeConfig } from "@/configsite/home"

export default function Home() {

  const { basicInfo } = homeConfig;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 pb-24 sm:pb-0">
        <header className="py-4 sticky top-0 z-10 hidden sm:block">
          <Navbar />
        </header>

        {/* Hero Section */}
        <section id="home" className="text-center py-20">
          <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-xl border border-gray-300 dark:border-gray-600">
            <h1 className="text-4xl font-bold mb-4">{basicInfo.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-100 mb-2">{basicInfo.subtitle_1} 💻</p>
            <p className="text-xl text-gray-600 dark:text-gray-100 mb-6 flex justify-center items-center gap-x-2">
              {basicInfo.subtitle_2}
              <Link
                href="https://coursera.org/share/86805a0f0a9cd39d28a51b8dc1beede0"
                target="_blank"
                className="flex ml-2"
              >
                <Badge className="text-xs flex gap-x-2 bg-gray-600 hover:bg-gray-700 text-gray-100 dark:bg-slate-200 dark:hover:bg-slate-100 dark:text-gray-600">
                  <MetaLogo className="h-4 fill-[#0064e0]" />
                  View here!
                </Badge>
              </Link>
            </p>
            <div className="text-xl mb-6 flex justify-center items-center gap-x-2">
              {
                basicInfo.techTags.map((tag) => (
                  <Badge key={tag} className="text-xs bg-gray-300 hover:bg-gray-300 text-gray-800 dark:bg-transparent dark:bg-[#2d3748] dark:text-slate-300" >
                    {tag}
                  </Badge>
                ))
              }
            </div>
            <div className="flex justify-center space-x-4">
              {
                basicInfo.socialLinks.map((link) => (
                  <Link key={link.name} href={link.url} target="_blank">
                    <Button variant="outline" size="icon" className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full">
                      <link.icon className="h-5 w-5" />
                    </Button>
                  </Link>
                ))
              }
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
          <Card className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 shadow-xl border border-gray-300 dark:border-gray-600 rounded-xl">
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-300">
                Soy un desarrollador front-end apasionado por crear experiencias web
                interactivas y responsivas. Con experiencia en React y Next.js, me
                enfoco en construir aplicaciones web modernas y eficientes.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            <Badge className="backdrop-blur-lg bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2">React</Badge>
            <Badge className="backdrop-blur-lg bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2">Next.js</Badge>
            <Badge className="backdrop-blur-lg bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2">TypeScript</Badge>
            <Badge className="backdrop-blur-lg bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2">Tailwind CSS</Badge>
            <Badge className="backdrop-blur-lg bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2">Redux</Badge>
            <Badge className="backdrop-blur-lg bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2">Git</Badge>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <Card className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 shadow-xl border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg"
                  alt="Proyecto 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Nombre del Proyecto 1</CardTitle>
                <CardDescription>Breve descripción del proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600 dark:text-gray-300">Detalles del proyecto y tecnologías utilizadas.</p>
                <Button className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full">Ver Proyecto</Button>
              </CardContent>
            </Card>
            {/* Project Card 2 */}
            <Card className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 shadow-xl border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg"
                  alt="Proyecto 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Nombre del Proyecto 2</CardTitle>
                <CardDescription>Breve descripción del proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600 dark:text-gray-300">Detalles del proyecto y tecnologías utilizadas.</p>
                <Button className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full">Ver Proyecto</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
          <Card className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 shadow-xl border border-gray-300 dark:border-gray-600 rounded-xl">
            <CardContent className="pt-6">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                ¿Interesado en trabajar juntos? ¡Contáctame!
              </p>
              <Button className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full">
                <Mail className="mr-2 h-4 w-4" /> Enviar Mensaje
              </Button>
            </CardContent>
          </Card>
        </section>

        <footer className="sm:hidden fixed bottom-0 left-0 right-0">
          <Navbar />
        </footer>
      </div>
    </div>
  )
}

