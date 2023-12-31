@isTest
private class HelloDevOpsCenterControllerTest {

    private static User testAdminUser = CommonTester.getLoginUser();

    /**
     * コンストラクタ
     */
    @isTest static void HelloDevOpsCenterControllerTest1() {
        
        System.runAs(testAdminUser) {

            Test.startTest();
            
            HelloDevOpsCenterController cls = new HelloDevOpsCenterController();
            
            Test.stopTest();
            
            Assert.isTrue(String.isNotEmpty(cls.keyword));
        }
    }
}