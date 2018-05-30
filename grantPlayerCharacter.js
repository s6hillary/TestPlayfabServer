//Sample: GrantPlayerCharacter
handlers.grantPlayerCharacter = function (args, context) {

    try {
        var request = {
            PlayFabId: currentPlayerId, 
            CharacterName: "EarQueen",
            CharacterType: "Archer"
        };

        var playerStatResult = server.GrantCharacterToUser(request);

        return { messageValue: 'Character created!' };
    } catch (ex) {
        log.error(ex);
        server.WriteTitleEvent({
            EventName : 'cs_error',
            Body : ex
        });
    }

    
};