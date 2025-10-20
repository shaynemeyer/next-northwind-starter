import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Loading() {
  return (
    <div className="container mx-auto py-10">
      {/* Page title skeleton */}
      <Skeleton className="h-8 w-48 mb-6" />

      <div className="space-y-4">
        {/* Search bar skeleton */}
        <div className="flex items-center">
          <Skeleton className="h-10 w-full max-w-sm" />
        </div>

        {/* Table skeleton */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead><Skeleton className="h-4 w-8" /></TableHead>
                <TableHead><Skeleton className="h-4 w-32" /></TableHead>
                <TableHead><Skeleton className="h-4 w-32" /></TableHead>
                <TableHead><Skeleton className="h-4 w-40" /></TableHead>
                <TableHead><Skeleton className="h-4 w-24" /></TableHead>
                <TableHead><Skeleton className="h-4 w-24" /></TableHead>
                <TableHead><Skeleton className="h-4 w-24" /></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Row 1 */}
              <TableRow>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                <TableCell><Skeleton className="h-4 w-36" /></TableCell>
                <TableCell><Skeleton className="h-4 w-48" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
              </TableRow>
              {/* Row 2 */}
              <TableRow>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-36" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell><Skeleton className="h-4 w-52" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
              </TableRow>
              {/* Row 3 */}
              <TableRow>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-44" /></TableCell>
                <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                <TableCell><Skeleton className="h-4 w-44" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
              </TableRow>
              {/* Row 4 */}
              <TableRow>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell><Skeleton className="h-4 w-36" /></TableCell>
                <TableCell><Skeleton className="h-4 w-56" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-36" /></TableCell>
              </TableRow>
              {/* Row 5 */}
              <TableRow>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-48" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                <TableCell><Skeleton className="h-4 w-48" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
              </TableRow>
              {/* Row 6 */}
              <TableRow>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-36" /></TableCell>
                <TableCell><Skeleton className="h-4 w-44" /></TableCell>
                <TableCell><Skeleton className="h-4 w-52" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
              </TableRow>
              {/* Row 7 */}
              <TableRow>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell><Skeleton className="h-4 w-48" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
              </TableRow>
              {/* Row 8 */}
              <TableRow>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-44" /></TableCell>
                <TableCell><Skeleton className="h-4 w-36" /></TableCell>
                <TableCell><Skeleton className="h-4 w-56" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
              </TableRow>
              {/* Row 9 */}
              <TableRow>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                <TableCell><Skeleton className="h-4 w-44" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
              </TableRow>
              {/* Row 10 */}
              <TableRow>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-48" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell><Skeleton className="h-4 w-52" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Pagination skeleton */}
        <div className="flex items-center justify-end space-x-2">
          <Skeleton className="h-4 w-32" />
          <div className="space-x-2 flex">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
