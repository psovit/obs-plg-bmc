import { App, Notice, TFolder, TFile, moment } from "obsidian";
import { generateBmcData } from "../bmc";
import { BusinessNameModal } from "../ui/BusinessNameModal";

export async function createBusinessModelCanvas(app: App) {
    new BusinessNameModal(app, async (businessName) => {
        const activeFile = app.workspace.getActiveFile();
        let folderPath = "";

        if (activeFile) {
            folderPath = activeFile.parent?.path || "";
        }

        if (folderPath === "/") {
            folderPath = "";
        }

        const dateStr = moment().format("YYYY-MM-DD");
        const namePrefix = businessName.trim() ? `${businessName.trim()} - ` : "";
        let baseFileName = `${namePrefix}Business Model Canvas - ${dateStr}`;
        let fileName = `${baseFileName}.canvas`;
        let filePath = folderPath ? `${folderPath}/${fileName}` : fileName;

        // Handle file name conflicts
        let counter = 1;
        while (app.vault.getAbstractFileByPath(filePath)) {
            fileName = `${baseFileName} (${counter}).canvas`;
            filePath = folderPath ? `${folderPath}/${fileName}` : fileName;
            counter++;
        }

        try {
            const bmcData = generateBmcData();
            const fileContent = JSON.stringify(bmcData, null, 2);

            const newFile = await app.vault.create(filePath, fileContent);
            
            // Open the newly created canvas file
            const leaf = app.workspace.getLeaf(false);
            await leaf.openFile(newFile);
            
            new Notice("Business Model Canvas created successfully!");
        } catch (error) {
            console.error("Error creating Business Model Canvas:", error);
            new Notice("Failed to create Business Model Canvas. Check if the folder is read-only.");
        }
    }).open();
}
