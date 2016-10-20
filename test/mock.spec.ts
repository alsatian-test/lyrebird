import Mock from "../src/mock";
import Mockable from "../src/mockable";
import { Expect, Test } from "alsatian";

export default class MockTests {

    @Test()
    public mockIsInstanceOfMockable() {
        Expect(new Mock(Mockable) instanceof Mockable).toBe(true);
    }
}