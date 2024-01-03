public class AccountSearchController {
    
    // 従業員数
    public Integer numberOfEmployees {get; set;}

    /**
     * コンストラクタ
     */
    public AccountSearchController() {

    }

    /**
     * 従業員数リセット
     */
    public void reset() {
        this.numberOfEmployees = null;
    }
}