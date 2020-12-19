USE StocksManager

INSERT INTO dbo.Roles
  (
  [name_role]
  )
VALUES
  (
    'Administrador'
),
  (
    'Basic'
),
  (
    'Master'
)

GO


INSERT INTO Proveedors
  (
  [first_name], [cell]
  )
VALUES
  (
    'Juan', '94987965'
),
  (
    'Pedro', '84658478'
),
  (
    'Jared', '96654521'
),
  (
    'Fernando', '32215487'
),
  (
    'Leonardo', '95847451'
)

GO


INSERT INTO Category
  (
  [description]
  )
VALUES
  (
    'Herramientas'
),
  (
    'Carnes'
),
  (
    'Embutidos'
),
  (
    'Lacteos'
),
  (
    'Verduras'
)

GO


INSERT INTO Product
  (
  [id_category], [id_proveedors], [name], [unit_price]
  )
VALUES
  (
    1, 2, 'Martillos', 120
),
  (
    2, 1, 'Chuleta', 32
),
  (
    3, 4, 'Hog Dogs', 4
),
  (
    4, 3, 'Leche entera', 22
),
  (
    5, 5, 'Apio', 10
)

GO


INSERT INTO Acount
  (
  [id_role], [user_name], [password]
  )
VALUES
  (
    1, 'JaredVelasquez', '123soleado'
),
  (
    2, 'FernandoM', 'HolaMundo'
),
  (
    3, 'MelvinD', '123456'
)

GO


INSERT INTO Inventory
  (
  [id_producto], [stock]
  )
VALUES
  (
    1, 50
),
  (
    2, 200
),
  (
    3, 500
),
  (
    4, 45
),
  (
    5, 30
)

GO


INSERT INTO Users
  (
  [id_acount], [name], [age],[charge], [email], [phone_number]
  )
VALUES
  (
    1, 'Jared Velasquez', 35, 'Supervisor', 'jared.velasquez@gmail.com', '98755421'
),
  (
    2, 'Fernando Manzanares', 40, 'Obrero', 'fernandoM@gmail.com', '95847532'
),
  (
    3, 'Melvin Diaz', 55, 'Gerente General', 'melvinDiaz@gmail.com', '97845421'
)

GO


INSERT INTO Warehause
  (
  [id_inventory], [description]
  )
VALUES
  (
    1, 'Bodega 1 Registro 1'
),
  (
    2, 'Bodega 1 Registro 2'
),
  (
    3, 'Bodega 1 Registro 2'
)

GO


INSERT INTO Orders
  (
  [id_warehause], [id_user], [date_emition], [description], [state]
  )
VALUES
  (
    1, 1, '20200911', 'Pedido de carne', 'En proceso'
),
  (
    2, 2, '20200911', 'Pedido de sierras', 'Satisfactorio'
),
  (
    3, 3, '20200912', 'Pedido de tornillos', 'En Proceso'
)

GO

