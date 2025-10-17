import { getAllEmployees } from '@/db/actions/employees';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

async function EmployeesPage() {
  const result = await getAllEmployees();

  if (!result.success) {
    return <div>Error loading employees</div>;
  }
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Employees</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {result.data?.map((employee) => (
          <Card key={employee.employeeId}>
            <CardHeader>
              <CardTitle>
                {employee.firstName} {employee.lastName}
              </CardTitle>
              <CardDescription>Employee ID: {employee.employeeId}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {employee.birthDate && (
                  <p className="text-sm">
                    <span className="font-semibold">Birth Date:</span>{' '}
                    {employee.birthDate}
                  </p>
                )}
                {employee.notes && (
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {employee.notes}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default EmployeesPage;
