import { getAllCustomers } from "@/db/actions/customers";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

// EXERCISE NOTE: A loading.tsx file has been created for you in this directory.
// Complete the loading skeleton to match this page's layout.
//
// To test your loading state:
// 1. Uncomment the line below (artificial delay)
// 2. Navigate to /customers and watch your skeleton appear
// 3. Remember to comment it out again when done!

async function CustomersPage() {
  // await new Promise(resolve => setTimeout(resolve, 2000)) // Uncomment to test loading
  const result = await getAllCustomers();

  if (!result.success) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Customers</h1>
        <p className="text-red-500">{result.error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>
      <DataTable
        columns={columns}
        data={result.data || []}
        searchKey="customerName"
        searchPlaceholder="Search by customer name..."
      />
    </div>
  );
}

export default CustomersPage;
