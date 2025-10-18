"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { globalSearch, SearchResults } from "@/db/actions/search";

// TODO: Remove this temporary type when SearchResults is properly implemented
interface TempSearchResults {
  customers: { id: number; name: string }[];
  products: { id: number; name: string }[];
  orders: { id: number; customerName: string }[];
}

export function GlobalSearch() {
  // TODO: Set up state
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  // TODO: Uncomment SearchResults import from search actions when type is implemented
  const [results, setResults] = useState<TempSearchResults>({
    customers: [],
    products: [],
    orders: [],
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // TODO: Implement debounced search with useEffect
  // Hints:
  // - Clear results if query is empty
  // - Use setTimeout to debounce (300ms delay)
  // - Use startTransition to wrap the async search
  // - Clean up timer with return () => clearTimeout(timer)
  //
  // useEffect(() => {
  //   if (!query.trim()) {
  //     setResults({ customers: [], products: [], orders: [] })
  //     return
  //   }
  //
  //   const timer = setTimeout(() => {
  //     startTransition(async () => {
  //       const searchResults = await globalSearch(query)
  //       setResults(searchResults)
  //     })
  //   }, 300)
  //
  //   return () => clearTimeout(timer)
  // }, [query])

  // TODO: Implement result click handler
  // const handleResultClick = (type: string, id: number) => {
  //   setOpen(false)
  //   setQuery("")
  //
  //   switch (type) {
  //     case 'customer':
  //       router.push(`/customers`)
  //       break
  //     case 'product':
  //       router.push(`/products`)
  //       break
  //     case 'order':
  //       router.push(`/orders`)
  //       break
  //   }
  // }

  // TODO: Calculate total results
  const totalResults =
    results.customers.length + results.products.length + results.orders.length;

  return (
    <>
      {/* Search input in sidebar */}
      <div className="p-2">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-8"
            onClick={() => setOpen(true)}
            readOnly
          />
        </div>
      </div>

      {/* Search dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* TODO: Add search input */}
            {/* Should autofocus and update query state */}
            {/* Show loading spinner when isPending is true */}

            {/* TODO: Show results when query is valid (>= 2 chars) */}
            {/* Group results by type: Customers, Products, Orders */}
            {/* Make each result clickable */}
            {/* Show "no results" message when totalResults === 0 */}
            {/* Show "type more" message when query < 2 chars */}

            <div className="text-center text-sm text-muted-foreground py-8">
              Search component needs to be implemented
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
