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
import { globalSearch, SearchResults } from "@/db/actions/search";

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults>({
    customers: [],
    products: [],
    orders: [],
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    if (!query.trim()) {
      setResults({ customers: [], products: [], orders: [] });
      return;
    }

    const timer = setTimeout(async () => {
      const searchResults = await globalSearch(query);
      startTransition(() => {
        setResults(searchResults);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleResultClick = (type: string) => {
    setOpen(false);
    setQuery("");

    switch (type) {
      case "customer":
        router.push(`/customers`);
        break;
      case "product":
        router.push(`/products`);
        break;
      case "order":
        router.push(`/orders`);
        break;
    }
  };

  const totalResults =
    results.customers.length + results.products.length + results.orders.length;

  return (
    <>
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers, products, orders..."
                className="pl-8"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              {isPending && (
                <Loader2 className="absolute right-2 top-2.5 h-4 w-4 animate-spin text-muted-foreground" />
              )}
            </div>

            {query.trim().length >= 2 && !isPending && (
              <div className="space-y-4">
                {totalResults === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-8">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                ) : (
                  <>
                    {results.customers.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold mb-2">
                          Customers
                        </h3>
                        <div className="space-y-1">
                          {results.customers.map((customer) => (
                            <button
                              key={customer.id}
                              className="w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors"
                              onClick={() =>
                                handleResultClick("customer")
                              }
                            >
                              <div className="font-medium">{customer.name}</div>
                              {customer.city && (
                                <div className="text-sm text-muted-foreground">
                                  {customer.city}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {results.products.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold mb-2">Products</h3>
                        <div className="space-y-1">
                          {results.products.map((product) => (
                            <button
                              key={product.id}
                              className="w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors"
                              onClick={() =>
                                handleResultClick("product")
                              }
                            >
                              <div className="font-medium">{product.name}</div>
                              {product.category && (
                                <div className="text-sm text-muted-foreground">
                                  {product.category}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {results.orders.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold mb-2">Orders</h3>
                        <div className="space-y-1">
                          {results.orders.map((order) => (
                            <button
                              key={order.id}
                              className="w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors"
                              onClick={() =>
                                handleResultClick("order")
                              }
                            >
                              <div className="font-medium">
                                Order #{order.id}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {order.customerName} •{" "}
                                {order.orderDate
                                  ? new Date(
                                      order.orderDate
                                    ).toLocaleDateString()
                                  : "No date"}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {query.trim().length > 0 && query.trim().length < 2 && (
              <p className="text-center text-sm text-muted-foreground py-8">
                Type at least 2 characters to search
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
