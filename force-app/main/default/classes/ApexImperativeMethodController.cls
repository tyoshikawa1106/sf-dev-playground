public with sharing class ApexImperativeMethodController {

    /**
     * コンストラクタ
     */
    public ApexImperativeMethodController() {

    }
    
    /**
     * 取引先責任者リスト取得
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