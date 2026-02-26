import { ArchitectureSection } from '../components/sections/Architecture'
import { CICDSection } from '../components/sections/CICD'
import { ContactSection } from '../components/sections/Contact'
import { HeroSection } from '../components/sections/Hero'
import { ProjectsSection } from '../components/sections/Projects'
import { SkillsSection } from '../components/sections/Skills'
import { Container } from '../components/layout/Container'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Container>
          <HeroSection />
          <SkillsSection />
          
          
          <ProjectsSection />
          <ContactSection />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
