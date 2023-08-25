public with sharing class AccountControllerVisualforce {
    public List<Contact> contacts { get; private set; }
    private ApexPages.StandardController standardController;
    public AccountControllerVisualforce(ApexPages.StandardController standardController) {
        this.standardController = standardController;
        this.contacts = new List<Contact>();
    }
    public void queryRelatedContacts() {
        this.contacts = [
            SELECT Name, Title, Email, Phone
            FROM Contact
            WHERE AccountId = :standardController.getId() // (2)
        ];
   }
}