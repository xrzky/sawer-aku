import { API_URL } from "@/constants/api-url";
import { FormUpdate } from "../_components/form-update";
import { HeaderTransactions } from "../_components/header";

export default async function page({ params }) {
  const { id } = await params;
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();

  return (
    <main>
      <div className="max-w-3xl px-4 m-auto py-12 space-y-8 ">
        <HeaderTransactions />
        <FormUpdate
          id={data._id}
          nominal={data.nominal}
          name={data.name}
          email={data.email}
          message={data.message}
          category={data.category}
        />
      </div>
    </main>
  );
}
