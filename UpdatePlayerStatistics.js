//Sample: UpdatePlayerStatistics
handlers.updatePlayerStatistics = function (args, context) {

    try {
        var request = {
            "PlayFabId": currentPlayerId,
            "Statistics": [
            {
                "StatisticName": "Points",
                "Value": 600
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