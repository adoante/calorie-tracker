import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface StreakCounterProps {
    title: string
    desc: string
    count: number
}

export default function StreakCounter({ title, desc, count }: StreakCounterProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription>
                    {desc}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-4xl text-center items-center font-bold">
                    {count} 🔥
                </div>
            </CardContent>
            <CardFooter className="flex-col text-sm">
                <div className="flex items-center font-medium">
                    Keep it up!
                </div>
            </CardFooter>
        </Card>
    )
}
