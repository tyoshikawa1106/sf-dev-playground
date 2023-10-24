# Salesforce DX Project
Salesforce DX プロジェクトの学習用リポジトリ

## Table of Contents
- [Requirements](#requirements)
- [Usage](#usage)
- [Link](#link)

## Requirements
- Visual Studio Code 1.82.2 (Universal)
- @salesforce/cli/2.12.9 darwin-arm64 node-v20.8.0
- Homebrew 4.1.15
- git version 2.42.0
- node v20.8.0
- npm 10.2.0
- openjdk 17.0.9 2023-10-17 LTS

## Usage
### Setup
プロジェクトディレクトリ
```
/Users/<your directory>/projects/salesforce/workspace/
```

GitHubからプロジェクトをダウンロードしてVSCodeで開く。
```
git clone git@github.com:tyoshikawa1106/sf-dev-playground.git
cd sf-dev-playground
code .
```

DevHub組織の認証 (CLIログイン)
```
sf org login web -a DevHub -b chrome
```

認証組織の一覧表示
```
sf org list
```

DevHub組織をChromeブラウザで開く
```
sf org open -o DevHub -b chrome
```

認証組織の設定状況表示
```
sf config list
```

認証組織のtarget設定
```
sf config set target-dev-hub=<Alias>
sf config set target-org=<Alias>
```

スクラッチ組織の作成
```
sf org create scratch -v DevHub -f config/project-scratch-def.json -d -y 7 -a ScratchOrg
```

スクラッチ組織にソースをデプロイ
```
sf project deploy start -o ScratchOrg
```

スクラッチ組織のシステム管理者ユーザに権限セットを割り当て
```
sf org assign permset -n Trailblazers
```

スクラッチ組織にテストデータをインポート
```
sf data import tree -p data/accounts-data-plan.json
```

スクラッチ組織のシステム管理者ユーザのパスワードを生成
```
sf org generate password -l 12 -o ScratchOrg
```

スクラッチ組織をChromeブラウザで開く
```
sf org open -o ScratchOrg -b chrome
```

アプリケーションランチャーから「Trailblazers」アプリケーションを選択。
(Application Launcher → Trailblazers)

### Tool version Commonds Memo
```
sf -v
brew -v
git -v
node -v
npm -v
java --version
```

### Salesforce CLI Commands Memo
CLIのインストール
```
npm install -g @salesforce/cli
```

CLIのアップデート
```
npm update -g @salesforce/cli
```

CLIのヘルプ
```
sf help
sf <command> -h
```

CLIの診断
```
sf doctor
```

Salesforce組織の認証解除 (CLIログアウト)
```
sf org logout
```

スクラッチ組織の作成処理を再開 (組織シェイプタイムアウトなどのエラー発生時の復旧方法)
```
sf org resume scratch --job-id <JOB ID>
```

スクラッチ組織の削除
```
sf org delete scratch -o <Scratch Org Alias>
```

### Homebrew Commands Memo
Homebrewの診断
```
brew doctor
```

Homebrewのヘルプ
```
brew help
```

インストールコマンド
```
brew install git
brew install node
```

アップデートコマンド
```
brew upgrade
```

### npm Commands Memo
npmのインストール
```
npm install -g npm
```

npmのアップデート
```
npm update -g npm
```

### Setting Salesforce API Version
sfdx-project.jsonファイルの「sourceApiVersion」で設定する。

### Salesforce Lightning Component Org Library
```
https://<your domain>.lightning.force.com/docs/component-library
```

## Link
- [Salesforce開発環境構築 (2023年版)](https://speakerdeck.com/tyoshikawa1106/salesforcekai-fa-huan-jing-gou-zhu-2023nian-ban)
- [Salesforceプロジェクトのバージョン管理](https://speakerdeck.com/tyoshikawa1106/salesforcepuroziekutonobaziyonguan-li)
- [Salesforce Lightning Component Library](https://developer.salesforce.com/docs/component-library/overview/components)
- [Homebrew](https://brew.sh/index_ja)
- [Visual Studio Code](https://code.visualstudio.com)
- [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)
- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
- [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.244.0.api_meta.meta/api_meta/meta_types_list.htm)