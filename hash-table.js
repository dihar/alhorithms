/**
 * Класс элемента связанного списка
 */
class ElList {
    /**
     * @param {any} value значение элемента
     * @param {ElList} [next] ссылка на следующий элемент
     */
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

/**
 * Класс связанного списка
 */
class List {
    /**
     * @param {ElList} [firstElement] ссылка на первый элемент списка
     * @param {number} [length] длина списка
     */
    constructor(firstElement, length) {
        this.firstElement = firstElement || null;
        this.length = length || (firstElement && 1) || 0;
    }

    /**
     * Добавить элемент в список 
     * @param {any} value значение нового элемента
     * @param {number} position позиция, после которой ставить элемент
     */
    add(value, position = this.length) {
        if (position < 0) {
            position += this.length - 1;
        }

        position = Math.min(this.length, position);
        position = Math.max(position, 0);
        if (!this.length) {
            this.firstElement = new ElList(value);
            this.length = 1;
            return this;
        }

        let pointer = this.firstElement;
        let pointerIndex = 1;
        while (pointer) {
            if (!position) {
                this.firstElement = new ElList(value, this.firstElement);
                this.length++;
                return this;
            }

            if (pointerIndex === position) {
                pointer.next = new ElList(value, pointer.next);
                this.length++;
                return this;
            }

            pointer = pointer.next;
            pointerIndex++;
        }
    }

    /**
     * Добавить элемент в голову списка
     * @param {any} value значение нового элемента
     */
    addHead(value) {
        return this.add(value, 0);
    }

    /**
     * Является ли список пустым 
     * @return {boolean}
     */
    isEmpty() {
        return Boolean(this.firstElement);
    }

    /**
     * Получить хвост списка после первого элемента
     * @return {List}
     */
    getAfterFirst() {
        if (this.length > 1) {
            return new List(this.firstElement.next, this.length - 1);
        }

        return null;
    }

    /**
     * Произвести обход по элементам, для поиска необходимого
     * @param {Function} callback если функция возвращает true, то этот элемент возвращается
     * @return {ElList} элемент связанного списка
     */
    find(callback) {
        let pointer = this.firstElement;

        while (pointer) {
            if (callback(pointer)) {
                return pointer;
            }

            pointer = pointer.next;
        }

        return undefined;
    }

    toString() {
        let string = '';
        let pointer = this.firstElement;

        while (pointer) {
            string += string ? ' => ' : '';
            string += pointer.value;
            if (!pointer.next) {
                break;
            }
            pointer = pointer.next;
        }

        return string;
    }
}

/**
 * Простая хэш функция
 * @param {string} key ключ для преобразования
 * @return {number}
 */
function hashFunction(key = '') {
    const HASH_SIZE = 16;
    let resultCharsCode = Math.pow(10, HASH_SIZE);

    for (charIndex in key) {
        resultCharsCode += key.charCodeAt(charIndex);
        resultCharsCode *= resultCharsCode;
        resultCharsCode = resultCharsCode % Math.pow(10, HASH_SIZE);
    }

    return resultCharsCode;
}

class HashTable {
    constructor() {
        this.exp = 5;
        this.keys = new List;
        this.arr = new Array(Math.pow(2, this.exp));
        this.fillingCount = 0;
    }

    increaseArraySize() {
        this.exp++;
        this.fillingCount = 0;

        const oldArray = this.arr;
        const newArray = new Array(Math.pow(2, this.exp));

        this.arr = newArray;
        this.keys.find(({ value: key }) => {
            const hash = hashFunction(key);
            const index = hash % this.arr.length;
            const list = oldArray[index];

            if (list) {
                const listItem = list.find(pointer => pointer.value[0] === key);

                if (listItem) {
                    const [key, value] = listItem.value;

                    this.set(key, value);
                }
            }
        });
    }

    set(key, value) {
        const hash = hashFunction(key);
        const index = hash % this.arr.length;
        const newElement = [key, value];

        if (!this.arr[index]) {
            this.arr[index] = new List;
            this.fillingCount++;
        }

        const oldValue = this.getItem(key);
        if (oldValue) {
            oldValue.value = newElement;
            return;
        }

        this.arr[index].add(newElement);
        this.keys.add(key);

        if (this.fillingCount / this.arr.length > 0.3) {
            this.increaseArraySize();
        }
    }

    getItem(key) {
        const hash = hashFunction(key);
        const index = hash % this.arr.length;
        const list = this.arr[index];

        if (!list) {
            return undefined;
        }

        return list.find(pointer => pointer.value[0] === key);
    }

    get(key) {
        const item = this.getItem(key);

        return item && item.value[1];
    }

    toString() {
        let string = '{\n';

        this.keys.find(keyPointer => {
            const key = keyPointer.value;
            debugger;
            const value = this.get(key);

            string += `  "${key}": "${value}"`;
            string += keyPointer.next ? ',\n' : '\n';
        });

        return string + '}';
    }
}

module.exports = {
    HashTable,
    List,
    hashFunction
};
