export default class Mock {
    public constructor(classToMock: new(...args: Array<any>) => Object) {
        (<any>this).prototype = Object.create(classToMock);
    }
}