
import LibTask from './lib/LibTask';
import LibCsrf from './lib/LibCsrf';
import LibSite from './lib/LibSite';
import LibCategory from "./lib/LibCategory"
import LibPost from "./lib/LibPost"
import LibPage from "./lib/LibPage"

/* resolvers */
const resolvers = {
  Query: {
    hello: () => 'Hello world-22',
    /* tasks */
    tasks: async () => {
      return await LibTask.getItems();
    },     
    async task(parent, args, context, info){
      return await LibTask.getTask(args.id);
    },
    sites: async () => {
      return await LibSite.getItems();
    },     
    async site(parent, args, context, info){
      return await LibSite.getItem(args.id);
    },
    /* catgory */
    categories: async (parent, args, context, info) => {
      return await LibCategory.getItems(args);
    },
    async category(parent, args, context, info){
      return await LibCategory.getItem(args.id);
    },    
    /* post */  
    posts: async (parent, args, context, info) => {
      return await LibPost.getItems(args);
    },
    async post(parent, args, context, info){
      return await LibPost.getItem(args.id);
    }, 
    searchPosts: async (parent, args, context, info) => {
      return await LibPost.searchPosts(args);
    },
    /* page */
    pages: async (parent, args, context, info) => {
      return await LibPage.getItems(args);
    },
    async page(parent, args, context, info){
      return await LibPage.getItem(args.id);
    },   
  },
  Mutation: {
    /* tasks */
    addTask: async (parent, args, context) => {
      const ret = await LibTask.addTask(args)
      return ret
    },
    updateTask: async (parent, args, context) => {
      const ret = await LibTask.updateTask(args)
      return ret
    }, 
    deleteTask: async (parent, args, context) => {
      const ret = await LibTask.deleteTask(args)
      return ret
    },
    /* csrf */
    async addToken(parent, args, context, info){
      return await LibCsrf.addToken(args);
    },
    addSite: async (parent, args, context) => {
      const ret = await LibSite.addSite(args)
      return ret
    },  
    updateSite: async (parent, args, context) => {
      const ret = await LibSite.updateSite(args)
      return ret
    },
    deleteSite: async (parent, args, context) => {
      const ret = await LibSite.deleteSite(args)
      return ret
    },      
    /* category */
    addCategory: async (parent, args, context) => {
      const ret = await LibCategory.addCategory(args)
      return ret
    }, 
    updateCategory: async (parent, args, context) => {
      const ret = await LibCategory.updateCategory(args)
      return ret
    },  
    deleteCategory: async (parent, args, context) => {
      const ret = await LibCategory.deleteCategory(args)
      return ret
    }, 
    /* post */
    addPost: async (parent, args, context) => {
      const ret = await LibPost.addPost(args)
      return ret
    }, 
    updatePost: async (parent, args, context) => {
      const ret = await LibPost.updatePost(args)
      return ret
    },
    deletePost: async (parent, args, context) => {
      const ret = await LibPost.deletePost(args)
      return ret
    }, 
    /* page */
    addPage: async (parent, args, context) => {
      const ret = await LibPage.addPage(args)
      return ret
    }, 
    updatePage: async (parent, args, context) => {
      const ret = await LibPage.updatePage(args)
      return ret
    },
    deletePage: async (parent, args, context) => {
      const ret = await LibPage.deletePage(args)
      return ret
    }, 

  }
};
export default resolvers;
