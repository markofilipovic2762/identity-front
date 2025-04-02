import api from "./api";
import {
  AddUserRole,
  AppAndRoleResponse,
  Application,
  Role,
  User,
  UserAndRoleResponse,
} from "./types";

export async function fetchRoles(): Promise<Role[]> {
  try {
    const response = await api.get<Role[]>("/roles");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching roles");
  }
}

export async function addRole(rola: String) {
  try {
    const response = await api.post("/roles", { name: rola});
    return response.data;
  } catch (error) {
    throw new Error("Error adding role");
  }
}

export async function fetchApplications() {
  try {
    const response = await api.get("/apps");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching apps");
  }
}

export async function addApplication(app: string) {
  try {
    const response = await api.post<Application>("/apps", { name: app });
    return response.data;
  } catch (error) {
    throw new Error("Error adding app");
  }
}

export async function fetchUserRoles() {
  try {
    const response = await api.get("/userrole");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user roles");
  }
}

export async function addUserRole(userRole: AddUserRole) {
  try {
    const response = await api.post("/userrole", userRole);
    return response.data;
  } catch (error) {
    throw new Error("Error adding user role");
  }
}

export async function getAppAuth(
  appId: number
): Promise<UserAndRoleResponse[]> {
  try {
    const response = await api.get<UserAndRoleResponse[]>(
      `/userrole/${appId}/app`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching app roles");
  }
}

export async function getAppById(appId: number): Promise<Application> {
  try {
    const response = await api.get(`/apps/${appId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching app");
  }
}

export async function getUserById(userId: number): Promise<User> {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user");
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
}

export async function getUserAuth(id: number): Promise<AppAndRoleResponse[]> {
  try {
    const response = await api.get<AppAndRoleResponse[]>(
      `/userrole/${id}/user`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user auth");
  }
}

export async function removeUserAuth(id: number) {
  try {
    await api.delete(`/userrole/${id}`);
    window.location.reload();
  } catch (error) {
    throw new Error("Error removing user auth");
  }
}
