public with sharing class AccountControllerLwc {

    /**
     * コンストラクタ
     */
    public AccountControllerLwc() {

    }

    /**
     * 取引先責任者取得
     */
    @AuraEnabled(cacheable=true)
    public static List<Contact> queryRelatedContacts(Id accountId) {
        return [
            SELECT
                 Id    
                ,Name
                ,Title
                ,Email
                ,Phone
            FROM
                Contact
            WHERE
                AccountId = :accountId
        ];
    }
}