//Sample: UpdatePlayerStatistics
handlers.updatePlayerStatistics = function (args, context) {

    try {
        var request = {
            "PlayFabId": currentPlayerId,
            "Statistics": [
            {
                "StatisticName": "Points",
                "Version": 1,
                "Value": 600
            },
            {
                "StatisticName": "Wins",
                "Version": 2,
                "Value": 16
            },
            {
                "StatisticName": "Stars",
                "Value": 7
            }
          ]
        }

        var playerStatResult = server.UpdatePlayerStatistics(request);

        return { messageValue: 'Statistics updated!' };
    } catch (ex) {
        log.error(ex);
        server.WriteTitleEvent({
            EventName : 'cs_error',
            Body : ex
        });
    }

    
};