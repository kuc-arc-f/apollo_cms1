const { PrismaClient } = require('@prisma/client')
import LibCsrf from "./LibCsrf"
import logger from './logger'

export default {
  getItems :async function(args: any){
    try {
console.log(args);
      const prisma = new PrismaClient()
      const items = await prisma.category.findMany({
        orderBy: { id: 'desc',},
        where: { siteId: args.siteId },
      })
      await prisma.$disconnect()
//      console.log(items);
      return items      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItems');
    }          
  },    
  getItem :async function(id: number){
    try {
      // 
      const prisma = new PrismaClient();
      let item = await prisma.category.findUnique({
        where: { id: id },
      });        
      await prisma.$disconnect()
//console.log(item);
      return item;
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItem');
    }          
  },
  addCategory :async function(args: any){
    try {
      //    
      console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.category.create({
        data: {
          name: args.name,
          siteId: args.siteId,
          userId: "",
        }
      }) 
      await prisma.$disconnect()
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , addCategory: '+ err);
    }          
  },
  updateCategory :async function(args: any){
    try {
      // 
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.category.update({
        where: { id: args.id},
        data: { 
          name: args.name
        },
      })               
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateCategory,'+ err);
    }          
  },  
  deleteCategory :async function(args: any){
    try {
      // 
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.category.delete({
        where: { id: Number(args.id) },
      })                   
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteCategory,' + err);
    }          
  },             
}
