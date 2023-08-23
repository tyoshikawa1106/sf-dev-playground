public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        // エラーメッセージプレビュー
        //throw new AuraHandledException('Forced error');
        // 正常処理
        return [
            SELECT Name, AnnualRevenue, Industry
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}