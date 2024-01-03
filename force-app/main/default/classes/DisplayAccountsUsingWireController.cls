public with sharing class DisplayAccountsUsingWireController {

    /**
     * コンストラクタ
     */
    public DisplayAccountsUsingWireController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> displayAccounts() {
        return [SELECT Id, Name, AccountNumber, Industry, Rating FROM Account LIMIT 5];
    }
}