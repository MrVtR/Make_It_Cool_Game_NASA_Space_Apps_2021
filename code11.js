gdjs.FINALRUIMCode = {};
gdjs.FINALRUIMCode.GDNewObjectObjects1= [];
gdjs.FINALRUIMCode.GDNewObjectObjects2= [];
gdjs.FINALRUIMCode.GDNewObject2Objects1= [];
gdjs.FINALRUIMCode.GDNewObject2Objects2= [];
gdjs.FINALRUIMCode.GDNewObject3Objects1= [];
gdjs.FINALRUIMCode.GDNewObject3Objects2= [];
gdjs.FINALRUIMCode.GDNewObject4Objects1= [];
gdjs.FINALRUIMCode.GDNewObject4Objects2= [];
gdjs.FINALRUIMCode.GDNewObject5Objects1= [];
gdjs.FINALRUIMCode.GDNewObject5Objects2= [];
gdjs.FINALRUIMCode.GDNewObject6Objects1= [];
gdjs.FINALRUIMCode.GDNewObject6Objects2= [];
gdjs.FINALRUIMCode.GDNewObject7Objects1= [];
gdjs.FINALRUIMCode.GDNewObject7Objects2= [];

gdjs.FINALRUIMCode.conditionTrue_0 = {val:false};
gdjs.FINALRUIMCode.condition0IsTrue_0 = {val:false};
gdjs.FINALRUIMCode.condition1IsTrue_0 = {val:false};
gdjs.FINALRUIMCode.condition2IsTrue_0 = {val:false};
gdjs.FINALRUIMCode.conditionTrue_1 = {val:false};
gdjs.FINALRUIMCode.condition0IsTrue_1 = {val:false};
gdjs.FINALRUIMCode.condition1IsTrue_1 = {val:false};
gdjs.FINALRUIMCode.condition2IsTrue_1 = {val:false};


gdjs.FINALRUIMCode.mapOfGDgdjs_46FINALRUIMCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.FINALRUIMCode.GDNewObject6Objects1});gdjs.FINALRUIMCode.mapOfGDgdjs_46FINALRUIMCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.FINALRUIMCode.GDNewObject6Objects1});gdjs.FINALRUIMCode.mapOfGDgdjs_46FINALRUIMCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.FINALRUIMCode.GDNewObject6Objects1});gdjs.FINALRUIMCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.FINALRUIMCode.GDNewObject6Objects1);

gdjs.FINALRUIMCode.condition0IsTrue_0.val = false;
{
gdjs.FINALRUIMCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FINALRUIMCode.mapOfGDgdjs_46FINALRUIMCode_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if (gdjs.FINALRUIMCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENUPRINCIPAL", false);
}}

}


};gdjs.FINALRUIMCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.FINALRUIMCode.GDNewObject6Objects1);

gdjs.FINALRUIMCode.condition0IsTrue_0.val = false;
gdjs.FINALRUIMCode.condition1IsTrue_0.val = false;
{
gdjs.FINALRUIMCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FINALRUIMCode.mapOfGDgdjs_46FINALRUIMCode_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FINALRUIMCode.condition0IsTrue_0.val ) {
{
{gdjs.FINALRUIMCode.conditionTrue_1 = gdjs.FINALRUIMCode.condition1IsTrue_0;
gdjs.FINALRUIMCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9897692);
}
}}
if (gdjs.FINALRUIMCode.condition1IsTrue_0.val) {
/* Reuse gdjs.FINALRUIMCode.GDNewObject6Objects1 */
{for(var i = 0, len = gdjs.FINALRUIMCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.FINALRUIMCode.GDNewObject6Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.FINALRUIMCode.GDNewObject6Objects1);

gdjs.FINALRUIMCode.condition0IsTrue_0.val = false;
{
gdjs.FINALRUIMCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FINALRUIMCode.mapOfGDgdjs_46FINALRUIMCode_46GDNewObject6Objects1Objects, runtimeScene, true, true);
}if (gdjs.FINALRUIMCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FINALRUIMCode.GDNewObject6Objects1 */
{for(var i = 0, len = gdjs.FINALRUIMCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.FINALRUIMCode.GDNewObject6Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.FINALRUIMCode.condition0IsTrue_0.val = false;
{
gdjs.FINALRUIMCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.FINALRUIMCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FINALRUIMCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.FINALRUIMCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FINALRUIMCode.GDNewObjectObjects1.length = 0;
gdjs.FINALRUIMCode.GDNewObjectObjects2.length = 0;
gdjs.FINALRUIMCode.GDNewObject2Objects1.length = 0;
gdjs.FINALRUIMCode.GDNewObject2Objects2.length = 0;
gdjs.FINALRUIMCode.GDNewObject3Objects1.length = 0;
gdjs.FINALRUIMCode.GDNewObject3Objects2.length = 0;
gdjs.FINALRUIMCode.GDNewObject4Objects1.length = 0;
gdjs.FINALRUIMCode.GDNewObject4Objects2.length = 0;
gdjs.FINALRUIMCode.GDNewObject5Objects1.length = 0;
gdjs.FINALRUIMCode.GDNewObject5Objects2.length = 0;
gdjs.FINALRUIMCode.GDNewObject6Objects1.length = 0;
gdjs.FINALRUIMCode.GDNewObject6Objects2.length = 0;
gdjs.FINALRUIMCode.GDNewObject7Objects1.length = 0;
gdjs.FINALRUIMCode.GDNewObject7Objects2.length = 0;

gdjs.FINALRUIMCode.eventsList1(runtimeScene);
return;

}

gdjs['FINALRUIMCode'] = gdjs.FINALRUIMCode;
