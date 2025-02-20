import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle2 } from "lucide-react"

interface ResultCardProps {
  result: {
    detected: boolean
    accuracy: number
    type: string
    details: string
  }
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Analysis Result</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            {result.detected ? (
              <AlertTriangle className="h-6 w-6 text-red-500" />
            ) : (
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            )}
            <h3 className={`text-xl font-semibold ${result.detected ? "text-red-500" : "text-green-500"}`}>
              {result.detected ? "Malaria Detected" : "No Malaria Detected"}
            </h3>
          </div>
          <div className="grid gap-2">
            <div>
              <span className="font-medium">Accuracy:</span> {result.accuracy}%
            </div>
            <div>
              <span className="font-medium">Malaria Type:</span> {result.type}
            </div>
            <div>
              <span className="font-medium">Details:</span>
              <p className="mt-1 text-muted-foreground">{result.details}</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Next Steps:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Consult with a healthcare professional for a comprehensive diagnosis.</li>
              <li>If malaria is detected, begin appropriate treatment as soon as possible.</li>
              <li>Consider additional tests for confirmation and to determine the severity of infection.</li>
              <li>Take preventive measures to avoid future infections.</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

