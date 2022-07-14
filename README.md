<p align="center">
 <img width="200px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1656878450/ztsl0synryyzwxg2lqvd.svg" align="center" alt="gdrive" />
</p>

<p align="center">
  <a href="https://npmjs.org/package/@ysn4irix/gdrive">
    <img src="https://img.shields.io/npm/v/@ysn4irix/gdrive.svg" alt="version">
  </a>
</p>
<br> <br>

<p align="center">
  <b>📟 CLI for uploading files directly to your Google Drive.</b><br>
</p>

<br>

<p align="center">
<sub align="center">(Example shows gdrive's <a href="#">Uploading file</a>)</sub>
</p>

<p align="center">
  <img src="https://res.cloudinary.com/ydevcloud/image/upload/v1656880231/ezgif.com-gif-maker_tlwqqg.gif" alt="gdrive-cli" width="450" style="border-radius: 5px;"><br>
</p>

<br>

![📟](https://res.cloudinary.com/ydevcloud/image/upload/v1656874185/asm9cp84cbuuqmarw9wq.png)

## ❯ Install

Requires Node.js 14.0 or higher download & install for [Windows](https://nodejs.org/en/download/) or [Linux](https://nodejs.org/en/download/)

```sh
# Recommended.
npx @ysn4irix/gdrive

# OR an alternative global install.
npm install -g @ysn4irix/gdrive
```

<br>

![⚙️](https://res.cloudinary.com/ydevcloud/image/upload/v1656874522/fmfktytvymbnnc0fg4zz.png)

## ❯ Usage

1.  Get your credentials from [Google Cloud
    Console](https://console.cloud.google.com/)

<a href="https://youtu.be/GYbtHiABRCU">
<img src="https://img.shields.io/badge/-watch%20video-critical?style=for-the-badge&logo=youtube&logoColor=white">
</a>

2.  Create your Google Drive credentials config file

```sh
npx gdrive --config

# OR for global install
gdrive --config
```

_Then answer the following questions buy copy paste your credentials to
create your config file._

```sh
Client Secret?
CLI Client ID?
CLI Refresh Token?
```

3.  Run the CLI using

```sh
npx gdrive

# OR for global install
gdrive
```

#### BASIC USAGE

```sh
gdrive <command> [option]
```

#### COMMANDS

```sh
upload  Upload file to Google Drive
```

#### OPTIONS

```sh
--path         Path of your file to be uploaded
--share        Get the uploaded file link
--config       Edit credentials config file
--help         Print help info
-v, --version  Print CLI version
```

<br>

![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)

## ❯ About

<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

#### Author

**Ysn4Irix**

-   [GitHub Profile](https://github.com/Ysn4irix)
-   [Instagram Profile](https://instagram.com/ysn.irix)

<br>

![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)

## ❯ License

Copyright © 2022-present, [Ysn4Irix](https://github.com/Ysn4Irix).
Released under the [MIT License](LICENSE).
