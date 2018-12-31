DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price DECIMAL(4,0),
  stock_quantity INT,
  
  PRIMARY KEY(item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(10, "Mom Jeans", "Mom Clothing", 20, 15), (11, "Dress with Pockets", "Mom Clothing", 24, 20),
(12, "Scarf", "Mom Clothing", 90, 25), (13, "Shoes", "Mom Clothing", 30, 10),
(14, "Dad Jeans", "Dad Clothing", 20, 15), (15, "Ties", "Dad Clothing", 12, 7),
(16, "Jacket", "Dad Clothing", 40, 3), (17, "Boots", "Dad Clothing", 30, 9),
(18, "Shoes", "Baby Clothing", 20, 15), (19, "Bows", "Baby Clothing", 2, 18),
(20, "Balls", "Baby Toys", 2, 28), (21, "Trucks", "Baby Toys", 3, 13) ,
(22, "Doll", "Baby Toys", 20, 2); 