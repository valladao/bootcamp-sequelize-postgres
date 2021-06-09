import pkg from "sequelize"

const { Sequelize, Model, DataTypes } = pkg

const user = "nbylxkmdtduyod"
const host = "ec2-34-230-115-172.compute-1.amazonaws.com"
const database = "dadu28fk6s5ga0"
const password =
  "2a7d33443ff59c7a6a02f4ca4e4cda2f90d3c7c4c1622daed20d84964bdb3e9c"
const port = "5432"

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
    },
  },
})

class Dog extends Model {}

Dog.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "dog",
    timestamps: false,
  }
)

//Dog.sync()

Dog.update(
  {
    age: 9,
  },
  {
    where: {
      name: "Roger",
    },
  }
)
