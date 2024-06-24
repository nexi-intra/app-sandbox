"use client";

import { useRouter } from "next/navigation";
import { APPNAME } from "../global";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();
  return (
    <div className="space-x-2 h-[90vh]">
      <Card>
        <CardContent>
          as an employee I like to have a dashboard from where I can see which
          distribution list that I am a member of, which I own. The same for
          shared mailboxes. And for team. If i own it, it like to have an
          interface for managing members. Also like to be able to request a new
          distribution list, shared mailbox and team
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => router.push("/" + APPNAME + "/employee-memberships")}
          >
            Open
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
