sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ch.ethz.apps.sapui5.zhrctpotential4',
            componentId: 'ZHRCT_C_POTENTIAL_CASEObjectPage',
            contextPath: '/ZHRCT_C_POTENTIAL_CASE'
        },
        CustomPageDefinitions
    );
});