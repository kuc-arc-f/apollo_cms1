const { PrismaClient } = require('@prisma/client')
import LibCsrf from "./LibCsrf"
import logger from './logger'

export default {
  getItems :async function(args: any){
    try {
console.log(args);
//      console.log("tasks");
      const prisma = new PrismaClient()
      const items = await prisma.post.findMany({
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
  // 
  searchPosts :async function(args: any){
    try {
console.log(args);
      const prisma = new PrismaClient()
      const items = await prisma.post.findMany({
        orderBy: { id: 'desc',},
        where: { 
          siteId: args.siteId, 
          title: {
            contains: args.seachKey,
          },
        },
      })
      await prisma.$disconnect()
      return items 
    } catch (err) {
      console.error(err);
      throw new Error('Error , searchPosts');
    }          
  },     
  getItem :async function(id: number){
    try {
      const prisma = new PrismaClient();
      let item = await prisma.post.findUnique({
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
  addPost :async function(args: any){
    try {
      //
      console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
          categoryId: args.categoryId,
          siteId: args.siteId,
          userId: "",
        }
      }) 
      await prisma.$disconnect()
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , addPost: '+ err);
    }          
  },
  updatePost :async function(args: any){
    try {
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.post.update({
        where: { id: args.id},
        data: { 
          title: args.title ,
          content: args.content, 
          categoryId: args.categoryId, 
        },
      })               
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , updatePost,'+ err);
    }          
  },  
  deletePost :async function(args: any){
    try {
      // 
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.post.delete({
        where: { id: Number(args.id) },
      })                   
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , deletePost,' + err);
    }          
  },             
}
