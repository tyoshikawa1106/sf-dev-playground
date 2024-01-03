public with sharing class ApexWireMethodToPropertyController {

    /**
     * コンストラクタ
     */
    public ApexWireMethodToPropertyController() {

    }

    /**
     * 取引先責任者情報取得
     */
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [
            SELECT
                 Id
                ,Name
                ,Title
                ,Phone
                ,Email
            FROM
                Contact
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
}