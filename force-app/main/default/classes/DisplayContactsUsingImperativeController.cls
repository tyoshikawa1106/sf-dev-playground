public with sharing class DisplayContactsUsingImperativeController {

    /**
     * コンストラクタ
     */
    public DisplayContactsUsingImperativeController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [ SELECT Id, Name, Phone, Account.Name FROM Contact LIMIT 5 ];
    }
}