import { ChevronRight, File, Folder } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarProvider,
} from "@/components/ui/sidebar";
import Header from "./components/header";

// This is sample data.
const data = {
    changes: [
        {
            file: "README.md",
            state: "M",
        },
        {
            file: "api/hello/route.ts",
            state: "U",
        },
        {
            file: "app/layout.tsx",
            state: "M",
        },
    ],
    tree: [
        [
            "app",
            [
                "api",
                ["hello", ["route.ts"]],
                "page.tsx",
                "layout.tsx",
                ["blog", ["page.tsx"]],
            ],
        ],
        [
            "components",
            ["ui", "button.tsx", "card.tsx"],
            "header.tsx",
            "footer.tsx",
        ],
        ["lib", ["util.ts"]],
        ["public", "favicon.ico", "vercel.svg"],
        ".eslintrc.json",
        ".gitignore",
        "next.config.js",
        "tailwind.config.js",
        "package.json",
        "README.md",
    ],
};

export default function KnowledgeBase() {
    return (
        <div>
            <Header />
            <ResizablePanelGroup
                className="bg-card h-full"
                direction="horizontal"
            >
                <ResizablePanel defaultSize={30} minSize={10}>
                    <SidebarProvider>
                        <ScrollArea className="h-full overflow-auto">
                            <SidebarGroup>
                                <SidebarGroupLabel>变更</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {data.changes.map((item, index) => (
                                            <SidebarMenuItem key={index}>
                                                <SidebarMenuButton>
                                                    <File />
                                                    {item.file}
                                                </SidebarMenuButton>
                                                <SidebarMenuBadge>{item.state}</SidebarMenuBadge>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                            <SidebarGroup>
                                <SidebarGroupLabel>文件</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {data.tree.map((item, index) => (
                                            <Tree key={index} item={item} />
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </ScrollArea>
                    </SidebarProvider>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel minSize={50} className="p-2">

                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}

function Tree({ item }: { item: string | any[] }) {
    const [name, ...items] = Array.isArray(item) ? item : [item];

    if (!items.length) {
        return (
            <SidebarMenuButton
                isActive={name === "button.tsx"}
                className="data-[active=true]:bg-transparent"
            >
                <File />
                {name}
            </SidebarMenuButton>
        );
    }

    return (
        <SidebarMenuItem>
            <Collapsible
                className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
                defaultOpen={name === "components" || name === "ui"}
            >
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                        <ChevronRight className="transition-transform" />
                        <Folder />
                        {name}
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        {items.map((subItem, index) => (
                            <Tree key={index} item={subItem} />
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </Collapsible>
        </SidebarMenuItem>
    );
}
