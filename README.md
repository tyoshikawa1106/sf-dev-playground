# Salesforce DX Project

SalesforceDXの開発勉強用リポジトリ。

## Table of Contents
- [Requirements](#requirements)
- [Usage](#usage)
- [Link](#link)

## Requirements
- Visual Studio Code 1.81.1 (Universal)
- @salesforce/cli/2.4.10 darwin-arm64 node-v20.5.1
- Homebrew 4.1.5
- git version 2.41.0
- node v20.5.1
- npm 9.8.1

## Usage
### Setup
```
% pwd
/Users/<yourdirectory>/projects/salesforce/workspace
% git clone git@github.com:tyoshikawa1106/sfdc-my-playground.git
% cd cd sfdc-my-playground/
% code .
```

### Version
```
% sf -v
% brew -v
% git -v
% node -v
% npm -v
```

### Salesforce CLI
CLIのアップデート
```
% npm update --global @salesforce/cli
```

CLIのヘルプ
```
% sf help
% sf <command> -h
```

CLIの診断
```
% sf doctor
```

Salesforce組織の認証 (CLIログイン)
```
% sf org login web -a <ALIAS> -b chrome
```

Salesforce組織の認証解除 (CLIログアウト)
```
% sf org logout
or
% sf org logout -o <AILAS>
```

認証組織の一覧表示
```
% sf org list
```

Salesforce組織をブラウザで表示
```
% sf org open -o <ALIAS> -b chrome
```

スクラッチ組織の作成
```
% sf org create scratch -v <DEVHUB ORG AILAS> -f config/project-scratch-def.json -d -y 7 -a <SCRATCH ORG AILAS>
```

スクラッチ組織のシステム管理者ユーザに権限セットを割り当て
```
sf org assign permset -n Trailblazers
```

スクラッチ組織のシステム管理者ユーザのパスワードを生成
```
sf org generate password -l 12 -o <SCRATCH ORG AILAS>
```

スクラッチ組織にテストデータをインポート
```
sf data import tree -p data/accounts-data-plan.json
```

スクラッチ組織の作成再開 (組織シェイプタイムアウトなどのエラー発生時の復旧方法)
```
% sf org resume scratch --job-id <JOB ID>
or
% sf org resume sandbox --use-most-recent
```

### Homebrew
Homebrewの診断
```
% brew doctor
```

Homebrewのヘルプ
```
% brew help
```

インストールツールのアップデート
```
% brew updgrade
```

### npm
npmのアップデート
```
% npm update
```

### Salesforce APIバージョンの設定
sfdx-project.jsonファイルのsourceApiVersionで設定。

## Link
- [Salesforce開発環境構築 (2023年版)](https://speakerdeck.com/tyoshikawa1106/salesforcekai-fa-huan-jing-gou-zhu-2023nian-ban)
- [Salesforceプロジェクトのバージョン管理](https://speakerdeck.com/tyoshikawa1106/salesforcepuroziekutonobaziyonguan-li)
- [Homebrew](https://brew.sh/index_ja)
- [Visual Studio Code](https://code.visualstudio.com)
- [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)
- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)