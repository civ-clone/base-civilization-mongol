"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenghisKhan = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Mongol_1 = require("../Mongol");
class GenghisKhan extends Leader_1.default {
    static civilization() {
        return Mongol_1.default;
    }
    name() {
        return 'Genghis Khan';
    }
}
exports.GenghisKhan = GenghisKhan;
exports.default = GenghisKhan;
//# sourceMappingURL=GenghisKhan.js.map