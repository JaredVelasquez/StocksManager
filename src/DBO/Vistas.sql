USE StocksManager

IF EXISTS (
SELECT *
FROM sys.views
  JOIN sys.schemas
  ON sys.views.schema_id = sys.schemas.schema_id
WHERE sys.schemas.name = N'VistaInventario'
  AND sys.views.name = N'VistaInventario'
)
DROP VIEW SchemaName.VistaInventario
GO

CREATE VIEW dbo.VistaInventario
AS
  SELECT Product.name, Proveedors.first_name , Category.[description], Inventory.stock  as 'Inventario'
  FROM dbo.Inventory
    JOIN dbo.Product on Product.id_product = Inventory.id_Inventory
    JOIN dbo.Category on Product.id_category = Category.id_category
    JOIN dbo.Proveedors on Proveedors.id_proveedors = Product.id_proveedors

GO

SELECT *
FROM dbo.VistaInventario
GO

IF EXISTS (
SELECT *
FROM sys.views
  JOIN sys.schemas
  ON sys.views.schema_id = sys.schemas.schema_id
WHERE sys.schemas.name = N'VistaUsers'
  AND sys.views.name = N'VistaUsers'
)
DROP VIEW SchemaName.VistaUsers
GO

CREATE VIEW dbo.VistaUsers
AS
  SELECT Users.name, Users.charge, Users.age, Roles.name_role  as 'Users'
  FROM dbo.Users
    JOIN dbo.Acount on Acount.id_acount = Users.id_acount
    JOIN dbo.Roles on Roles.id_role = Acount.id_role

GO

SELECT *
FROM dbo.VistaUsers
GO


IF EXISTS (
SELECT *
FROM sys.views
  JOIN sys.schemas
  ON sys.views.schema_id = sys.schemas.schema_id
WHERE sys.schemas.name = N'VistaPedidos'
  AND sys.views.name = N'VistaPedidos'
)
DROP VIEW SchemaName.VistaPedidos
GO

CREATE VIEW dbo.VistaPedidos
AS
  SELECT Product.name, Proveedors.first_name, Orders.date_emition  as 'Ordenes'
  FROM dbo.Orders
    JOIN dbo.Warehause on Warehause.id_warehause = Orders.id_warehause
    JOIN dbo.Inventory on Inventory.id_Inventory = Warehause.id_inventory
    JOIN dbo.Product on Product.id_product = Inventory.id_producto
    JOIN dbo.Proveedors on Proveedors.id_proveedors = Product.id_proveedors

GO

SELECT *
FROM dbo.VistaPedidos
GO
