import { buildTodo, updateObject } from './utils';

test('buildTodo should build a valid todo', () => {
    const value = 'Test todo';
    const newTodo = buildTodo(value);
    expect(newTodo).toBeDefined();
    expect(newTodo.id).toBeDefined();
    expect(newTodo.value).toEqual(value);
});

test('updateObject should contain updated properties', () => {
    const originalObjectId = 1;
    const originalObjectValue = 'First value';
    const updateObjectValue = 'Second value';
    const firstObject = { id: originalObjectId, value: originalObjectValue };
    const secondObject = { value: updateObjectValue }
    const updatedObject = updateObject(firstObject, secondObject);
    expect(updatedObject).toBeDefined();
    expect(updatedObject).toHaveProperty('id', originalObjectId);
    expect(updatedObject).toHaveProperty('value', updateObjectValue);
});

