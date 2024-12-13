import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import chatModel from "@/models/chat.model";
import { Aperture, Box, MessageCircle, Puzzle, Settings, UserSearch } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { User } from "./user";

interface ActivityItemProps {
    isActive: boolean;
    count?: number;
    icon: ReactNode;
    onClick: () => void;
}

const ActivityItem = ({ icon, isActive, count = 0, onClick }: ActivityItemProps) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center w-full h-12 cursor-pointer hover:text-primary-foreground",
                isActive && 'text-primary-foreground',
            )}
            onClick={onClick}
        >
            <div className="relative size-6">
                {icon}
                {count > 0 && (
                    <Badge
                        className="absolute -top-1 -right-2 flex items-center justify-center p-0 rounded-full size-4 !bg-rose-500 text-white">
                        {count}
                    </Badge>
                )}
            </div>
        </div>
    );
}

export default function ActivityBar() {
    const { activeKey } = useSnapshot(chatModel.state);
    const nav = useNavigate();

    useEffect(() => {
        nav(`/${activeKey === 'chat' ? '' : activeKey}`);
    }, [activeKey]);

    return (
        <aside className="flex flex-col h-full w-[48] bg-primary text-primary-foreground/60 shadow-lg">
            <User />
            <div className="flex-1">
                <ActivityItem
                    icon={<MessageCircle className="size-6" />}
                    isActive={'chat' === activeKey}
                    count={1}
                    onClick={() => {
                        chatModel.setActiveKey('chat');
                    }}
                />
                <ActivityItem
                    icon={<UserSearch className="size-6" />}
                    isActive={'market' === activeKey}
                    onClick={() => {
                        chatModel.setActiveKey('market');
                    }}
                />
                <ActivityItem
                    icon={<Box className="size-6" />}
                    isActive={'knowledge-base' === activeKey}
                    onClick={() => {
                        chatModel.setActiveKey('knowledge-base');
                    }}
                />
                <ActivityItem
                    icon={<Aperture className="size-6" />}
                    isActive={'moment' === activeKey}
                    onClick={() => {
                        chatModel.setMomentPanelOpen(true);
                    }}
                />
            </div>
            <ActivityItem icon={<Settings />} isActive onClick={() => { }} />
        </aside>
    );
}