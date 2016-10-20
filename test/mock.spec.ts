import Mock from "../src/mock";
import Mockable from "../src/mockable";
import { Expect, Test } from "alsatian";

export default class MockTests {

    @Test()
    public mockIsInstanceOfMockable() {
        const mock = Mock(Mockable);
        Expect(mock instanceof Mockable).toBe(true);
    }
}