import { App, Plugin } from 'obsidian';
import { createBusinessModelCanvas } from "./commands/create-bmc";

export default class StrategistToolkitPlugin extends Plugin {

	async onload() {
		// Add a ribbon icon to the left sidebar
		this.addRibbonIcon('layout-dashboard', 'Create Business Model Canvas', (evt: MouseEvent) => {
			createBusinessModelCanvas(this.app);
		});

		this.addCommand({
			id: 'create-business-model-canvas',
			name: 'Create Business Model Canvas',
			callback: () => createBusinessModelCanvas(this.app)
		});
	}

	onunload() {
	}
}

