"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader className="text-center">
          <CardTitle>Выбор роли</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-x-8">
            <Link href={"/"}>
              <Button>Я Клиент</Button>
            </Link>
            <Link href={"/admin/login"}>
              <Button>Я Парикмахер</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
