import sumTwoNums from "./sumTwoNums";
import {caller} from './caller'


jest.mock('./sumTwoNums', () => jest.fn());

describe("caller", () => {
    test("without mock sumTwoNums", () => {    
        const actlSumTwoNums = jest.requireActual('./sumTwoNums').default;
        sumTwoNums.mockImplementation(actlSumTwoNums);        
        expect(caller(10, 5)).toBe(15)
        expect(caller(10, 20)).toBe(30);
    });

    test("mock sumTwoNums", () => {
        // mock detail function first
        sumTwoNums.mockImplementation((num1, num2) => {
            console.log('mock sumTwoNums, num1, num2:', num1, num2);
            return 100;
        });

        expect(caller(10, 10)).toBe(100);
        expect(caller(10, 20)).toBe(100);
    });
});