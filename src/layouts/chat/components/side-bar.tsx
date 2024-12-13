import chatModel from "@/models/chat.model";
import { useSnapshot } from "valtio";
import ChatPanel from "./chat-panel";
import KnowledgeBasePanel from './knowledge-base-panel';
import MarketPanel from './market-panel';

export default function SideBar() {
    const { activeKey } = useSnapshot(chatModel.state);

    return (
        <aside className="flex flex-col h-full w-full overflow-hidden">
            {activeKey === 'chat' && <ChatPanel />}
            {activeKey === 'knowledge-base' && <KnowledgeBasePanel />}
            {activeKey === 'market' && <MarketPanel />}
        </aside>
    );
}