CREATE PROCEDURE GetTotalRevenueByCustomer(IN customer_id INT)
BEGIN
  DECLARE total_revenue DECIMAL(10, 2);

  SELECT SUM(oi.subtotal) INTO total_revenue
  FROM Orders o
  INNER JOIN OrderItems oi ON o.order_id = oi.order_id
  WHERE o.customer_id = customer_id;

  SELECT total_revenue AS TotalRevenue;
END;
//

DELIMITER ;