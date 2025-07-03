import Collection from '../models/collection'

describe ('Collection Class', () => {
    test('should create a collection with no cards', () => {
        const collection = new Collection();

        // Option 1: Check if it's a Map instance
        expect(collection.getAllCards()).toBeInstanceOf(Map);
        
        // Option 2: Check if the Map is empty
        expect(collection.getAllCards().size).toBe(0);
        
        // Option 3: Check total count
        expect(collection.getTotalQuantityCards()).toBe(0);
    });
})