//Sample: GrantPlayerCharacter
handlers.grantPlayerCharacter = function (args, context) {

    var request = {
        PlayFabId: currentPlayerId, 
        CharacterName: "EarQueen",
        CharacterType: "Archer"
    };

    var playerStatResult = server.UpdatePlayerStatistics(request);

    return { messageValue: 'Character created!' };
};