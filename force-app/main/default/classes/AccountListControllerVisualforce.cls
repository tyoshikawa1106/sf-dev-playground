public with sharing class AccountListControllerVisualforce {
    
    // 取引先リスト
    public List<Account> accounts {get; private set;}
    // 従業員数
    public Integer numberOfEmployees {get; set;}

    /**
     * コンストラクタ
     */
    public AccountListControllerVisualforce() {

    }

    /**
     * 取引先情報取得
     */
    public void queryAccounts() {
        this.accounts = [
            SELECT
                 Id
                ,Name
            FROM
                Account
            WHERE
                NumberOfEmployees = :numberOfEmployees
        ];
    }
}