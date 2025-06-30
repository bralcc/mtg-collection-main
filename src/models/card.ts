export default class Card {
    id: number;
	name: string;
	set: string;
	rarity: string;
	colors: string[];
    quantity: number;

	constructor(id: number, name: string, set: string, rarity: string, colors: string[], quantity: number) {
        this.id = id;
		this.name = name;
		this.set = set;
		this.rarity = rarity;
		this.colors = colors;
        this.quantity = quantity;
	}

	getId() : number {
        return this.id;
    }
    
    getName() : string {
        return this.name;
    }

    getSet() : string {
        return this.set;
    }

    getRarity() : string {
        return this.rarity;
    }

    getColors() : string[] {
        return this.colors.length === 0 ? ["Colorless"] : this.colors;
    }

    getQuantity() : number {
        return this.quantity;
    }

    setQuantity(amount: number) : void {
        this.quantity = amount;
    }

    toString():string {
       return JSON.stringify(this);
    }

    toJSON(): object {
        return {
            id : this.id,
            name : this.name,
            set : this.set,
            rarity : this.rarity,
            colors : this.colors,
            quantity : this.quantity
        };
    }
}
