@isTest
private class HelloDevOpsCenterControllerTest {

    private static User testAdminUser = [SELECT Id FROM User WHERE Id =: UserInfo.getUserId() LIMIT 1];

    /**
     * コンストラクタ
     */
    @isTest static void HelloDevOpsCenterControllerTest1() {
        
        System.runAs(testAdminUser) {

            Test.startTest();
            
            HelloDevOpsCenterController cls = new HelloDevOpsCenterController();
            
            Test.stopTest();
            
            System.assertEquals(String.isNotEmpty(cls.keyword), true);
        }
    }
}