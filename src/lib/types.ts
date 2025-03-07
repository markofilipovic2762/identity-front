export type Role = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  ad: string;
  name: string;
};

export type Application = {
  id: number;
  name: string;
};

export type UserRole = {
  id: number;
  roleId: number;
  appId: number;
  userId: number;
  roleName: string;
  appName: string;
  userName: string;
};

export type AddUserRole = {
  userId: number | undefined;
  appId: number | undefined;
  roleId: number | undefined;
};

export interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type UserAndRoleResponse= {
  userId: number;
  roleId: number;
  userName: string;
  roleName: string;
}

export type AppAndRoleResponse = {
  appId: number;
  roleId: number;
  appName: string;
  roleName: string;
}