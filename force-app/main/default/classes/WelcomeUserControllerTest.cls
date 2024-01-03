@isTest
private class WelcomeUserControllerTest {

    private static User testAdminUser = CommonTester.getLoginUser();

    /**
     * コンストラクタ
     */
    @isTest static void WelcomeUserControllerTest1() {
        
        System.runAs(testAdminUser) {

            Test.startTest();
            
            WelcomeUserController cls = new WelcomeUserController();
            
            Test.stopTest();
            
            System.assert(String.isNotEmpty(cls.keyword));
        }
    }
}