import RemainingCalories from "@/components/RemainingCalories";
import StreakCounter from "@/components/StreakCounter";
import { WeeklyCaloriesBarChart } from "@/components/CalorieSummaryCharts";

export default function Dashboard() {
    return (
        <main className="space-y-5">
            <h1 className="text-4xl text-center font-bold">
                Dashboard
            </h1>

            <StreakCounter
                title="Streak Counter"
                desc="Displays streak count"
                count={100}
            />

            <RemainingCalories />

            <WeeklyCaloriesBarChart />

        </main>
    )
}
