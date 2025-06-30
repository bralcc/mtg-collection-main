import Card from "./card";

export default class Collection {
	cards: Map<number, Card>;

	constructor(cards?: Map<number, Card>) {
		this.cards = cards ? new Map(cards) : new Map();
	}

	addCard(card: Card): void {
		this.cards.set(card.getId(), card);
	}

	removeCard(cardId: number): void {
		this.cards.delete(cardId);
	}

	findCardById(cardId: number): Card | undefined {
		return this.cards.get(cardId);
	}

	findCardByName(cardName: string): Card | undefined {
		// iterate over values because collection is a map object, this needs work (toLowercase etc.)
		for (const card of this.cards.values()) {
			if (card.getName() === cardName) {
				return card;
			}
		}
		// return undefined if exit
		return undefined;
	}

	getAllCards(): Map<number, Card> {
		return this.cards;
	}

	getTotalQuantityCards(): number {
		return this.cards.size;
	}

	parseCSVLine(line: string): string[] {
		let fields: string[] = [];
		let currentField: string = "";
		let insideQuotes: boolean = false;

		for (let i = 0; i < line.length; i++) {
			const char: string = line[i];

			if (char == '"') {
				insideQuotes = !insideQuotes; //toggle
			} else if (char === "," && insideQuotes == false) {
				fields.push(currentField);
				currentField = "";
			} else {
				currentField += char;
			}
		}
		fields.push(currentField);
		return fields;
	}

	loadFromCSV(csvContent: string): void {
		const lines = csvContent.split(/\r\n|\r|\n/);

		for (let i = 1; i < lines.length; i++) {
			const line = lines[i].trim();
			if (line) {
				const cardData = this.parseCSVLine(line);
				if (cardData && cardData.length >= 6) {
					const id: number = parseInt(cardData[0]);
					const name: string = cardData[1];
					const set: string = cardData[2];
					const rarity: string = cardData[3];
					const colors: string[] = cardData[4]
						? cardData[4].split(",")
						: [];
					const quantity: number = parseInt(cardData[5]);

					const card = new Card(
						id,
						name,
						set,
						rarity,
						colors,
						quantity
					);
					this.addCard(card);
				}
			}
		}
	}
}
