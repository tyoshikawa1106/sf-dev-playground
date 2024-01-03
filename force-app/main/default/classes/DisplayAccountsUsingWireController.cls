public with sharing class DisplayAccountsUsingWireController {

    /**
     * コンストラクタ
     */
    public DisplayAccountsUsingWireController() {

    }

    /**
     * 取引先情報取得
     */
    @AuraEnabled(cacheable=true)
    public static List<Account> displayAccounts() {
        return [
            SELECT
                 Id
                ,Name
                ,AccountNumber
                ,Industry
                ,Rating
            FROM
                Account
            LIMIT 5
        ];
    }
}