@isTest
private class HelloWorldControllerTest {

    private static User testAdminUser = CommonTester.getLoginUser();

    /**
     * コンストラクタ
     */
    @isTest static void HelloWorldControllerTestTest1() {
        
        System.runAs(testAdminUser) {

            Test.startTest();
            
            HelloWorldController cls = new HelloWorldController();
            
            Test.stopTest();
            
            Assert.isTrue(String.isNotEmpty(cls.keyword));
        }
    }
}