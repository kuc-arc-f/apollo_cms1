const { PrismaClient } = require('@prisma/client')
import LibCsrf from "./LibCsrf"
import logger from './logger'

export default {
  getItems :async function(){
    try {
      // 

//      console.log("tasks");
      const prisma = new PrismaClient()
      const items = await prisma.site.findMany({
        orderBy: { id: 'desc',},
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
      // site(id: Int): Site
      const prisma = new PrismaClient();
      let item = await prisma.site.findUnique({
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
  addSite :async function(args: any){
    try {
      //   
      console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.site.create({
        data: {
          name: args.name,
          content: args.content,
          userId: "",
        }
      }) 
      await prisma.$disconnect()
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , addSite: '+ err);
    }          
  },
  updateSite :async function(args: any){
    try {
      // 
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.site.update({
        where: { id: args.id},
        data: { 
          name: args.name , content: args.content 
        },
      })               
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateSite,'+ err);
    }          
  },  
  deleteSite :async function(args: any){
    try {
      // 
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.site.delete({
        where: { id: Number(args.id) },
      })                   
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteSite,' + err);
    }          
  },             
}
