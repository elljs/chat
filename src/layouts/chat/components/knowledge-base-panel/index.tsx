import { Button } from "@/components/ui/button";
import { FileChartLine, FileCode2, FileImage, FileMusic, FileText, FileType, FileVideo2, Plus, Sheet } from "lucide-react";
import Header from "./header";

export default function KnowledgeBasePanel() {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <div className="p-2">
                <Button className="w-full" variant="outline">
                    <Plus className="size-4" />
                    新增文件
                </Button>
            </div>
            <div className="flex flex-col items-center space-y-1 text-sm px-2">
                <div className="flex items-center space-x-2 w-full p-2 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer rounded">
                    <FileCode2 className="size-4" />
                    <span>
                        代码
                    </span>
                </div>
                <div className="flex items-center space-x-2 w-full p-2 hover:bg-primary hover:text-primary-foreground cursor-pointer rounded">
                    <FileImage className="size-4" />
                    <span>
                        图片
                    </span>
                </div>
                <div className="flex items-center space-x-2 w-full p-2 hover:bg-primary hover:text-primary-foreground cursor-pointer rounded">
                    <FileVideo2 className="size-4" />
                    <span>
                        视频
                    </span>
                </div>
                <div className="flex items-center space-x-2 w-full p-2 hover:bg-primary hover:text-primary-foreground cursor-pointer rounded">
                    <FileMusic className="size-4" />
                    <span>
                        音频
                    </span>
                </div>
                <div className="flex items-center space-x-2 w-full p-2 hover:bg-primary hover:text-primary-foreground cursor-pointer rounded">
                    <FileType className="size-4" />
                    <span>
                        Word
                    </span>
                </div>
                <div className="flex items-center space-x-2 w-full p-2 hover:bg-primary hover:text-primary-foreground cursor-pointer rounded">
                    <Sheet className="size-4" />
                    <span>
                        Excel
                    </span>
                </div>
                <div className="flex items-center space-x-2 w-full p-2 hover:bg-primary hover:text-primary-foreground cursor-pointer rounded">
                    <FileChartLine className="size-4" />
                    <span>
                        PPT
                    </span>
                </div>
                <div className="flex items-center space-x-2 w-full p-2 hover:bg-primary hover:text-primary-foreground cursor-pointer rounded">
                    <FileText className="size-4" />
                    <span>
                        PDF
                    </span>
                </div>
            </div>
        </div>
    );
}