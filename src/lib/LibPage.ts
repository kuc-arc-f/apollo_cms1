const { PrismaClient } = require('@prisma/client')
import LibCsrf from "./LibCsrf"
import logger from './logger'

export default {
  getItems :async function(args: any){
    try {
console.log(args);
//      console.log("tasks");
      const prisma = new PrismaClient()
      const items = await prisma.page.findMany({
        orderBy: { id: 'desc',},
        where: { siteId: args.siteId },
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
      // 
      const prisma = new PrismaClient();
      let item = await prisma.page.findUnique({
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
  addPage :async function(args: any){
    try {
      //
      console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.page.create({
        data: {
          title: args.title,
          content: args.content,
          siteId: args.siteId,
          userId: "",
        }
      }) 
      await prisma.$disconnect()
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , addPage: '+ err);
    }          
  },
  updatePage :async function(args: any){
    try {
      // 
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.page.update({
        where: { id: args.id},
        data: { 
          title: args.title ,
          content: args.content, 
        },
      })               
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , updatePage,'+ err);
    }          
  },  
  deletePage :async function(args: any){
    try {
      // 
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.page.delete({
        where: { id: Number(args.id) },
      })                   
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , deletePage,' + err);
    }          
  },             
}
