const fs = require("fs");
const path = require("path");
const ora = require("ora");
const alert = require("cli-alerts");
const {
    green: g,
    yellow: y,
    dim: d,
    red: r
} = require("chalk");
const {
    google
} = require("googleapis");
const clipboard = require("clipboardy");

const convertBytes = require("./convertBytes");
const questions = require("./questions");

const spinner = ora({
    text: ""
});

module.exports = {
    upload: async (filePath, isShared) => {
        if (filePath !== "") {
            if (!fs.existsSync(filePath)) {
                alert({
                    type: `error`,
                    msg: `Invalid Path or File not found!`
                })
                return
            }
            console.log("Your credentials:");
            console.log();
            const vars = await questions();
            const linuxPath = filePath.replace(/\\/g, "/");
            const filename = path.basename(linuxPath);
            const {
                size
            } = fs.statSync(linuxPath);

            console.log();
            console.log(`${y(`Filename:`)} ${d(filename)}\n`);
            console.log(`${y(`Size:`)} ${d(convertBytes(size))}\n`);

            spinner.start(
                `${y(`🚀 Uploading...`)} \n\n${d(`It may take moment depending on your internet speed...`)}`
            );

            const oauth2Client = new google.auth.OAuth2(
                vars.clientID,
                vars.clientSecret,
                "https://developers.google.com/oauthplayground"
            );

            oauth2Client.setCredentials({
                refresh_token: vars.refreshToken
            });

            const drive = google.drive({
                version: "v3",
                auth: oauth2Client
            });

            try {
                const response = await drive.files.create({
                    requestBody: {
                        name: filename
                    },
                    media: {
                        body: fs.createReadStream(linuxPath)
                    }
                });

                if (isShared) {
                    try {
                        const {
                            id
                        } = response.data;
                        await drive.permissions.create({
                            fileId: id,
                            requestBody: {
                                role: "reader",
                                type: "anyone"
                            }
                        });

                        const {
                            data
                        } = await drive.files.get({
                            fileId: id,
                            fields: "webViewLink , webContentLink"
                        });

                        spinner.succeed(`${g(`File`)} uploaded!`);
                        alert({
                            type: `success`,
                            name: `DONE`,
                            msg: `\n\n${filename} uploaded successfully.`
                        });

                        console.log(`${y(`Shared link:`)} ${g(data.webViewLink)}\n`);
                        clipboard.writeSync(data.webViewLink);
                        console.log(`${d(`Link copied to clipboard.`)}`);
                    } catch (error) {
                        spinner.fail(`${r(`Error`)}`);
                        //console.log(error);
                        alert({
                            type: `error`,
                            msg: `Error uploading file 😢, try again later`
                        });
                    }
                } else {
                    spinner.succeed(`${g(`File`)} uploaded!`);
                    alert({
                        type: `success`,
                        name: `DONE`,
                        msg: `\n\n${filename} uploaded successfully.`
                    });
                }
            } catch (error) {
                //console.log(error);
                spinner.fail(`${r(`Error`)}`);
                error.message.includes("invalid_grant") ? alert({
                        type: `error`,
                        msg: `Refresh Token expired, get a new one from your google cloud console`
                    }) :
                    alert({
                        type: `error`,
                        msg: `Error uploading file 😢, try again later`
                    });
            }
        } else {
            spinner.fail(`${r(`Error`)}`);
            alert({
                type: `error`,
                msg: `Invalid file path use --help for infos`
            });
        }
    }
}