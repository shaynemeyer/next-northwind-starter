import { getAllEmployees } from '@/db/actions/employees';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './columns';

async function EmployeesPage() {
  const result = await getAllEmployees();

  if (!result.success) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Employees</h1>
        <p className="text-red-500">{result.error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Employees</h1>
      <DataTable
        columns={columns}
        data={result.data || []}
        searchKey="firstName"
        searchPlaceholder="Search by first name..."
      />
    </div>
  );
}
export default EmployeesPage;
