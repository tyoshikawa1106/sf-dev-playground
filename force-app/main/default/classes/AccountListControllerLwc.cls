public with sharing class AccountListControllerLwc {

    /**
     * コンストラクタ
     */
    public AccountListControllerLwc() {

    }

    /**
     * 取引先情報取得
     */
    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccounts(Integer numberOfEmployees) {
        return [
            SELECT
                 Id
                ,Name
            FROM
                Account
            WHERE
                NumberOfEmployees >= :numberOfEmployees
        ];
    }

    /**
     * 取引先情報取得
     */
    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByEmployeeNumber(Integer numberOfEmployees) {
        return [
            SELECT
                 Id
                ,Name
            FROM
                Account
            WHERE
                NumberOfEmployees >= :numberOfEmployees
        ];
    }

    /**
     * 取引先情報取得
     */
    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByRevenue(Decimal annualRevenue) {
        return [
            SELECT
                 Id
                ,Name
            FROM
                Account
            WHERE
                AnnualRevenue >= :annualRevenue
        ];
    }
}