public with sharing class myTreeGridController {

    /**
     * コンストラクタ
     */
    public myTreeGridController() {

    }

    /**
     * ケース情報取得
     */
    @AuraEnabled(cacheable=true)
    public static list<Account> getNewCasesForAccounts(){
        return [
            SELECT
                 Id
                ,Name
                ,(SELECT Id, CaseNumber, Status FROM Cases WHERE toLabel(Status) = 'New')
            FROM
                Account
            WHERE
                Id IN (SELECT AccountId FROM Case)
        ];
    }
}