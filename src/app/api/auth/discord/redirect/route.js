import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const clientPromise = MongoClient.connect(process.env.MONGO_URI);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    console.error('Authorization code is missing');
    return NextResponse.json({ error: 'Authorization code is missing' }, { status: 400 });
  }

  try {
    // Exchange the code for an access token
    const tokenResponse = await axios.post(
      'https://discord.com/api/oauth2/token',
      new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.DISCORD_REDIRECT_URI,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token } = tokenResponse.data;
    console.log('Access token:', access_token);

    // Fetch user data from Discord
    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const user = userResponse.data;
    //log user data 
    // console.log('User data:', user);

    // Save user data to userweb collection in MongoDB
    const client = await clientPromise;
    const db = client.db('web');
    await db.collection('userweb').updateOne(
      { discordId: user.id },
      { $set: { ...user, accessToken: access_token } },
      { upsert: true }
    );

    // Create a session
    const sessionId = uuidv4();
    const sessionData = { user, accessToken: access_token };
    
    // Store session in MongoDB (or use another session store)
    await db.collection('sessions').insertOne({
      sessionId,
      sessionData,
      createdAt: new Date(),
    });

    // Set the session ID as a cookie
    const response = NextResponse.redirect('http://localhost:3000/');
    response.cookies.set('sessionId', sessionId, { httpOnly: true, path: '/' });

    return response;
  } catch (error) {
    console.error('OAuth2 Callback Error:', error.response ? error.response.data : error.message);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
