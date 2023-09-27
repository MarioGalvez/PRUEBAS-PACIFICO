INSERT INTO Products (product_name, price, stock_quantity)
VALUES ('Laptop', 1000.00, 50);

UPDATE Products
SET stock_quantity = 75
WHERE product_id = 3;

-- First, delete order items associated with order_id = 10
DELETE FROM OrderItems
WHERE order_id = 10;

-- Then, delete the order itself
DELETE FROM Orders
WHERE order_id = 10;

SELECT c.first_name, c.last_name
FROM Customers c
INNER JOIN Orders o ON c.customer_id = o.customer_id
WHERE o.order_id = 5;

SELECT p.product_id, p.product_name, SUM(oi.subtotal) AS total_revenue
FROM Products p
LEFT JOIN OrderItems oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name