const { humanCatDogYears } = require("../src");

describe("humanCatDogyears", () => {
    it ("returns human and cat and dog years equivalant", () => {
        expect(humanCatDogYears(10)).toMatchObject([10,56,68])
        expect(humanCatDogYears(20)).toMatchObject([20, 96, 118])
    })


});
