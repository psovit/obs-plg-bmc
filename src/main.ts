import { Plugin } from 'obsidian';
import { createBusinessModelCanvas } from "./commands/create-bmc";

export default class StrategistToolkitPlugin extends Plugin {

	async onload() {
		// Add a ribbon icon to the left sidebar
		this.addRibbonIcon('layout-dashboard', 'Create business model canvas', (evt: MouseEvent) => {
			void createBusinessModelCanvas(this.app);
		});

		this.addCommand({
			id: 'create-business-model-canvas',
			name: 'Create business model canvas',
			callback: () => { void createBusinessModelCanvas(this.app); }
		});
	}

	onunload() {
	}
}
