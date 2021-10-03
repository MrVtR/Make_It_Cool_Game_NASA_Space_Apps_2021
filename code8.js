gdjs.DECISAO3Code = {};
gdjs.DECISAO3Code.GDNewObjectObjects1= [];
gdjs.DECISAO3Code.GDNewObjectObjects2= [];
gdjs.DECISAO3Code.GDNewObject2Objects1= [];
gdjs.DECISAO3Code.GDNewObject2Objects2= [];
gdjs.DECISAO3Code.GDNewObject3Objects1= [];
gdjs.DECISAO3Code.GDNewObject3Objects2= [];
gdjs.DECISAO3Code.GDNewObject4Objects1= [];
gdjs.DECISAO3Code.GDNewObject4Objects2= [];
gdjs.DECISAO3Code.GDNewObject5Objects1= [];
gdjs.DECISAO3Code.GDNewObject5Objects2= [];
gdjs.DECISAO3Code.GDNewObject6Objects1= [];
gdjs.DECISAO3Code.GDNewObject6Objects2= [];
gdjs.DECISAO3Code.GDNewObject7Objects1= [];
gdjs.DECISAO3Code.GDNewObject7Objects2= [];
gdjs.DECISAO3Code.GDNewObject8Objects1= [];
gdjs.DECISAO3Code.GDNewObject8Objects2= [];
gdjs.DECISAO3Code.GDNewObject9Objects1= [];
gdjs.DECISAO3Code.GDNewObject9Objects2= [];
gdjs.DECISAO3Code.GDNewObject10Objects1= [];
gdjs.DECISAO3Code.GDNewObject10Objects2= [];
gdjs.DECISAO3Code.GDNewObject11Objects1= [];
gdjs.DECISAO3Code.GDNewObject11Objects2= [];
gdjs.DECISAO3Code.GDNewObject12Objects1= [];
gdjs.DECISAO3Code.GDNewObject12Objects2= [];
gdjs.DECISAO3Code.GDNewObject13Objects1= [];
gdjs.DECISAO3Code.GDNewObject13Objects2= [];

gdjs.DECISAO3Code.conditionTrue_0 = {val:false};
gdjs.DECISAO3Code.condition0IsTrue_0 = {val:false};
gdjs.DECISAO3Code.condition1IsTrue_0 = {val:false};
gdjs.DECISAO3Code.condition2IsTrue_0 = {val:false};
gdjs.DECISAO3Code.conditionTrue_1 = {val:false};
gdjs.DECISAO3Code.condition0IsTrue_1 = {val:false};
gdjs.DECISAO3Code.condition1IsTrue_1 = {val:false};
gdjs.DECISAO3Code.condition2IsTrue_1 = {val:false};


gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.DECISAO3Code.GDNewObject5Objects1});gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.DECISAO3Code.GDNewObject5Objects1});gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.DECISAO3Code.GDNewObject7Objects1});gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.DECISAO3Code.GDNewObject7Objects1});gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.DECISAO3Code.GDNewObject5Objects1});gdjs.DECISAO3Code.eventsList0 = function(runtimeScene) {

{


gdjs.DECISAO3Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DECISAO3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CARREGANDO", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(5);
}}

}


};gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.DECISAO3Code.GDNewObject7Objects1});gdjs.DECISAO3Code.eventsList1 = function(runtimeScene) {

{


gdjs.DECISAO3Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DECISAO3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CARREGANDO", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(7);
}}

}


};gdjs.DECISAO3Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.DECISAO3Code.GDNewObject5Objects1);

gdjs.DECISAO3Code.condition0IsTrue_0.val = false;
gdjs.DECISAO3Code.condition1IsTrue_0.val = false;
{
gdjs.DECISAO3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.DECISAO3Code.condition0IsTrue_0.val ) {
{
{gdjs.DECISAO3Code.conditionTrue_1 = gdjs.DECISAO3Code.condition1IsTrue_0;
gdjs.DECISAO3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9865628);
}
}}
if (gdjs.DECISAO3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.DECISAO3Code.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.DECISAO3Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.DECISAO3Code.GDNewObject5Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.DECISAO3Code.GDNewObject5Objects1);

gdjs.DECISAO3Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject5Objects1Objects, runtimeScene, true, true);
}if (gdjs.DECISAO3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.DECISAO3Code.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.DECISAO3Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.DECISAO3Code.GDNewObject5Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.DECISAO3Code.GDNewObject7Objects1);

gdjs.DECISAO3Code.condition0IsTrue_0.val = false;
gdjs.DECISAO3Code.condition1IsTrue_0.val = false;
{
gdjs.DECISAO3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.DECISAO3Code.condition0IsTrue_0.val ) {
{
{gdjs.DECISAO3Code.conditionTrue_1 = gdjs.DECISAO3Code.condition1IsTrue_0;
gdjs.DECISAO3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9867188);
}
}}
if (gdjs.DECISAO3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.DECISAO3Code.GDNewObject7Objects1 */
{for(var i = 0, len = gdjs.DECISAO3Code.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.DECISAO3Code.GDNewObject7Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.DECISAO3Code.GDNewObject7Objects1);

gdjs.DECISAO3Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject7Objects1Objects, runtimeScene, true, true);
}if (gdjs.DECISAO3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.DECISAO3Code.GDNewObject7Objects1 */
{for(var i = 0, len = gdjs.DECISAO3Code.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.DECISAO3Code.GDNewObject7Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.DECISAO3Code.GDNewObject5Objects1);

gdjs.DECISAO3Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if (gdjs.DECISAO3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.DECISAO3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.DECISAO3Code.GDNewObject7Objects1);

gdjs.DECISAO3Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO3Code.mapOfGDgdjs_46DECISAO3Code_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}if (gdjs.DECISAO3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.DECISAO3Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.DECISAO3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DECISAO3Code.GDNewObjectObjects1.length = 0;
gdjs.DECISAO3Code.GDNewObjectObjects2.length = 0;
gdjs.DECISAO3Code.GDNewObject2Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject2Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject3Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject3Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject4Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject4Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject5Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject5Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject6Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject6Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject7Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject7Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject8Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject8Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject9Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject9Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject10Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject10Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject11Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject11Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject12Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject12Objects2.length = 0;
gdjs.DECISAO3Code.GDNewObject13Objects1.length = 0;
gdjs.DECISAO3Code.GDNewObject13Objects2.length = 0;

gdjs.DECISAO3Code.eventsList2(runtimeScene);
return;

}

gdjs['DECISAO3Code'] = gdjs.DECISAO3Code;
