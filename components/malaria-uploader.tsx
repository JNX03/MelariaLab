"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, Loader2 } from "lucide-react"
import { ResultCard } from "@/components/result-card"

export function MalariaUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [result, setResult] = useState<{
    detected: boolean
    accuracy: number
    type: string
    details: string
  } | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeSample = () => {
    setIsAnalyzing(true)
    // Simulate analysis time
    setTimeout(() => {
      const isMalariaPositive = Math.random() < 0.7
      const accuracy = 75 + Math.floor(Math.random() * 20) // 75% to 94%
      const types = ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium ovale", "Plasmodium malariae"]
      const type = types[Math.floor(Math.random() * types.length)]
      const details = isMalariaPositive
        ? `The sample shows characteristics consistent with ${type} infection. Further tests may be required for confirmation.`
        : "No malaria parasites were detected in the blood sample. However, this does not completely rule out infection, especially in early stages."

      setResult({
        detected: isMalariaPositive,
        accuracy,
        type: isMalariaPositive ? type : "N/A",
        details,
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture" className="text-lg font-medium">
                Upload microscope plate image
              </Label>
              <div className="flex items-center space-x-4">
                <Input id="picture" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                <Button asChild className="w-full">
                  <label htmlFor="picture" className="cursor-pointer flex items-center justify-center">
                    <Upload className="mr-2 h-4 w-4" />
                    Choose Image
                  </label>
                </Button>
                {selectedImage && <span className="text-sm text-muted-foreground">Image selected</span>}
              </div>
            </div>
            <div className="aspect-video relative overflow-hidden rounded-lg border-2 border-dashed border-muted-foreground/25">
              {selectedImage ? (
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Uploaded microscope plate"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-muted">
                  <p className="text-muted-foreground">No image uploaded</p>
                </div>
              )}
            </div>
            <Button onClick={analyzeSample} className="w-full" disabled={!selectedImage || isAnalyzing}>
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing Sample...
                </>
              ) : (
                "Analyze Sample"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
      {result && <ResultCard result={result} />}
    </div>
  )
}

