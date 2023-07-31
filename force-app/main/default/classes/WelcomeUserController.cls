public with sharing class WelcomeUserController {

    // キーワード
    public String keyword {get; set;}

    /**
     * コンストラクタ
     */
    public WelcomeUserController() {
        // キーワード
        this.keyword = 'Welcome!' + ' ' + UserInfo.getLastName() + ' ' + '!!';
    }
}