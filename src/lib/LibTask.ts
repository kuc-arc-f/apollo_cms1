const { PrismaClient } = require('@prisma/client')
import LibCsrf from "./LibCsrf"
import logger from './logger'

export default {
  getItems :async function(){
    try {
      console.log("tasks");
//      logger.info("LibTask.getItems, start");
      const prisma = new PrismaClient()
      const items = await prisma.task.findMany({
        orderBy: { id: 'desc',},
      })
      await prisma.$disconnect()
//      console.log(items);
//      logger.info("LibTask.getItems, end");
      return items      
    } catch (err) {
      console.error(err);
//      logger.error( "Error ,LibTask.getItems: "+ err);
      throw new Error('Error , getItems');
    }          
  },    
  getTask :async function(id: number){
    try {
      const prisma = new PrismaClient();
      let item = await prisma.task.findUnique({
        where: { id: id },
      });        
      await prisma.$disconnect()
//console.log(item);
      return item;
    } catch (err) {
      console.error(err);
      throw new Error('Error , getTask');
    }          
  },
  addTask :async function(args: any){
    try {
      const valid = await LibCsrf.validToken(args);
      if(valid === false){
        throw new Error('Error , validToken');
      }
      console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.task.create({
        data: {
          title: args.title,
          userId: 0
        }
      }) 
      await prisma.$disconnect()
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , addTask: '+ err);
    }          
  },
  updateTask :async function(args: any){
    try {
//console.log( args); 
console.log(args);
      const valid = await LibCsrf.validToken(args);
      if(valid === false){
        throw new Error('Error , validToken');
      }
      const prisma = new PrismaClient();
      const result = await prisma.task.update({
        where: { id: args.id},
        data: { title: args.title },
      })               
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateTask,'+ err);
    }          
  },  
  deleteTask :async function(args: any){
    try {
console.log(args);
      const valid = await LibCsrf.validToken(args);
      if(valid === false){
        throw new Error('Error , validToken');
      }
      const prisma = new PrismaClient();
      const result = await prisma.task.delete({
        where: { id: Number(args.id) },
      })                   
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteTask,' + err);
    }          
  },             
}
