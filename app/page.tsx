import Image from "next/image"
import { MalariaUploader } from "@/components/malaria-uploader"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">Malaria Rural Lab</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-2 text-center">Malaria Detection System</h2>
          <p className="mb-8 text-center text-muted-foreground">
            Upload an image of a microscope plate with blood cells for quick and accurate malaria detection.
          </p>
          <MalariaUploader />
        </div>
      </main>
    </div>
  )
}

