import { CardOverview } from "./_components/card-overview";
import { DataList } from "./_components/data-list";
import { Navbar } from "./_components/navbar";

export default function Home() {
  return (
    <div className="max-w-7xl m-auto px-4 py-12 space-y-8 ">
      <Navbar />
      <CardOverview />
      <DataList />
    </div>
  );
}
