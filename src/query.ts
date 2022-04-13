
export const GQL_QUERY = `
  type Query {
    hello: String
    getToken : String
    tasks: [Task]
    task(id: Int): Task    
    sites: [Site]
    site(id: Int): Site 
    categories(siteId: Int): [Category]
    category(id: Int): Category
    posts(siteId: Int): [Post]
    post(id: Int): Post
    searchPosts(siteId: Int, seachKey: String): [Post]
    pages(siteId: Int): [Page]
    page(id: Int): Page

  }
`;