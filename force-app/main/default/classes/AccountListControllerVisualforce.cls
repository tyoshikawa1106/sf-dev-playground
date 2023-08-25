public with sharing class AccountListControllerVisualforce {
    public List<Account> accounts { get; private set; }
    public Integer numberOfEmployees { get; set; }
    public void queryAccounts() {
        // In real world, probably more complex logic here
        this.accounts = [
            SELECT Name
            FROM Account
            WHERE NumberOfEmployees = :numberOfEmployees
        ];
    }
}