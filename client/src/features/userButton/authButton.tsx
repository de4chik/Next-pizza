"use client";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";

import { User } from "lucide-react";

export const AuthButton = () => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline">
            <User size={16} />
            <span>Войти</span>
          </Button>
        }
      />
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Войти</DialogTitle>
          <DialogDescription>Войти в свою учетную запись</DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-5">
          <Input label="Электронная почта" type="email" />
          <Input label="Пароль" type="password" />
        </form>
        <DialogFooter className="flex justify-between">
          <DialogClose
            render={
              <Button variant="outline">
                Закрыть
              </Button>
            }
          />
          <Button type="submit" className={"flex-1"}>
            Войти
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
