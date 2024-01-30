sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ch.ethz.apps.sapui5.zhrctpotential4',
            componentId: 'ZHRCT_C_POTENTIAL_CASEList',
            contextPath: '/ZHRCT_C_POTENTIAL_CASE'
        },
        CustomPageDefinitions
    );
});