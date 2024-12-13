import Item, { ItemProps } from "./item";

const items: Partial<ItemProps>[] = [
    {
        id: '1',
        userId: '1',
        name: '陆小凤',
        message: {
            name: '研发计划.xlsx',
            url: 'https://研发计划.xlsx',
            size: 1024 * 1024 * 4
        },
        avatar: {
            "sex": "man",
            "faceColor": "#F9C9B6",
            "earSize": "big",
            "eyeStyle": "circle",
            "noseStyle": "short",
            "mouthStyle": "smile",
            "shirtStyle": "polo",
            "glassesStyle": "none",
            "hairColor": "#000",
            "hairStyle": "thick",
            "hatStyle": "none",
            "hatColor": "#FC909F",
            "shirtColor": "#77311D",
            "bgColor": "linear-gradient(45deg, #ff1717 0%, #ffd368 100%)"
        }
    },
    {
        id: '2',
        userId: '1',
        name: '楚留香',
        message: '这是为您定制的研发计划',
        refenceMessage: {
            id: '1',
            message: {
                name: '研发计划.xlsx',
                url: 'https://研发计划.xlsx',
                size: 1024 * 1024 * 4
            }
        },
        avatar: {
            "sex": "man",
            "faceColor": "#F9C9B6",
            "earSize": "big",
            "eyeStyle": "circle",
            "noseStyle": "long",
            "mouthStyle": "peace",
            "shirtStyle": "polo",
            "glassesStyle": "round",
            "hairColor": "#506AF4",
            "hairStyle": "thick",
            "hatStyle": "none",
            "hatColor": "#F48150",
            "shirtColor": "#F4D150",
            "bgColor": "linear-gradient(45deg, #176fff 0%, #68ffef 100%)"
        },
        date: '2024-11-01 10:08:00'
    },
    {
        id: '3',
        userId: '0',
        name: '我',
        message: {
            name: '研发计划.xlsx',
            url: 'https://研发计划.xlsx',
            size: 1024 * 1024 * 4
        },
        avatar: "https://avatars.githubusercontent.com/u/19965768?v=4",
    },
    {
        id: '4',
        userId: '0',
        name: '我',
        message: '这是我修改后的计划',
        avatar: "https://avatars.githubusercontent.com/u/19965768?v=4",
        date: '2024-11-01 12:12:00'
    },
    {
        id: '5',
        userId: '1',
        name: '楚留香',
        avatar: {
            "sex": "man",
            "faceColor": "#F9C9B6",
            "earSize": "big",
            "eyeStyle": "circle",
            "noseStyle": "long",
            "mouthStyle": "peace",
            "shirtStyle": "polo",
            "glassesStyle": "round",
            "hairColor": "#506AF4",
            "hairStyle": "thick",
            "hatStyle": "none",
            "hatColor": "#F48150",
            "shirtColor": "#F4D150",
            "bgColor": "linear-gradient(45deg, #176fff 0%, #68ffef 100%)"
        },
        message: `
根据您的修改，重新总结如下：        
# 研发计划

## 1. 项目概述
EllChat 是一款集成人工智能技术的通讯软件，旨在提供智能化的社交体验。它将结合最新的自然语言处理、机器学习、数据加密和用户界面设计技术，以满足用户对即时通讯、社交互动和信息安全的需求。研发周期设定为2个月。

## 2. 项目目标
- 实现基础的即时通讯功能。
- 集成AI助手，提供智能回复、日程管理、信息分类等服务。
- 确保数据传输和存储的安全性。
- 提供用户友好的界面和交互体验。
- 实现跨平台兼容性（iOS、Android、Web）。
+++ 查看详细计划
## 3. 研发阶段划分

### 3.1 需求分析与规划（第1周）
- 市场调研和竞品分析。
- 确定用户需求和产品定位。
- 制定详细的产品功能列表和优先级。
- 完成项目计划书和风险评估。

### 3.2 技术选型与架构设计（第2周）
- 确定技术栈和开发工具。
- 设计系统架构和数据库模型。
- 制定开发和测试流程。
- 确定数据安全和隐私保护措施。

### 3.3 原型设计与开发（第3-4周）
- 设计用户界面和用户体验流程。
- 开发最小可行性产品（MVP）。
- 进行内部测试和反馈迭代。

### 3.4 功能开发与集成（第5-6周）
- 开发核心通讯功能（消息发送、接收、存储）。
- 集成AI助手功能。
- 实现用户账户管理和社交网络功能。
- 开发跨平台应用。

### 3.5 安全性测试与优化（第7-8周）
- 进行全面的安全测试。
- 优化系统性能和用户体验。
- 准备数据备份和灾难恢复计划。

### 3.6 公测与反馈收集（第9周）
- 发布公测版本。
- 收集用户反馈和使用数据。
- 根据反馈进行产品迭代。

### 3.7 正式发布与市场推广（第10周）
- 准备发布计划和市场推广策略。
- 发布正式版本。
- 监控产品性能和用户反馈。

### 3.8 持续维护与更新（第11-12周及以后）
- 定期更新产品功能。
- 提供客户支持和问题解决。
- 跟踪技术趋势，持续优化产品。

## 4. 关键里程碑
- **M1**：完成需求分析和项目规划。
- **M2**：完成技术选型和架构设计。
- **M3**：完成原型设计与开发。
- **M4**：完成核心功能开发与集成。
- **M5**：完成安全性测试与性能优化。
- **M6**：完成公测并根据反馈迭代。
- **M7**：正式发布产品。
- **M8**：建立持续维护和更新机制。

## 5. 资源分配
- **人力资源**：项目经理、研发团队（前端、后端、AI、测试）、UI/UX设计师、市场推广团队。
- **技术资源**：服务器、数据库、开发工具、测试框架。
- **财务资源**：研发预算、市场推广预算、运营成本。

## 6. 风险管理
- **技术风险**：定期技术评审和代码审查。
- **市场风险**：持续市场调研和用户反馈。
- **法律风险**：确保符合数据保护法规和隐私政策。

## 7. 项目评估
- **进度评估**：每两周进行一次项目进度评估。
- **成本评估**：每月进行一次成本评估。
- **性能评估**：每次迭代后进行性能评估。

## 8. 附录
- **A1**：项目组织结构图。
- **A2**：详细技术文档。
- **A3**：市场调研报告。
+++
        `,
        actions: [
            {
                label: 'MVP具体包含哪些功能？'
            },
            {
                label: '如何评估技术风险？'
            }
        ]
    },
];

export default function MessageList() {
    return (
        <div className="flex-1 p-2 pb-20 h-full overflow-y-auto">
            {items.map((item, index) => (
                <Item
                    key={`${item.name}-${index}`}
                    {...item}
                    name={item.name!}
                    onClick={() => { }}
                />
            ))}
        </div>
    );
}