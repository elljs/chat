import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import KeepAlive, { useKeepAliveRef } from "keepalive-for-react";
import { LoaderCircle } from "lucide-react";
import { Suspense, useMemo } from "react";
import { useOutlet } from "react-router-dom";
import ActivityBar from "./components/activity-bar";
import MomentPanel from "./components/moment-panel";
import SideBar from "./components/side-bar";

export default function ChatLayout() {
    const aliveRef = useKeepAliveRef();
    const outlet = useOutlet();

    const currentCacheKey = useMemo(() => {
        return location.pathname + location.search;
    }, [location.pathname, location.search]);

    return (
        <div className="flex h-screen w-screen">
            <ActivityBar />
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={20} minSize={10}>
                    <SideBar />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel minSize={30}>
                    <KeepAlive
                        transition
                        aliveRef={aliveRef}
                        activeCacheKey={currentCacheKey}
                        max={18}
                    >
                        <Suspense
                            fallback={
                                <div className="flex justify-center items-center bg-secondary p-10">
                                    <LoaderCircle className="animate-spin" />
                                </div>
                            }
                        >
                            {outlet}
                        </Suspense>
                    </KeepAlive>
                </ResizablePanel>
            </ResizablePanelGroup>
            <MomentPanel />
        </div>
    );
}