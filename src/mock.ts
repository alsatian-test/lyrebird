export default function Mock<T> (classToMock: new(...args: Array<any>) => T): T {

    // create instance of the class
    const mock = Object.create(classToMock.prototype);

    // ensure properties are clearly defined on the mock
    extractProperties(mock, classToMock.prototype);

    return mock;
}

function extractProperties(mock: any, prototype: any) {
    const keys = Object.keys(prototype).filter(key => key !== "constructor");

    keys.forEach(x => {
        mock[x] = prototype[x];
    });
    
    const nextPrototype = Object.getPrototypeOf(prototype);

    if (nextPrototype !== Object.prototype) {
        extractProperties(mock, nextPrototype);
    }
}