"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function AddRoleModal({ isOpen, onClose }) {
  const [roleName, setRoleName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //addRole(roleName);
    setRoleName("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dodaj novu rolu</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Ime role"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            required
          />
          <DialogFooter>
            <Button type="submit">Dodaj</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
