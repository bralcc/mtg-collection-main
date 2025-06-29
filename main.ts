import {Plugin} from 'obsidian'

export default class MTGCollection extends Plugin {
	statusBarTextElement : HTMLSpanElement;

	onload() {
		console.log('Loading plugin.');

		this.statusBarTextElement = this.addStatusBarItem().createEl('span');
		this.statusBarTextElement.textContent = 'Hello';

		this.app.workspace.on('active-leaf-change', async () => {
			const file = this.app.workspace.getActiveFile()
		if (file) {
			const content = await this.app.vault.read(file);
			this.updateLineCount(content);
		}
		})
	}

	onunload(): void {
		console.log('Unloading plugin.');
	}

	private updateLineCount(fileContent?: string) {
		const count = fileContent ? fileContent.split(/\r\n\|\r|\n/).length : 0;
		const linesWord = count === 1 ? "line" : "lines";
		this.statusBarTextElement.textContent = `${count} ${linesWord}`;
	}
}