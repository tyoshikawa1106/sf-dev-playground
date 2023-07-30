public with sharing class HelloWorldController {
    
    // キーワード
    public String keyword {get; set;}
    
    /**
     * コンストラクタ
     */
    public HelloWorldController() {
        // キーワード
        this.keyword = 'Hello! Salesforce World!!';
    }
}