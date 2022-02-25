import { registerEnumType } from "type-graphql";

  export enum Role {
    Admin = 'ADMIN',
    User = 'CZK'
  }
  
  export enum UserRole {
    'ADMIN',
    'USER'
  }
  
  registerEnumType(UserRole, {
    name: "Role"
  });
