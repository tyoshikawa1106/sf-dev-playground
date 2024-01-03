public with sharing class AccountControllerVisualforce {
    
    // スタンダードコントローラー
    private ApexPages.StandardController standardController;
    // 取引先責任者リスト
    public List<Contact> contacts {get; private set;}

    /**
     * コンストラクタ
     */
    public AccountControllerVisualforce(ApexPages.StandardController standardController) {
        this.standardController = standardController;
        this.contacts = new List<Contact>();
    }

    /**
     * 取引先責任者取得
     */
    public void queryRelatedContacts() {
        this.contacts = [
            SELECT
                 Id
                ,Name
                ,Title
                ,Email
                ,Phone
            FROM
                Contact
            WHERE
                AccountId = :standardController.getId()
        ];
   }
}