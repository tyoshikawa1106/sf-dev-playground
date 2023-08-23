public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        //previewExceptionError();
        return [
            SELECT FirstName, LastName, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            ORDER BY FirstName
        ];
    }

    private static void previewExceptionError() {
        throw new AuraHandledException('Forced error');
    }
}