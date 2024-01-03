public with sharing class ContactController {

    /**
     * コンストラクタ
     */
    public ContactController() {

    }

    /**
     * 取引先責任者情報取得
     */
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [
            SELECT
                 Id
                ,FirstName
                ,LastName
                ,Email
            FROM
                Contact
            WITH SECURITY_ENFORCED
            ORDER BY FirstName ASC
        ];
    }

    /**
     * AuraHandledException
     */
    private static void previewExceptionError() {
        throw new AuraHandledException('Forced error');
    }
}