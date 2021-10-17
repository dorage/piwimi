import fs, { write } from 'fs';
import readline from 'readline';
import { google } from 'googleapis';
import { captureExceptionByMode } from './sentry';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    console.log(credentials.installed);
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0],
    );

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err)
                return console.error(
                    'Error while trying to retrieve access token',
                    err,
                );
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

/**
 * 현재 UTC기준 시간을 반환합니다.
 * @param {*} UTC UTC 시간차를 받습니다
 * @returns
 */
const getUTCTime = (UTC) => {
    // 1. 현재 시간(Locale)
    const curr = new Date();

    // 2. UTC 시간 계산
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

    // 3. UTC to KST (UTC + 9시간)
    const KR_TIME_DIFF = UTC * 60 * 60 * 1000;
    const kr_curr = new Date(utc + KR_TIME_DIFF);
    return kr_curr;
};

const writeDataWrapper = (review) => {
    return (auth) => {
        const sheets = google.sheets({ version: 'v4', auth });
        let values = [[getUTCTime(7), getUTCTime(9), review]];
        const resource = { values };
        sheets.spreadsheets.values.append(
            {
                // TODO; 엑셀 파일을 변경할 수 있게 만들어야 할 것 같은데
                spreadsheetId: '1_CL_Uzb1wLEuaMF35lNx_XtciYceie60JIDMbJv3c3s',
                range: 'A1',
                valueInputOption: 'RAW',
                resource,
            },
            (err, result) => {
                if (err) {
                    captureExceptionByMode(err);
                } else {
                    console.log('Done!');
                }
            },
        );
    };
};

export const writeReviewOnGoogleSheet = (review) => {
    // Load client secrets from a local file.
    fs.readFile('credentials.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Google Sheets API.
        authorize(JSON.parse(content), writeDataWrapper(review));
    });
};
