

//discord  auth 
export function getDiscordOAuthUrl() {
    const params = new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        redirect_uri: process.env.DISCORD_REDIRECT_URI,
        response_type: 'code',
        scope: 'identify email',
    });

    return `https://discord.com/oauth2/authorize?${params.toString()}`;
}