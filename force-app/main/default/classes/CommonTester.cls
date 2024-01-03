public with sharing class CommonTester {

    /**
     * コンストラクタ
     */
    public CommonTester() {

    }

    /**
     * テスト実行ユーザ取得
     */
    public static User getLoginUser() {
        return [SELECT Id FROM User WHERE Id =: UserInfo.getUserId() LIMIT 1];
    }
}