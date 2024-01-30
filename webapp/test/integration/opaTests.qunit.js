sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ch/ethz/apps/sapui5/zhrctpotential4/test/integration/FirstJourney',
		'ch/ethz/apps/sapui5/zhrctpotential4/test/integration/pages/ZHRCT_C_POTENTIAL_CASEList',
		'ch/ethz/apps/sapui5/zhrctpotential4/test/integration/pages/ZHRCT_C_POTENTIAL_CASEObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZHRCT_C_POTENTIAL_CASEList, ZHRCT_C_POTENTIAL_CASEObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ch/ethz/apps/sapui5/zhrctpotential4') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZHRCT_C_POTENTIAL_CASEList: ZHRCT_C_POTENTIAL_CASEList,
					onTheZHRCT_C_POTENTIAL_CASEObjectPage: ZHRCT_C_POTENTIAL_CASEObjectPage
                }
            },
            opaJourney.run
        );
    }
);