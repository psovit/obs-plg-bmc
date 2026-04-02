import { App, Modal, Setting } from "obsidian";

export class BusinessNameModal extends Modal {
    businessName: string;
    onSubmit: (result: string) => void;

    constructor(app: App, onSubmit: (result: string) => void) {
        super(app);
        this.onSubmit = onSubmit;
        this.businessName = "";
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.createEl("h2", { text: "Create Business Model Canvas" });

        new Setting(contentEl)
            .setName("Business/Project Name")
            .setDesc("Enter the name of your business. This will be used in the canvas file name.")
            .addText((text) =>
                text
                    .setPlaceholder("e.g., Acme Corp")
                    .onChange((value) => {
                        this.businessName = value;
                    })
            );

        new Setting(contentEl)
            .addButton((btn) =>
                btn
                    .setButtonText("Create Canvas")
                    .setCta()
                    .onClick(() => {
                        this.close();
                        this.onSubmit(this.businessName);
                    })
            );
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}
