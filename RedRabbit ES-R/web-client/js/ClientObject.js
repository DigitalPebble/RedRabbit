﻿var client;

function checkConnection() {
    var hosts = eshosts;
    client = new $.es.Client({
        hosts: hosts
    });
    var dfd = $.Deferred()
    client.ping({
        requestTimeout: 30000,
    }, function (error) {
        if (error) {
            dfd.reject(false);
        } else {
            dfd.resolve(true);
            console.log('All is well');
        }
    });
    return dfd.promise();
}

function convertval(score) {
    if (score && score.toLowerCase() === "seeded")
        return 1;
    else if (score && score.toLowerCase() === "score")
        return 0;
    else
        return score;
}