gdjs.MENUPRINCIPALCode = {};
gdjs.MENUPRINCIPALCode.GDBOTAOObjects1= [];
gdjs.MENUPRINCIPALCode.GDBOTAOObjects2= [];
gdjs.MENUPRINCIPALCode.GDNewObject2Objects1= [];
gdjs.MENUPRINCIPALCode.GDNewObject2Objects2= [];
gdjs.MENUPRINCIPALCode.GDNewObjectObjects1= [];
gdjs.MENUPRINCIPALCode.GDNewObjectObjects2= [];
gdjs.MENUPRINCIPALCode.GDNewObject3Objects1= [];
gdjs.MENUPRINCIPALCode.GDNewObject3Objects2= [];

gdjs.MENUPRINCIPALCode.conditionTrue_0 = {val:false};
gdjs.MENUPRINCIPALCode.condition0IsTrue_0 = {val:false};
gdjs.MENUPRINCIPALCode.condition1IsTrue_0 = {val:false};
gdjs.MENUPRINCIPALCode.condition2IsTrue_0 = {val:false};
gdjs.MENUPRINCIPALCode.conditionTrue_1 = {val:false};
gdjs.MENUPRINCIPALCode.condition0IsTrue_1 = {val:false};
gdjs.MENUPRINCIPALCode.condition1IsTrue_1 = {val:false};
gdjs.MENUPRINCIPALCode.condition2IsTrue_1 = {val:false};


gdjs.MENUPRINCIPALCode.mapOfGDgdjs_46MENUPRINCIPALCode_46GDBOTAOObjects1Objects = Hashtable.newFrom({"BOTAO": gdjs.MENUPRINCIPALCode.GDBOTAOObjects1});gdjs.MENUPRINCIPALCode.mapOfGDgdjs_46MENUPRINCIPALCode_46GDBOTAOObjects1Objects = Hashtable.newFrom({"BOTAO": gdjs.MENUPRINCIPALCode.GDBOTAOObjects1});gdjs.MENUPRINCIPALCode.mapOfGDgdjs_46MENUPRINCIPALCode_46GDBOTAOObjects1Objects = Hashtable.newFrom({"BOTAO": gdjs.MENUPRINCIPALCode.GDBOTAOObjects1});gdjs.MENUPRINCIPALCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BOTAO"), gdjs.MENUPRINCIPALCode.GDBOTAOObjects1);

gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val = false;
{
gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MENUPRINCIPALCode.mapOfGDgdjs_46MENUPRINCIPALCode_46GDBOTAOObjects1Objects, runtimeScene, true, false);
}if (gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HISTORIA", false);
}}

}


};gdjs.MENUPRINCIPALCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BOTAO"), gdjs.MENUPRINCIPALCode.GDBOTAOObjects1);

gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val = false;
gdjs.MENUPRINCIPALCode.condition1IsTrue_0.val = false;
{
gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MENUPRINCIPALCode.mapOfGDgdjs_46MENUPRINCIPALCode_46GDBOTAOObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val ) {
{
{gdjs.MENUPRINCIPALCode.conditionTrue_1 = gdjs.MENUPRINCIPALCode.condition1IsTrue_0;
gdjs.MENUPRINCIPALCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9706340);
}
}}
if (gdjs.MENUPRINCIPALCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MENUPRINCIPALCode.GDBOTAOObjects1 */
{for(var i = 0, len = gdjs.MENUPRINCIPALCode.GDBOTAOObjects1.length ;i < len;++i) {
    gdjs.MENUPRINCIPALCode.GDBOTAOObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOTAO"), gdjs.MENUPRINCIPALCode.GDBOTAOObjects1);

gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val = false;
{
gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MENUPRINCIPALCode.mapOfGDgdjs_46MENUPRINCIPALCode_46GDBOTAOObjects1Objects, runtimeScene, true, true);
}if (gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MENUPRINCIPALCode.GDBOTAOObjects1 */
{for(var i = 0, len = gdjs.MENUPRINCIPALCode.GDBOTAOObjects1.length ;i < len;++i) {
    gdjs.MENUPRINCIPALCode.GDBOTAOObjects1[i].setAnimation(0);
}
}}

}


{



}


{


gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val = false;
{
gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MENUPRINCIPALCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MENUPRINCIPALCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MENUPRINCIPALCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUPRINCIPALCode.GDBOTAOObjects1.length = 0;
gdjs.MENUPRINCIPALCode.GDBOTAOObjects2.length = 0;
gdjs.MENUPRINCIPALCode.GDNewObject2Objects1.length = 0;
gdjs.MENUPRINCIPALCode.GDNewObject2Objects2.length = 0;
gdjs.MENUPRINCIPALCode.GDNewObjectObjects1.length = 0;
gdjs.MENUPRINCIPALCode.GDNewObjectObjects2.length = 0;
gdjs.MENUPRINCIPALCode.GDNewObject3Objects1.length = 0;
gdjs.MENUPRINCIPALCode.GDNewObject3Objects2.length = 0;

gdjs.MENUPRINCIPALCode.eventsList1(runtimeScene);
return;

}

gdjs['MENUPRINCIPALCode'] = gdjs.MENUPRINCIPALCode;
