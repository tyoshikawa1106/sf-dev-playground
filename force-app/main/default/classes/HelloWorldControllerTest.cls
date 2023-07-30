@isTest
private class HelloWorldControllerTest {

    private static User testAdminUser = [SELECT Id FROM User WHERE Id =: UserInfo.getUserId() LIMIT 1];

    /**
     * コンストラクタ
     */
    @isTest static void HelloWorldControllerTestTest1() {
        
        System.runAs(testAdminUser) {

            Test.startTest();
            
            HelloWorldController cls = new HelloWorldController();
            
            Test.stopTest();
            
            System.assertEquals(String.isNotEmpty(cls.keyword), true);
        }
    }
}