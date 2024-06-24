// Component.tsx
"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchema } from "./schemas";
import FormInput from "./FormInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "lucide-react";

export default function Component() {
  const [activeTab, setActiveTab] = useState("distribution-lists");
  const [searchTerm, setSearchTerm] = useState("");
  const [distributionLists, setDistributionLists] = useState([
    {
      id: 1,
      name: "Marketing Team",
      members: ["john@example.com", "jane@example.com", "bob@example.com"],
      owner: "john@example.com",
    },
    {
      id: 2,
      name: "Sales Team",
      members: ["alice@example.com", "david@example.com"],
      owner: "alice@example.com",
    },
    {
      id: 3,
      name: "HR Department",
      members: [
        "emily@example.com",
        "michael@example.com",
        "sarah@example.com",
      ],
      owner: "emily@example.com",
    },
  ]);
  const [sharedMailboxes, setSharedMailboxes] = useState([
    {
      id: 1,
      name: "Support",
      members: ["john@example.com", "jane@example.com", "bob@example.com"],
      owner: "john@example.com",
    },
    {
      id: 2,
      name: "Accounting",
      members: ["alice@example.com", "david@example.com"],
      owner: "alice@example.com",
    },
    {
      id: 3,
      name: "Payroll",
      members: [
        "emily@example.com",
        "michael@example.com",
        "sarah@example.com",
      ],
      owner: "emily@example.com",
    },
  ]);
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Engineering",
      members: ["john@example.com", "jane@example.com", "bob@example.com"],
      owner: "john@example.com",
    },
    {
      id: 2,
      name: "Design",
      members: ["alice@example.com", "david@example.com"],
      owner: "alice@example.com",
    },
    {
      id: 3,
      name: "Product",
      members: [
        "emily@example.com",
        "michael@example.com",
        "sarah@example.com",
      ],
      owner: "emily@example.com",
    },
  ]);

  const filteredDistributionLists = distributionLists.filter((list) =>
    list.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredSharedMailboxes = sharedMailboxes.filter((mailbox) =>
    mailbox.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTabChange = (tab: string) => setActiveTab(tab);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const handleAddMember = (type: string, id: number, email: string) => {
    switch (type) {
      case "distribution-list":
        setDistributionLists(
          distributionLists.map((list) =>
            list.id === id
              ? { ...list, members: [...list.members, email] }
              : list
          )
        );
        break;
      case "shared-mailbox":
        setSharedMailboxes(
          sharedMailboxes.map((mailbox) =>
            mailbox.id === id
              ? { ...mailbox, members: [...mailbox.members, email] }
              : mailbox
          )
        );
        break;
      case "team":
        setTeams(
          teams.map((team) =>
            team.id === id
              ? { ...team, members: [...team.members, email] }
              : team
          )
        );
        break;
      default:
        break;
    }
  };

  const handleRemoveMember = (type: string, id: number, email: string) => {
    switch (type) {
      case "distribution-list":
        setDistributionLists(
          distributionLists.map((list) =>
            list.id === id
              ? {
                  ...list,
                  members: list.members.filter((member) => member !== email),
                }
              : list
          )
        );
        break;
      case "shared-mailbox":
        setSharedMailboxes(
          sharedMailboxes.map((mailbox) =>
            mailbox.id === id
              ? {
                  ...mailbox,
                  members: mailbox.members.filter((member) => member !== email),
                }
              : mailbox
          )
        );
        break;
      case "team":
        setTeams(
          teams.map((team) =>
            team.id === id
              ? {
                  ...team,
                  members: team.members.filter((member) => member !== email),
                }
              : team
          )
        );
        break;
      default:
        break;
    }
  };

  const handleCreateRequest = (type: string) => {
    switch (type) {
      case "distribution-list":
        break;
      case "shared-mailbox":
        break;
      case "team":
        break;
      default:
        break;
    }
  };

  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = methods.handleSubmit((data) => console.log(data));

  return (
    <div className="flex flex-col h-full">
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Employee Dashboard</h1>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-gray-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Button onClick={() => handleCreateRequest("distribution-list")}>
            Create Distribution List
          </Button>
          <Button onClick={() => handleCreateRequest("shared-mailbox")}>
            Create Shared Mailbox
          </Button>
          <Button onClick={() => handleCreateRequest("team")}>
            Create Team
          </Button>
        </div>
      </header>
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex gap-4 mb-6">
          <Button
            variant={
              activeTab === "distribution-lists" ? "default" : "secondary"
            }
            onClick={() => handleTabChange("distribution-lists")}
          >
            Distribution Lists
          </Button>
          <Button
            variant={activeTab === "shared-mailboxes" ? "default" : "secondary"}
            onClick={() => handleTabChange("shared-mailboxes")}
          >
            Shared Mailboxes
          </Button>
          <Button
            variant={activeTab === "teams" ? "default" : "secondary"}
            onClick={() => handleTabChange("teams")}
          >
            Teams
          </Button>
        </div>
        {activeTab === "distribution-lists" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDistributionLists.map((list) => (
              <Card key={list.id}>
                <CardHeader>
                  <CardTitle>{list.name}</CardTitle>
                  <CardDescription>
                    {list.members.length} members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {list.members.map((member) => (
                      <div
                        key={member}
                        className="flex items-center justify-between"
                      >
                        <span>{member}</span>
                        {list.owner === member ? (
                          <Badge>Owner</Badge>
                        ) : (
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() =>
                              handleRemoveMember(
                                "distribution-list",
                                list.id,
                                member
                              )
                            }
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Input
                    type="email"
                    placeholder="Add member email"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleAddMember(
                          "distribution-list",
                          list.id,
                          e.currentTarget.value
                        );
                        e.currentTarget.value = "";
                      }
                    }}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        {activeTab === "shared-mailboxes" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSharedMailboxes.map((mailbox) => (
              <Card key={mailbox.id}>
                <CardHeader>
                  <CardTitle>{mailbox.name}</CardTitle>
                  <CardDescription>
                    {mailbox.members.length} members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {mailbox.members.map((member) => (
                      <div
                        key={member}
                        className="flex items-center justify-between"
                      >
                        <span>{member}</span>
                        {mailbox.owner === member ? (
                          <Badge>Owner</Badge>
                        ) : (
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() =>
                              handleRemoveMember(
                                "shared-mailbox",
                                mailbox.id,
                                member
                              )
                            }
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Input
                    type="email"
                    placeholder="Add member email"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleAddMember(
                          "shared-mailbox",
                          mailbox.id,
                          e.currentTarget.value
                        );
                        e.currentTarget.value = "";
                      }
                    }}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        {activeTab === "teams" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team) => (
              <Card key={team.id}>
                <CardHeader>
                  <CardTitle>{team.name}</CardTitle>
                  <CardDescription>
                    {team.members.length} members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {team.members.map((member) => (
                      <div
                        key={member}
                        className="flex items-center justify-between"
                      >
                        <span>{member}</span>
                        {team.owner === member ? (
                          <Badge>Owner</Badge>
                        ) : (
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() =>
                              handleRemoveMember("team", team.id, member)
                            }
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Input
                    type="email"
                    placeholder="Add member email"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleAddMember("team", team.id, e.currentTarget.value);
                        e.currentTarget.value = "";
                      }
                    }}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
