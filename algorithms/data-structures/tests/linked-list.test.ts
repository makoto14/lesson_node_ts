import { LinkedArrayList } from "../linked-list";

test('basic', () => {
    const hogeStr = new LinkedArrayList<string>();
    hogeStr.add("aaa");
    hogeStr.add("bbb");
    hogeStr.add("ccc");
    hogeStr.add("ddd");
    hogeStr.add("eee");
    expect(hogeStr.getLinkedArray[0].current).toBe("aaa");
})
