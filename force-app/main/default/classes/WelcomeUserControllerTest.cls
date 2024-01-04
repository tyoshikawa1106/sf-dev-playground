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
            
            Assert.isTrue(String.isNotEmpty(cls.keyword));
        }
    }
}