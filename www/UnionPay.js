var exec = require('cordova/exec');

//tn 交易流水号
exports.starPay = function(tn, success, error) {
    exec(success, error, "UnionPay", "starPay", [ tn ]);
};

exports.startSEPay = function(tn, seType, success, error) {
    exec(success, error, "UnionPay", "starSEPay", [ tn, seType ]);
};

exports.getSEPayInfo = function(success, error) {
    exec(success, error, "UnionPay", "getSEPayInfo", []);
};