
export const GQL_MUTATION = `
type Mutation {
  addTask(token: String, title: String!): Task
  updateTask(token: String, id: Int!, title: String!): Task
  deleteTask(token: String, id: Int!): Task
  addToken(token: String): String
  addSite(name: String, content: String!): Site
  updateSite(id: Int!, name: String!, content: String!): Site
  deleteSite(id: Int!): Site
  addCategory(name: String, siteId: Int): Category
  updateCategory(id: Int!, name: String!): Category
  deleteCategory(id: Int!): Category
  addPost(title: String, content: String!, categoryId: Int!, siteId: Int): Post
  updatePost(id: Int!, title: String, content: String!, categoryId: Int!): Post
  deletePost(id: Int!): Post
  addPage(title: String, content: String!, siteId: Int): Page
  updatePage(id: Int!, title: String, content: String!): Page
  deletePage(id: Int!): Page
  addUser(email: String): User
  
}
`;
