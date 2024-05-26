export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  is_active: boolean;
  role: RoleTypes;
}

export enum RoleTypes {
  Admin = 'Admin',
  Manager = 'Manager',
  Teacher = 'Teacher',
}
