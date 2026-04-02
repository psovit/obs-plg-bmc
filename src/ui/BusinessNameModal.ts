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
        contentEl.createEl("h2", { text: "Create business model canvas" });

        new Setting(contentEl)
            .setName("Business name")
            .setDesc("Enter the name of your business. This will be used in the canvas file name.")
            .addText((text) =>
                text
                    .setPlaceholder("Enter a business name")
                    .onChange((value) => {
                        this.businessName = value;
                    })
            );

        new Setting(contentEl)
            .addButton((btn) =>
                btn
                    .setButtonText("Create canvas")
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
