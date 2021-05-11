export function findByID(myArray, id) {
    for (let item of myArray) {
        if (id === item.id) {
            return item;
        }
    }

    return null;
}