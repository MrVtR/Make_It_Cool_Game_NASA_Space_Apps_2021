gdjs.MENUSECUNDARIOCode = {};
gdjs.MENUSECUNDARIOCode.GDFUNDOObjects1= [];
gdjs.MENUSECUNDARIOCode.GDFUNDOObjects2= [];
gdjs.MENUSECUNDARIOCode.GDNewObjectObjects1= [];
gdjs.MENUSECUNDARIOCode.GDNewObjectObjects2= [];
gdjs.MENUSECUNDARIOCode.GDCHAOObjects1= [];
gdjs.MENUSECUNDARIOCode.GDCHAOObjects2= [];
gdjs.MENUSECUNDARIOCode.GDNewObject2Objects1= [];
gdjs.MENUSECUNDARIOCode.GDNewObject2Objects2= [];
gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1= [];
gdjs.MENUSECUNDARIOCode.GDBUTOMObjects2= [];
gdjs.MENUSECUNDARIOCode.GDNewObject3Objects1= [];
gdjs.MENUSECUNDARIOCode.GDNewObject3Objects2= [];

gdjs.MENUSECUNDARIOCode.conditionTrue_0 = {val:false};
gdjs.MENUSECUNDARIOCode.condition0IsTrue_0 = {val:false};
gdjs.MENUSECUNDARIOCode.condition1IsTrue_0 = {val:false};
gdjs.MENUSECUNDARIOCode.condition2IsTrue_0 = {val:false};
gdjs.MENUSECUNDARIOCode.conditionTrue_1 = {val:false};
gdjs.MENUSECUNDARIOCode.condition0IsTrue_1 = {val:false};
gdjs.MENUSECUNDARIOCode.condition1IsTrue_1 = {val:false};
gdjs.MENUSECUNDARIOCode.condition2IsTrue_1 = {val:false};


gdjs.MENUSECUNDARIOCode.mapOfGDgdjs_46MENUSECUNDARIOCode_46GDBUTOMObjects1Objects = Hashtable.newFrom({"BUTOM": gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1});gdjs.MENUSECUNDARIOCode.mapOfGDgdjs_46MENUSECUNDARIOCode_46GDBUTOMObjects1Objects = Hashtable.newFrom({"BUTOM": gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1});gdjs.MENUSECUNDARIOCode.mapOfGDgdjs_46MENUSECUNDARIOCode_46GDBUTOMObjects1Objects = Hashtable.newFrom({"BUTOM": gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1});gdjs.MENUSECUNDARIOCode.eventsList0 = function(runtimeScene) {

{


gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val = false;
{
gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE1", false);
}}

}


};gdjs.MENUSECUNDARIOCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BUTOM"), gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1);

gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val = false;
gdjs.MENUSECUNDARIOCode.condition1IsTrue_0.val = false;
{
gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MENUSECUNDARIOCode.mapOfGDgdjs_46MENUSECUNDARIOCode_46GDBUTOMObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val ) {
{
{gdjs.MENUSECUNDARIOCode.conditionTrue_1 = gdjs.MENUSECUNDARIOCode.condition1IsTrue_0;
gdjs.MENUSECUNDARIOCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9732348);
}
}}
if (gdjs.MENUSECUNDARIOCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1 */
{for(var i = 0, len = gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1.length ;i < len;++i) {
    gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BUTOM"), gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1);

gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val = false;
{
gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MENUSECUNDARIOCode.mapOfGDgdjs_46MENUSECUNDARIOCode_46GDBUTOMObjects1Objects, runtimeScene, true, true);
}if (gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1 */
{for(var i = 0, len = gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1.length ;i < len;++i) {
    gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BUTOM"), gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1);

gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val = false;
{
gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MENUSECUNDARIOCode.mapOfGDgdjs_46MENUSECUNDARIOCode_46GDBUTOMObjects1Objects, runtimeScene, true, false);
}if (gdjs.MENUSECUNDARIOCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MENUSECUNDARIOCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MENUSECUNDARIOCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUSECUNDARIOCode.GDFUNDOObjects1.length = 0;
gdjs.MENUSECUNDARIOCode.GDFUNDOObjects2.length = 0;
gdjs.MENUSECUNDARIOCode.GDNewObjectObjects1.length = 0;
gdjs.MENUSECUNDARIOCode.GDNewObjectObjects2.length = 0;
gdjs.MENUSECUNDARIOCode.GDCHAOObjects1.length = 0;
gdjs.MENUSECUNDARIOCode.GDCHAOObjects2.length = 0;
gdjs.MENUSECUNDARIOCode.GDNewObject2Objects1.length = 0;
gdjs.MENUSECUNDARIOCode.GDNewObject2Objects2.length = 0;
gdjs.MENUSECUNDARIOCode.GDBUTOMObjects1.length = 0;
gdjs.MENUSECUNDARIOCode.GDBUTOMObjects2.length = 0;
gdjs.MENUSECUNDARIOCode.GDNewObject3Objects1.length = 0;
gdjs.MENUSECUNDARIOCode.GDNewObject3Objects2.length = 0;

gdjs.MENUSECUNDARIOCode.eventsList1(runtimeScene);
return;

}

gdjs['MENUSECUNDARIOCode'] = gdjs.MENUSECUNDARIOCode;
