sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZHRCT_C_POTENTIAL_CASEList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZHRCT_C_POTENTIAL_CASEList.onFilterBar().iExecuteSearch();
                
                Then.onTheZHRCT_C_POTENTIAL_CASEList.onTable().iCheckRows();

                When.onTheZHRCT_C_POTENTIAL_CASEList.onTable().iPressRow(0);
                Then.onTheZHRCT_C_POTENTIAL_CASEObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});