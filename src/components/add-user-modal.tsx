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
import { AddUserRole } from "@/lib/types";

export function AddUserModal({ isOpen, onClose } : AddUserModalProps) {
  const [ad, setAd] = useState("");
  const [rola, setRola] = useState<number>();
  const [aplikacija, setAplikacija] = useState<number>();

  const addUser = async (user: AddUserRole) => {
    try {
      const response = await fetch("http://localhost:5065/api/userrole", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
    } catch (error) {}
  };

  const fetchApplications = async () => {
    try {
      const response = await fetch("http://localhost:5065/api/application");
      const data = await response.json();
    } catch (error) {}
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({ ad, rola, aplikacija });
    setAd("");
    setRola(undefined);
    setAplikacija(undefined);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="mt-4">
          <DialogTitle>Dodaj autorizaciju</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Ad nalog"
            value={ad}
            onChange={(e) => setAd(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Rola"
            value={rola}
            onChange={(e) => setRola(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Aplikacija"
            value={aplikacija}
            onChange={(e) => setRola(e.target.value)}
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
