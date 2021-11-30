const Sequelize=require('sequelize');
const sequelize = new Sequelize('taskproject','root','yuvi1005',{
    host:'localhost',
    dialect:'mysql'
})
 module.exports=sequelize;