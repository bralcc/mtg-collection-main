import {Plugin} from 'obsidian'

export default class MTGCollection extends Plugin {
	statusBarTextElement : HTMLSpanElement;

	onload(): Promise<void> | void {
		console.log('Loading plugin.');

		this.statusBarTextElement = this.addStatusBarItem().createEl('span');
		this.statusBarTextElement.textContent = 'Hello';
	}

	onunload(): void {
		console.log('Unloading plugin.');
	}
}