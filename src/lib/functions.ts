import api from "./api";
import { AddUserRole, Application, Role } from "./types";

export async function fetchRoles(): Promise<Role[]> {
  try {
    const response = await api.get<Role[]>("/roles");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching roles");
  }
}

export async function addRole(role: Role) {
  try {
    const response = await api.post<Role>("/roles", role);
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
