gdjs.CARREGANDOCode = {};
gdjs.CARREGANDOCode.GDNewObjectObjects1= [];
gdjs.CARREGANDOCode.GDNewObjectObjects2= [];
gdjs.CARREGANDOCode.GDNewObjectObjects3= [];
gdjs.CARREGANDOCode.GDNewObject2Objects1= [];
gdjs.CARREGANDOCode.GDNewObject2Objects2= [];
gdjs.CARREGANDOCode.GDNewObject2Objects3= [];
gdjs.CARREGANDOCode.GDNewObject3Objects1= [];
gdjs.CARREGANDOCode.GDNewObject3Objects2= [];
gdjs.CARREGANDOCode.GDNewObject3Objects3= [];

gdjs.CARREGANDOCode.conditionTrue_0 = {val:false};
gdjs.CARREGANDOCode.condition0IsTrue_0 = {val:false};
gdjs.CARREGANDOCode.condition1IsTrue_0 = {val:false};


gdjs.CARREGANDOCode.eventsList0 = function(runtimeScene) {

{


gdjs.CARREGANDOCode.condition0IsTrue_0.val = false;
{
gdjs.CARREGANDOCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > 100;
}if (gdjs.CARREGANDOCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FINALBOM", false);
}}

}


{


gdjs.CARREGANDOCode.condition0IsTrue_0.val = false;
{
gdjs.CARREGANDOCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) <= 100;
}if (gdjs.CARREGANDOCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FINALRUIM", false);
}}

}


};gdjs.CARREGANDOCode.eventsList1 = function(runtimeScene) {

{


gdjs.CARREGANDOCode.condition0IsTrue_0.val = false;
{
gdjs.CARREGANDOCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "CARREGANDO");
}if (gdjs.CARREGANDOCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CARREGANDOCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.CARREGANDOCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.CARREGANDOCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.CARREGANDOCode.GDNewObject3Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}}

}


};

gdjs.CARREGANDOCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CARREGANDOCode.GDNewObjectObjects1.length = 0;
gdjs.CARREGANDOCode.GDNewObjectObjects2.length = 0;
gdjs.CARREGANDOCode.GDNewObjectObjects3.length = 0;
gdjs.CARREGANDOCode.GDNewObject2Objects1.length = 0;
gdjs.CARREGANDOCode.GDNewObject2Objects2.length = 0;
gdjs.CARREGANDOCode.GDNewObject2Objects3.length = 0;
gdjs.CARREGANDOCode.GDNewObject3Objects1.length = 0;
gdjs.CARREGANDOCode.GDNewObject3Objects2.length = 0;
gdjs.CARREGANDOCode.GDNewObject3Objects3.length = 0;

gdjs.CARREGANDOCode.eventsList1(runtimeScene);
return;

}

gdjs['CARREGANDOCode'] = gdjs.CARREGANDOCode;
