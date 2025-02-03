import { FormCreate } from "./_components/form-create";
import { HeaderTransactions } from "./_components/header";
import { ProfileUser } from "./_components/profile";

export default function TransactionPage() {
  return (
    <div className="max-w-3xl px-4 m-auto py-12 space-y-8 ">
      <HeaderTransactions />
      <ProfileUser />
      <FormCreate />
    </div>
  );
}
