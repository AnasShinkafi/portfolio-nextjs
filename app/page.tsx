import './globals.css'
import AboutSection from "@/components/AboutSection";
import AchievementSection from "@/components/AchievementSection";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
;
export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col bg-[#121212]">
      <div className=" container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
    </main>
  )
}
