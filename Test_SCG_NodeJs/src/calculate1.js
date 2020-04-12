const express = require('express');
const router = express.Router();

router.get('/DOSCG', (req, res) => {

    var _mainNumber = ['X', 'Y', 5, 9, 15, 23, 'Z']
    var diftBetweenPoint2To3 = (_mainNumber[3] - _mainNumber[2]);
    var diftBetweenPoint3To4 = (_mainNumber[4] - _mainNumber[3]);
    var diftBetweenPoint4To5 = (_mainNumber[5] - _mainNumber[4]);

    console.log("dift 1 : " + diftBetweenPoint2To3);
    console.log("dift 2 : " + diftBetweenPoint3To4);
    console.log("dift 3 : " + diftBetweenPoint4To5);

    if ((diftBetweenPoint3To4 - diftBetweenPoint2To3) == (diftBetweenPoint4To5 - diftBetweenPoint3To4)) {

        var mainValue = (diftBetweenPoint3To4 - diftBetweenPoint2To3);

        console.log("Value Dift : " + mainValue);

        var Y = (_mainNumber[2] - mainValue);

        var X = (Y - mainValue);

        var Z = ((diftBetweenPoint4To5 + mainValue) + _mainNumber[5]);

        console.log("Value X : " + X);

        console.log("Value Y : " + Y);

        console.log("Value  Z: " + Z);

        _mainNumber[0] = X;
        _mainNumber[1] = Y
        _mainNumber[6] = Z

    }
    res.json(_mainNumber);

});

module.exports = router;