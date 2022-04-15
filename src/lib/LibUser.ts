const { PrismaClient } = require('@prisma/client')
//import LibCsrf from "./LibCsrf"
//import logger from './logger'

export default {
  getItems :async function(){
    try {
      console.log("tasks");
      const prisma = new PrismaClient()
      const items = await prisma.user.findMany({
        orderBy: { id: 'desc',},
      })
      await prisma.$disconnect()
      return items      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItems');
    }          
  },    
  getItem :async function(id: number){
    try {
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItem');
    }          
  },
  //
  countUser :async function(){
    try {
      const prisma = new PrismaClient()
      const userCount = await prisma.user.count()
      await prisma.$disconnect()
//console.log(userCount);
      return userCount      
    } catch (err) {
      console.error(err);
      throw new Error('Error , countUser');
    }          
  },    

  addUser :async function(args: any){
    try {
      console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.user.create({
        data: {
          email: args.email,
        }
      }) 
      await prisma.$disconnect()
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , addUser: '+ err);
    }          
  },
  updateUser :async function(args: any){
    try {
//console.log( args); 
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateUser,'+ err);
    }          
  },  
  deleteUser :async function(args: any){
    try {
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteUser,' + err);
    }          
  },             
}
