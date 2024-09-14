"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var closest_1 = require("./closest");
describe('closest', function () {
    it('should return 2 for input [-1, 2, 1, -4] with target 1', function () {
        expect((0, closest_1.closest)([-1, 2, 1, -4], 1)).toBe(2);
    });
    it('should return 0 for input [0, 0, 0] with target 1', function () {
        expect((0, closest_1.closest)([0, 0, 0], 1)).toBe(0);
    });
    it('should return 6 for input [1, 2, 3, 4] with target 6', function () {
        expect((0, closest_1.closest)([1, 2, 3, 4], 6)).toBe(6);
    });
    it('should return 8 for input [-1, 2, 1, -4, 5] with target 10', function () {
        expect((0, closest_1.closest)([-1, 2, 1, -4, 5], 10)).toBe(8);
    });
    it('should return 15 for input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] with target 15', function () {
        expect((0, closest_1.closest)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)).toBe(15);
    });
    it('should return -6 for input [-5, -3, -2, -1] with target -6', function () {
        expect((0, closest_1.closest)([-5, -3, -2, -1], -6)).toBe(-6);
    });
    it('should return 2 for input [1, 1, 1, 0] with target 100', function () {
        expect((0, closest_1.closest)([1, 1, 1, 0], 100)).toBe(3);
    });
    it('should return 0 for input [-1, 2, -3, 4] with target 0', function () {
        expect((0, closest_1.closest)([-1, 2, -3, 4], 0)).toBe(0);
    });
    it('should return the sum of all elements for input [1, 2, 3] with target 3', function () {
        expect((0, closest_1.closest)([1, 2, 3], 3)).toBe(6);
    });
});
