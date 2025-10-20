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
  // Varied widths for more realistic skeleton appearance
  const rowWidths = [
    ["w-8", "w-32", "w-36", "w-28", "w-64"],
    ["w-8", "w-28", "w-40", "w-24", "w-72"],
    ["w-8", "w-36", "w-32", "w-32", "w-56"],
    ["w-8", "w-24", "w-44", "w-28", "w-80"],
    ["w-8", "w-40", "w-36", "w-20", "w-64"],
    ["w-8", "w-32", "w-32", "w-24", "w-72"],
    ["w-8", "w-36", "w-28", "w-32", "w-60"],
    ["w-8", "w-28", "w-40", "w-28", "w-68"],
    ["w-8", "w-32", "w-36", "w-24", "w-64"],
    ["w-8", "w-40", "w-32", "w-32", "w-72"],
  ];

  return (
    <div className="container mx-auto py-10">
      {/* Page title skeleton with subtle animation */}
      <Skeleton className="h-8 w-48 mb-6 animate-pulse" />

      <div className="space-y-4">
        {/* Search bar skeleton */}
        <div className="flex items-center">
          <Skeleton className="h-10 w-full max-w-sm animate-pulse" />
        </div>

        {/* Table skeleton */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead><Skeleton className="h-4 w-8" /></TableHead>
                <TableHead><Skeleton className="h-4 w-24" /></TableHead>
                <TableHead><Skeleton className="h-4 w-24" /></TableHead>
                <TableHead><Skeleton className="h-4 w-24" /></TableHead>
                <TableHead><Skeleton className="h-4 w-16" /></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rowWidths.map((widths, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className={`h-4 ${widths[0]} animate-pulse`} /></TableCell>
                  <TableCell><Skeleton className={`h-4 ${widths[1]} animate-pulse`} /></TableCell>
                  <TableCell><Skeleton className={`h-4 ${widths[2]} animate-pulse`} /></TableCell>
                  <TableCell><Skeleton className={`h-4 ${widths[3]} animate-pulse`} /></TableCell>
                  <TableCell><Skeleton className={`h-4 ${widths[4]} animate-pulse`} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination skeleton */}
        <div className="flex items-center justify-end space-x-2">
          <Skeleton className="h-4 w-32 animate-pulse" />
          <div className="space-x-2 flex">
            <Skeleton className="h-8 w-20 animate-pulse" />
            <Skeleton className="h-8 w-16 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
