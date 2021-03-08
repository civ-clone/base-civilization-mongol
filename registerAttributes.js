"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongol_1 = require("./Mongol");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Mongol',
    nation: 'Mongolia',
    colors: ['#DA2032', '#0066B3'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Mongol_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map