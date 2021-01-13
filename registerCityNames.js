"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongol_1 = require("./Mongol");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
[
    'Ulaanbaatar',
    'Erdenet',
    'Darkhan',
    'Choibalsan',
    'Mörön',
    'Nalaikh',
    'Bayankhongor',
    'Ölgii',
    'Khovd',
    'Arvaikheer',
    'Ulaangom',
    'Baganuur',
    'Sainshand',
    'Tsetserleg',
    'Sükhbaatar',
    'Öndörkhaan',
    'Dalanzadgad',
    'Züünkharaa',
    'Uliastai',
    'Altai',
    'Baruun-Urt',
    'Mandalgovi',
    'Zuunmod',
    'Zamyn-Üüd',
    'Bulgan',
    'Kharkhorin',
    'Choir',
    'Bor-Öndör',
    'Sharyngo',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Mongol_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map