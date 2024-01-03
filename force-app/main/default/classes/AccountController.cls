public with sharing class AccountController {

    /**
     * コンストラクタ
     */
    public AccountController() {

    }

    /**
     * 取引先情報取得
     */
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT
                 Id
                ,Name
                ,AnnualRevenue
                ,Industry
            FROM
                Account
            WITH SECURITY_ENFORCED
            ORDER BY Name ASC
        ];
    }
}