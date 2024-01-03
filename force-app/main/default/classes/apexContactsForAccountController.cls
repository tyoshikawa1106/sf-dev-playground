public with sharing class apexContactsForAccountController {

    /**
     * コンストラクタ
     */
    public apexContactsForAccountController() {

    }

    /**
     * 取引先責任者リスト
     */
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accId) {
        return [
            SELECT
                 Id
                ,AccountId
                ,FirstName
                ,LastName
                ,Title
                ,Phone
                ,Email
            FROM
                Contact
            WHERE
                AccountId = :accId
            WITH SECURITY_ENFORCED
        ];
    }
}