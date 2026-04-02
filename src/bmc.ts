export interface CanvasNodeData {
    id: string;
    type: "text";
    text: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color?: string;
}

export interface CanvasData {
    nodes: CanvasNodeData[];
    edges: any[];
}

export function generateBmcData(): CanvasData {
    const nodes: CanvasNodeData[] = [
        {
            id: generateId(),
            type: "text",
            text: "### 🤝 Key Partners\n\n* Who are our Key Partners?\n* Who are our key suppliers?\n* Which Key Resources are we acquiring from partners?\n* Which Key Activities do partners perform?\n\n[Type here...]",
            x: 0,
            y: 0,
            width: 250,
            height: 600,
            color: "1" // Red
        },
        {
            id: generateId(),
            type: "text",
            text: "### ⚙️ Key Activities\n\n* What Key Activities do our Value Propositions require?\n* Our Distribution Channels?\n* Customer Relationships?\n* Revenue streams?\n\n[Type here...]",
            x: 270,
            y: 0,
            width: 250,
            height: 290,
            color: "2" // Orange
        },
        {
            id: generateId(),
            type: "text",
            text: "### 📦 Key Resources\n\n* What Key Resources do our Value Propositions require?\n* Our Distribution Channels?\n* Customer Relationships?\n* Revenue streams?\n\n[Type here...]",
            x: 270,
            y: 310,
            width: 250,
            height: 290,
            color: "3" // Yellow
        },
        {
            id: generateId(),
            type: "text",
            text: "### 🎁 Value Propositions\n\n* What value do we deliver to the customer?\n* Which one of our customer's problems are we helping to solve?\n* What bundles of products and services are we offering to each Customer Segment?\n* Which customer needs are we satisfying?\n\n[Type here...]",
            x: 540,
            y: 0,
            width: 250,
            height: 600,
            color: "4" // Green
        },
        {
            id: generateId(),
            type: "text",
            text: "### ❤️ Customer Relationships\n\n* What type of relationship does each of our Customer Segments expect us to establish and maintain with them?\n* Which ones have we established?\n* How are they integrated with the rest of our business model?\n* How costly are they?\n\n[Type here...]",
            x: 810,
            y: 0,
            width: 250,
            height: 290,
            color: "5" // Cyan
        },
        {
            id: generateId(),
            type: "text",
            text: "### 🚚 Channels\n\n* Through which Channels do our Customer Segments want to be reached?\n* How are we reaching them now?\n* How are our Channels integrated?\n* Which ones work best?\n* Which ones are most cost-efficient?\n* How are we integrating them with customer routines?\n\n[Type here...]",
            x: 810,
            y: 310,
            width: 250,
            height: 290,
            color: "6" // Purple
        },
        {
            id: generateId(),
            type: "text",
            text: "### 👥 Customer Segments\n\n* For whom are we creating value?\n* Who are our most important customers?\n\n[Type here...]",
            x: 1080,
            y: 0,
            width: 250,
            height: 600,
            color: "5" // Cyan (grouping with relationships)
        },
        {
            id: generateId(),
            type: "text",
            text: "### 📉 Cost Structure\n\n* What are the most important costs inherent in our business model?\n* Which Key Resources are most expensive?\n* Which Key Activities are most expensive?\n\n[Type here...]",
            x: 0,
            y: 620,
            width: 520,
            height: 300,
            color: "1" // Red (costs)
        },
        {
            id: generateId(),
            type: "text",
            text: "### 📈 Revenue Streams\n\n* For what value are our customers really willing to pay?\n* For what do they currently pay?\n* How are they currently paying?\n* How would they prefer to pay?\n* How much does each Revenue Stream contribute to overall revenues?\n\n[Type here...]",
            x: 540,
            y: 620,
            width: 790,
            height: 300,
            color: "4" // Green (revenue)
        }
    ];

    return {
        nodes,
        edges: []
    };
}

function generateId(length: number = 16): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
