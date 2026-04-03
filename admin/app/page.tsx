import BarChartComponent from "@/components/charts/BarChartComponent";
import PieChartComponent from "@/components/charts/PieChartComponent";
import AreaChartComponent from "@/components/charts/AreaChartComponent";
import CardList from "@/components/cards/CardList";
import TodoList from "@/components/web/TodoList";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <BarChartComponent />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <PieChartComponent />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
        <AreaChartComponent />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
