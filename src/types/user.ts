export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  is_active: boolean;
  role: RoleTypes;
}

export enum RoleTypes {
  Admin = 'Админ',
  Manager = 'Менеджер',
  Teacher = 'Преподаватель',
}
