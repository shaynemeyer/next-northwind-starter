import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getEmployeeById } from "@/db/actions/employees";
import { columns } from "./columns";

interface EmployeeDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EmployeeDetailsPage({
  params,
}: EmployeeDetailsPageProps) {
  const { id } = await params;
  const result = await getEmployeeById(id);

  if (!result.success || !result.data) {
    notFound();
  }

  const { employee, orders } = result.data;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/employees">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Employee Details</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {employee.firstName && employee.lastName
              ? `${employee.firstName} ${employee.lastName}`
              : employee.firstName || employee.lastName || "Unknown Employee"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                First Name
              </dt>
              <dd className="text-sm">{employee.firstName || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Last Name
              </dt>
              <dd className="text-sm">{employee.lastName || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Birth Date
              </dt>
              <dd className="text-sm">
                {employee.birthDate
                  ? new Date(employee.birthDate).toLocaleDateString()
                  : "-"}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Notes
              </dt>
              <dd className="text-sm">{employee.notes || "-"}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Orders Handled</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={orders}
            searchKey="customerName"
            searchPlaceholder="Search by customer..."
          />
        </CardContent>
      </Card>
    </div>
  );
}
