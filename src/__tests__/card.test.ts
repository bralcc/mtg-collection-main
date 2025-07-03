import Card from '../models/card';

describe('Card Class', () => {
  test('should create a card with all properties', () => {
    const card = new Card(1, "Lightning Bolt", "Revised", "Common", ["Red"], 4);
    
    expect(card.getId()).toBe(1);
    expect(card.getName()).toBe("Lightning Bolt");
    expect(card.getSet()).toBe("Revised");
    expect(card.getRarity()).toBe("Common");
    expect(card.getColors()).toEqual(["Red"]);
    expect(card.getQuantity()).toBe(4);
  });

  test('should handle colorless cards', () => {
    const card = new Card(2, "Sol Ring", "Revised", "Uncommon", [], 2);
    
    expect(card.getColors()).toEqual(["Colorless"]);
  });

  test('should handle multi-color cards', () => {
    const card = new Card(3, "Lightning Helix", "Ravnica", "Uncommon", ["Red", "White"], 3);
    
    expect(card.getColors()).toEqual(["Red", "White"]);
  });

  test('should set quantity', () => {
    const card = new Card(4, "Test Card", "Test Set", "Common", ["Blue"], 1);
    
    card.setQuantity(5);
    expect(card.getQuantity()).toBe(5);
  });
});
