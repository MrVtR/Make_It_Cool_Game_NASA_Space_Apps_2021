gdjs.FINALBOMCode = {};
gdjs.FINALBOMCode.GDNewObjectObjects1= [];
gdjs.FINALBOMCode.GDNewObjectObjects2= [];
gdjs.FINALBOMCode.GDNewObject2Objects1= [];
gdjs.FINALBOMCode.GDNewObject2Objects2= [];
gdjs.FINALBOMCode.GDNewObject3Objects1= [];
gdjs.FINALBOMCode.GDNewObject3Objects2= [];
gdjs.FINALBOMCode.GDNewObject4Objects1= [];
gdjs.FINALBOMCode.GDNewObject4Objects2= [];
gdjs.FINALBOMCode.GDNewObject5Objects1= [];
gdjs.FINALBOMCode.GDNewObject5Objects2= [];
gdjs.FINALBOMCode.GDNewObject6Objects1= [];
gdjs.FINALBOMCode.GDNewObject6Objects2= [];
gdjs.FINALBOMCode.GDNewObject7Objects1= [];
gdjs.FINALBOMCode.GDNewObject7Objects2= [];
gdjs.FINALBOMCode.GDNewObject8Objects1= [];
gdjs.FINALBOMCode.GDNewObject8Objects2= [];

gdjs.FINALBOMCode.conditionTrue_0 = {val:false};
gdjs.FINALBOMCode.condition0IsTrue_0 = {val:false};
gdjs.FINALBOMCode.condition1IsTrue_0 = {val:false};
gdjs.FINALBOMCode.condition2IsTrue_0 = {val:false};
gdjs.FINALBOMCode.conditionTrue_1 = {val:false};
gdjs.FINALBOMCode.condition0IsTrue_1 = {val:false};
gdjs.FINALBOMCode.condition1IsTrue_1 = {val:false};
gdjs.FINALBOMCode.condition2IsTrue_1 = {val:false};


gdjs.FINALBOMCode.mapOfGDgdjs_46FINALBOMCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.FINALBOMCode.GDNewObject6Objects1});gdjs.FINALBOMCode.mapOfGDgdjs_46FINALBOMCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.FINALBOMCode.GDNewObject6Objects1});gdjs.FINALBOMCode.mapOfGDgdjs_46FINALBOMCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.FINALBOMCode.GDNewObject6Objects1});gdjs.FINALBOMCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.FINALBOMCode.GDNewObject6Objects1);

gdjs.FINALBOMCode.condition0IsTrue_0.val = false;
{
gdjs.FINALBOMCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FINALBOMCode.mapOfGDgdjs_46FINALBOMCode_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if (gdjs.FINALBOMCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENUPRINCIPAL", false);
}}

}


};gdjs.FINALBOMCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.FINALBOMCode.GDNewObject6Objects1);

gdjs.FINALBOMCode.condition0IsTrue_0.val = false;
gdjs.FINALBOMCode.condition1IsTrue_0.val = false;
{
gdjs.FINALBOMCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FINALBOMCode.mapOfGDgdjs_46FINALBOMCode_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FINALBOMCode.condition0IsTrue_0.val ) {
{
{gdjs.FINALBOMCode.conditionTrue_1 = gdjs.FINALBOMCode.condition1IsTrue_0;
gdjs.FINALBOMCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9887516);
}
}}
if (gdjs.FINALBOMCode.condition1IsTrue_0.val) {
/* Reuse gdjs.FINALBOMCode.GDNewObject6Objects1 */
{for(var i = 0, len = gdjs.FINALBOMCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.FINALBOMCode.GDNewObject6Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.FINALBOMCode.GDNewObject6Objects1);

gdjs.FINALBOMCode.condition0IsTrue_0.val = false;
{
gdjs.FINALBOMCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FINALBOMCode.mapOfGDgdjs_46FINALBOMCode_46GDNewObject6Objects1Objects, runtimeScene, true, true);
}if (gdjs.FINALBOMCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FINALBOMCode.GDNewObject6Objects1 */
{for(var i = 0, len = gdjs.FINALBOMCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.FINALBOMCode.GDNewObject6Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.FINALBOMCode.condition0IsTrue_0.val = false;
{
gdjs.FINALBOMCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.FINALBOMCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FINALBOMCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.FINALBOMCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FINALBOMCode.GDNewObjectObjects1.length = 0;
gdjs.FINALBOMCode.GDNewObjectObjects2.length = 0;
gdjs.FINALBOMCode.GDNewObject2Objects1.length = 0;
gdjs.FINALBOMCode.GDNewObject2Objects2.length = 0;
gdjs.FINALBOMCode.GDNewObject3Objects1.length = 0;
gdjs.FINALBOMCode.GDNewObject3Objects2.length = 0;
gdjs.FINALBOMCode.GDNewObject4Objects1.length = 0;
gdjs.FINALBOMCode.GDNewObject4Objects2.length = 0;
gdjs.FINALBOMCode.GDNewObject5Objects1.length = 0;
gdjs.FINALBOMCode.GDNewObject5Objects2.length = 0;
gdjs.FINALBOMCode.GDNewObject6Objects1.length = 0;
gdjs.FINALBOMCode.GDNewObject6Objects2.length = 0;
gdjs.FINALBOMCode.GDNewObject7Objects1.length = 0;
gdjs.FINALBOMCode.GDNewObject7Objects2.length = 0;
gdjs.FINALBOMCode.GDNewObject8Objects1.length = 0;
gdjs.FINALBOMCode.GDNewObject8Objects2.length = 0;

gdjs.FINALBOMCode.eventsList1(runtimeScene);
return;

}

gdjs['FINALBOMCode'] = gdjs.FINALBOMCode;
