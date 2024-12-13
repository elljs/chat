import { cn, isMarkdown } from "@/lib/utils";
import dayjs from "dayjs";
import { filesize } from "filesize";
import { ChevronRight, CircleCheckBig, Files, FileSpreadsheet, RefreshCw, SquareArrowOutUpRight, ThumbsDown, ThumbsUp } from "lucide-react";
import markdownit from "markdown-it";
import MarkdownItCollapsible from "markdown-it-collapsible";
import Avatar, { genConfig, NiceAvatarProps } from "react-nice-avatar";
import "./item.css";

const md = markdownit().use(MarkdownItCollapsible);

export interface FileInfo {
    name: string;
    url: string;
    size: number;
}

export interface RefenceMessage {
    id: string;
    message: string | FileInfo;
}

export interface Action {
    label: string;
}

export interface ItemProps {
    id: string;
    userId: string;
    refenceMessage?: RefenceMessage;
    name: string;
    message: string | FileInfo;
    date?: string;
    avatar?: string | NiceAvatarProps;
    actions?: Action[];
    onClick: () => void;
}

export default function Item({ userId, refenceMessage, name, avatar, message, date, actions }: ItemProps) {

    const renderFile = ({ name, url, size }: FileInfo) => {
        return (
            <div className="flex space-x-2 min-w-[150px]">
                <div className="flex flex-col flex-1 space-y-1 text-xs">
                    <div>{name}</div>
                    <div className="text-xs text-muted-foreground/50">{filesize(size, { standard: "jedec" })}</div>
                </div>
                <div className="flex justify-center items-center w-8 h-10 rounded bg-green-700 p-1 text-white">
                    <FileSpreadsheet className="size-6" />
                </div>
            </div>
        );
    }

    const renderMarkdown = (markdown: string) => {
        return (
            <div className="flex flex-col">
                <div className="mb-2 inline-flex items-center box-border">
                    <div className="inline-flex space-x-1 items-center font-medium py-2 px-4 rounded-lg bg-primary/20">
                        <CircleCheckBig className="size-4 text-primary" />
                        <span>
                            已阅读知识库 21 个相关文件
                        </span>
                    </div>
                </div>
                <div
                    className="max-w-[600px] prose dark:prose-invert px-2 overflow-x-auto text-xs whitespace-nowrap"
                    dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
                />
                <div className="flex justify-between items-center text-muted-foreground/50 pt-2 px-2 cursor-pointer text-xs">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 hover:text-primary">
                            <Files className="size-4" />
                            <span>复制</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-primary">
                            <RefreshCw className="size-4" />
                            <span>重新生成</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-primary">
                            <SquareArrowOutUpRight className="size-4" />
                            <span>转发</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <ThumbsUp className="size-4 hover:text-primary" />
                        <ThumbsDown className="size-4 hover:text-primary" />
                    </div>
                </div>
            </div>
        );
    }

    const type = typeof message === 'string' ? 'text' : 'file';
    const isMe = userId === '0';

    return (
        <div className={cn(
            "flex flex-col space-y-2 w-full p-2",
            isMe ? 'items-end' : 'items-start'
        )}>
            <div className={
                cn(
                    "flex space-x-2",
                    isMe ? 'flex-row-reverse' : ''
                )
            }>
                {typeof avatar === 'string' ?
                    <img alt="avatar" className="size-8 rounded" src={avatar} /> :
                    <Avatar className="size-8" shape="rounded" {...genConfig(avatar)} />
                }
                <div className="flex flex-col space-y-1">
                    <div className="flex flex-col space-y-1">
                        {!isMe && <div className="text-xs text-muted-foreground/50">{name}</div>}
                        <div className={cn(
                            "relative text-xs bg-card p-2 rounded max-w-[600px]",
                            isMe ? 'file' === type ? 'arrow-reverse bg-card text-card-foreground' : 'arrow-reverse arrow-primary bg-primary text-primary-foreground' : 'arrow',
                        )}>
                            {
                                typeof message === 'string' ?
                                    isMarkdown(message) ? renderMarkdown(message)
                                        : message
                                    : renderFile(message)
                            }
                        </div>
                    </div>
                    {actions && actions.length > 0 && (
                        <div className="inline-flex w-auto items-center space-x-4">
                            <div className="flex flex-col space-y-2 text-xs mt-1">
                                {actions.map((action, index) => (
                                    <div key={index} className="inline-flex w-auto items-center space-x-4 bg-card p-2 rounded cursor-pointer">
                                        <div className="inline-flex w-auto items-center space-x-1 hover:text-primary">
                                            <span>{action.label}</span>
                                            <ChevronRight className="size-4" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {refenceMessage && (
                        <div className="text-xs p-2 bg-gray-200 rounded text-muted-foreground/50">
                            {typeof refenceMessage?.message === 'string' ? refenceMessage?.message : renderFile(refenceMessage?.message)}
                        </div>
                    )}
                </div>
            </div>
            {date &&
                (
                    <div className="mt-4 w-full text-center text-xs text-muted-foreground/50">
                        {dayjs(date).format('HH:mm')}
                    </div>
                )
            }
        </div>
    );
}