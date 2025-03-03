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

export function AddApplicationModal({ isOpen, onClose, addApplication }) {
  const [appName, setAppName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication(appName);
    setAppName("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dodaj novu aplikaciju</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Ime aplikacije"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
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
