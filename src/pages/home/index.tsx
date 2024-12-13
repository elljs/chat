import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Header from "./components/header";
import MessageList from "./components/message-list";
import MessageInput from "./components/message-input";

export default function Chat() {
    return (
        <ResizablePanelGroup className="bg-gray-200/20" direction="vertical">
            <ResizablePanel>
                <Header />
                <MessageList />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={20} minSize={10} maxSize={35}>
                <MessageInput />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}