"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AddUserRole, Application, Role } from "@/lib/types";

type AssignRoleModalProps = {
  isOpen: boolean;
  onClose: () => void;
  applications: Application[];
  roles: Role[];
  assignRole: (data: AddUserRole) => void;
};

export function AssignRoleModal({
  isOpen,
  onClose,
  applications,
  roles,
  assignRole,
}: AssignRoleModalProps) {
  const [mbr, setMbr] = useState<number>();
  const [selectedApp, setSelectedApp] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    assignRole({
      userId: mbr,
      appId: Number(selectedApp),
      roleId: Number(selectedRole),
    });
    setSelectedApp("");
    setSelectedRole("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="text-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center mb-4">
            Dodaj autorizaciju
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="MBR"
            value={mbr}
            onChange={(e) => setMbr(Number(e.target.value))}
            required
            className="text-xl"
          />
          <Select value={selectedApp} onValueChange={setSelectedApp}>
            <SelectTrigger>
              <SelectValue
                placeholder="Odaberi aplikaciju"
                className="text-xl"
              />
            </SelectTrigger>
            <SelectContent className="text-xl">
              {applications.map((app) => (
                <SelectItem key={app.id} value={app.id.toString()} className="text-xl">
                  {app.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger>
              <SelectValue placeholder="Odaberi Rolu" className="text-xl" />
            </SelectTrigger>
            <SelectContent className="text-xl">
              {roles.map((role) => (
              <SelectItem key={role.id} value={role.id.toString()} className="text-xl">
                {role.name}
              </SelectItem>
              ))}
            </SelectContent>
            </Select>
          <DialogFooter className="flex justify-center">
            <Button type="submit">Dodaj</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
