import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FolderClosed, MessageCircleMore, Smile } from "lucide-react";

export default function MessageInput() {
    return (
        <div className="h-full flex flex-col p-3">
            <div className="flex justify-between items-center">
                <div className="flex flex-1 items-center space-x-1">
                    <div className="cursor-pointer p-2 rounded hover:bg-slate-200">
                        <Smile className="size-4" />
                    </div>
                    <div className="cursor-pointer p-2 rounded hover:bg-slate-200">
                        <FolderClosed className="size-4" />
                    </div>
                    <div className="cursor-pointer p-2 rounded hover:bg-slate-200">
                        <MessageCircleMore className="size-4" />
                    </div>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode" className="text-xs text-muted-foreground/80">自主讨论</Label>
                    </div>
                </div>
            </div>
            <textarea className="flex-1 py-3 focus:outline-none bg-transparent caret-primary resize-none" />
        </div>
    );
}