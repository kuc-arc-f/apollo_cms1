const {gql} = require('apollo-server-express');
import {GQL_QUERY} from './query'
import {GQL_MUTATION} from './mutation'

const scheme = {
  getTypeDefs : function(){
    return gql`
    type User {
      id: String
      email: String
      createdAt: String
    }
    type Task {
      id: Int
      title: String
      content: String
      createdAt: String
    }
    type Site {
      id: Int
      name: String
      content: String
      createdAt: String
    }    
    type Category {
      id: Int
      siteId: Int
      name: String
      userId: String
      createdAt: String
    }
    type Post {
      id: Int
      siteId: Int
      title: String
      content: String
      categoryId: Int
      userId: String
      createdAt: String
    }
    type Page {
      id: Int
      siteId: Int
      title: String
      content: String
      userId: String
      createdAt: String
    }            
      
    ${GQL_QUERY}
    ${GQL_MUTATION}
  `;
  }
}
export default scheme;
