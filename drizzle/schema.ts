import { sqliteTable, integer, text, numeric } from "drizzle-orm/sqlite-core"

export const categories = sqliteTable("Categories", {
	categoryId: integer("CategoryID").primaryKey({ autoIncrement: true }),
	categoryName: text("CategoryName"),
	description: text("Description"),
});

export const customers = sqliteTable("Customers", {
	customerId: integer("CustomerID").primaryKey({ autoIncrement: true }),
	customerName: text("CustomerName"),
	contactName: text("ContactName"),
	address: text("Address"),
	city: text("City"),
	postalCode: text("PostalCode"),
	country: text("Country"),
});

export const employees = sqliteTable("Employees", {
	employeeId: integer("EmployeeID").primaryKey({ autoIncrement: true }),
	lastName: text("LastName"),
	firstName: text("FirstName"),
	birthDate: numeric("BirthDate"),
	photo: text("Photo"),
	notes: text("Notes"),
});

export const suppliers = sqliteTable("Suppliers", {
	supplierId: integer("SupplierID").primaryKey({ autoIncrement: true }),
	supplierName: text("SupplierName"),
	contactName: text("ContactName"),
	address: text("Address"),
	city: text("City"),
	postalCode: text("PostalCode"),
	country: text("Country"),
	phone: text("Phone"),
});

export const orders = sqliteTable("Orders", {
	orderId: integer("OrderID").primaryKey({ autoIncrement: true }),
	customerId: integer("CustomerID").references(() => customers.customerId),
	employeeId: integer("EmployeeID").references(() => employees.employeeId),
	orderDate: numeric("OrderDate"),
	shipperId: integer("ShipperID").references(() => shippers.shipperId),
});

export const shippers = sqliteTable("Shippers", {
	shipperId: integer("ShipperID").primaryKey({ autoIncrement: true }),
	shipperName: text("ShipperName"),
	phone: text("Phone"),
});

export const products = sqliteTable("Products", {
	productId: integer("ProductID").primaryKey({ autoIncrement: true }),
	productName: text("ProductName"),
	supplierId: integer("SupplierID").references(() => suppliers.supplierId),
	categoryId: integer("CategoryID").references(() => categories.categoryId),
	unit: text("Unit"),
	price: numeric("Price"),
});

export const orderDetails = sqliteTable("OrderDetails", {
	orderDetailId: integer("OrderDetailID").primaryKey({ autoIncrement: true }),
	orderId: integer("OrderID").references(() => orders.orderId),
	productId: integer("ProductID").references(() => products.productId),
	quantity: integer("Quantity"),
});

