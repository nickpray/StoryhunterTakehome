class DoubleLinkedNode {
    value: number;
    next: DoubleLinkedNode;
    prev: DoubleLinkedNode;

    public constructor(value: number = 0,
                next: DoubleLinkedNode = null,
                prev: DoubleLinkedNode = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

    public getValue(): number {
        return this.value
    }
    public getNext(): DoubleLinkedNode {
        return this.next
    }
    public getPrev(): DoubleLinkedNode {
        return this.prev
    }
    public setValue(value: number): void {
        this.value = value;
    }
    public setNext(node: DoubleLinkedNode): void {
        this.next = node;
    }
    public setPrev(node: DoubleLinkedNode): void {
        this.prev = node;
    }
}

class MyDataStore {
    private head: DoubleLinkedNode;
    private tail: DoubleLinkedNode;
    private dataMap: object = {};

    constructor() {
    }

    /** Returns the first item pushed */
    public firstItem(): object {
        return this.head
    }

    /** Returns the last item pushed */
    public lastItem(): object {
        return this.tail
    }

    /** Returns the item corresponding to the given key */
    public itemForKey(key: string): object {
        return this.dataMap[key]
    }

    /** Returns the item pushed immediately after the item corresponding to the given key */
    public itemAfterKey(key: string): object {
        return this.dataMap[key].getNext()
    }

    /** Pushes an item and associates it with the given key */
    public pushItem(key: string, item: DoubleLinkedNode): void {
        this.dataMap[key] = item;
        if (this.head === null) {
            this.head = item;
            this.tail = item;
            return
        }
        this.tail.setNext(item);
        item.setPrev(this.tail)
        this.tail = item
    }

    /** Remove the item associated with a given key */
    public removeItem(key: string): void {
        let delItem: DoubleLinkedNode = <DoubleLinkedNode>this.itemForKey(key)

        delItem.getPrev().setNext(delItem.getNext())
        delItem.getNext().setNext(delItem.getPrev())
        delItem.setPrev(null)
        delItem.setNext(null)
    }
}
