const ask = require('./ask');

module.exports = async () => {
    const clientSecret = await ask({
        name: `clientSecret`,
        message: `Client Secret`,
        hint: `Google Cloud Client Secret`
    });
    const clientID = await ask({
        name: `clientId`,
        message: `Client ID`,
        hint: `Google Cloud Client ID`
    });
    const refreshToken = await ask({
        name: `refreshToken`,
        message: `Refresh Token`,
        hint: `Google Cloud Redirect URI`
    });

    const vars = {
        clientSecret,
        clientID,
        refreshToken
    };

    return vars;
};