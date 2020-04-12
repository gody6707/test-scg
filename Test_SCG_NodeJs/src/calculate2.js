const express = require('express');
const router = express.Router();

router.get('/DOSCG_2', (req, res) => {

    var A = 21;
    var B = 0;
    var C = 0;

    var no1 = ( A + B );
    var valueNo1 = 23;

    var no2 = (A + C);
    var valueNo2 = -21;

    var valueB = (valueNo1 - 21 );
    var valueC = ((-21) + (valueNo2))
    // (A)--> 21 + C = -21
    // C = -21 + (-21)

    console.log("B : " + valueB)
    console.log("C : " + valueC)

    res.json({'valueB' : valueB,'valueC' : valueC})

});

module.exports = router;