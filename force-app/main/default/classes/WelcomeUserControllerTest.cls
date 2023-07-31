@isTest
private class WelcomeUserControllerTest {

    private static User testAdminUser = [SELECT Id FROM User WHERE Id =: UserInfo.getUserId() LIMIT 1];

    /**
     * コンストラクタ
     */
    @isTest static void WelcomeUserControllerTest1() {
        
        System.runAs(testAdminUser) {

            Test.startTest();
            
            WelcomeUserController cls = new WelcomeUserController();
            
            Test.stopTest();
            
            System.assertEquals(String.isNotEmpty(cls.keyword), true);
        }
    }
}