import { getAllCustomers } from '@/db/actions/customers';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './columns';

async function CustomersPage() {
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
