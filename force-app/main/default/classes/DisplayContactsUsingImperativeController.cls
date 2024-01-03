public with sharing class DisplayContactsUsingImperativeController {

    /**
     * コンストラクタ
     */
    public DisplayContactsUsingImperativeController() {

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
                ,Phone
                ,Account.Name
            FROM
                Contact
            LIMIT 5
        ];
    }
}