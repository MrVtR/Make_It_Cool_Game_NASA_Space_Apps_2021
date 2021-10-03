gdjs.DECISAO2Code = {};
gdjs.DECISAO2Code.GDNewObjectObjects1= [];
gdjs.DECISAO2Code.GDNewObjectObjects2= [];
gdjs.DECISAO2Code.GDNewObject2Objects1= [];
gdjs.DECISAO2Code.GDNewObject2Objects2= [];
gdjs.DECISAO2Code.GDNewObject3Objects1= [];
gdjs.DECISAO2Code.GDNewObject3Objects2= [];
gdjs.DECISAO2Code.GDNewObject4Objects1= [];
gdjs.DECISAO2Code.GDNewObject4Objects2= [];
gdjs.DECISAO2Code.GDNewObject5Objects1= [];
gdjs.DECISAO2Code.GDNewObject5Objects2= [];
gdjs.DECISAO2Code.GDNewObject6Objects1= [];
gdjs.DECISAO2Code.GDNewObject6Objects2= [];
gdjs.DECISAO2Code.GDNewObject7Objects1= [];
gdjs.DECISAO2Code.GDNewObject7Objects2= [];
gdjs.DECISAO2Code.GDNewObject8Objects1= [];
gdjs.DECISAO2Code.GDNewObject8Objects2= [];
gdjs.DECISAO2Code.GDNewObject9Objects1= [];
gdjs.DECISAO2Code.GDNewObject9Objects2= [];

gdjs.DECISAO2Code.conditionTrue_0 = {val:false};
gdjs.DECISAO2Code.condition0IsTrue_0 = {val:false};
gdjs.DECISAO2Code.condition1IsTrue_0 = {val:false};
gdjs.DECISAO2Code.condition2IsTrue_0 = {val:false};
gdjs.DECISAO2Code.conditionTrue_1 = {val:false};
gdjs.DECISAO2Code.condition0IsTrue_1 = {val:false};
gdjs.DECISAO2Code.condition1IsTrue_1 = {val:false};
gdjs.DECISAO2Code.condition2IsTrue_1 = {val:false};


gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.DECISAO2Code.GDNewObject5Objects1});gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.DECISAO2Code.GDNewObject5Objects1});gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.DECISAO2Code.GDNewObject7Objects1});gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.DECISAO2Code.GDNewObject7Objects1});gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.DECISAO2Code.GDNewObject5Objects1});gdjs.DECISAO2Code.eventsList0 = function(runtimeScene) {

{


gdjs.DECISAO2Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DECISAO2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE3", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(5);
}}

}


};gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.DECISAO2Code.GDNewObject7Objects1});gdjs.DECISAO2Code.eventsList1 = function(runtimeScene) {

{


gdjs.DECISAO2Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DECISAO2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE3", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(10);
}}

}


};gdjs.DECISAO2Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.DECISAO2Code.GDNewObject5Objects1);

gdjs.DECISAO2Code.condition0IsTrue_0.val = false;
gdjs.DECISAO2Code.condition1IsTrue_0.val = false;
{
gdjs.DECISAO2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.DECISAO2Code.condition0IsTrue_0.val ) {
{
{gdjs.DECISAO2Code.conditionTrue_1 = gdjs.DECISAO2Code.condition1IsTrue_0;
gdjs.DECISAO2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9821028);
}
}}
if (gdjs.DECISAO2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.DECISAO2Code.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.DECISAO2Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.DECISAO2Code.GDNewObject5Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.DECISAO2Code.GDNewObject5Objects1);

gdjs.DECISAO2Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject5Objects1Objects, runtimeScene, true, true);
}if (gdjs.DECISAO2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.DECISAO2Code.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.DECISAO2Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.DECISAO2Code.GDNewObject5Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.DECISAO2Code.GDNewObject7Objects1);

gdjs.DECISAO2Code.condition0IsTrue_0.val = false;
gdjs.DECISAO2Code.condition1IsTrue_0.val = false;
{
gdjs.DECISAO2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.DECISAO2Code.condition0IsTrue_0.val ) {
{
{gdjs.DECISAO2Code.conditionTrue_1 = gdjs.DECISAO2Code.condition1IsTrue_0;
gdjs.DECISAO2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9822588);
}
}}
if (gdjs.DECISAO2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.DECISAO2Code.GDNewObject7Objects1 */
{for(var i = 0, len = gdjs.DECISAO2Code.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.DECISAO2Code.GDNewObject7Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.DECISAO2Code.GDNewObject7Objects1);

gdjs.DECISAO2Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject7Objects1Objects, runtimeScene, true, true);
}if (gdjs.DECISAO2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.DECISAO2Code.GDNewObject7Objects1 */
{for(var i = 0, len = gdjs.DECISAO2Code.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.DECISAO2Code.GDNewObject7Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.DECISAO2Code.GDNewObject5Objects1);

gdjs.DECISAO2Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if (gdjs.DECISAO2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.DECISAO2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.DECISAO2Code.GDNewObject7Objects1);

gdjs.DECISAO2Code.condition0IsTrue_0.val = false;
{
gdjs.DECISAO2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DECISAO2Code.mapOfGDgdjs_46DECISAO2Code_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}if (gdjs.DECISAO2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.DECISAO2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.DECISAO2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DECISAO2Code.GDNewObjectObjects1.length = 0;
gdjs.DECISAO2Code.GDNewObjectObjects2.length = 0;
gdjs.DECISAO2Code.GDNewObject2Objects1.length = 0;
gdjs.DECISAO2Code.GDNewObject2Objects2.length = 0;
gdjs.DECISAO2Code.GDNewObject3Objects1.length = 0;
gdjs.DECISAO2Code.GDNewObject3Objects2.length = 0;
gdjs.DECISAO2Code.GDNewObject4Objects1.length = 0;
gdjs.DECISAO2Code.GDNewObject4Objects2.length = 0;
gdjs.DECISAO2Code.GDNewObject5Objects1.length = 0;
gdjs.DECISAO2Code.GDNewObject5Objects2.length = 0;
gdjs.DECISAO2Code.GDNewObject6Objects1.length = 0;
gdjs.DECISAO2Code.GDNewObject6Objects2.length = 0;
gdjs.DECISAO2Code.GDNewObject7Objects1.length = 0;
gdjs.DECISAO2Code.GDNewObject7Objects2.length = 0;
gdjs.DECISAO2Code.GDNewObject8Objects1.length = 0;
gdjs.DECISAO2Code.GDNewObject8Objects2.length = 0;
gdjs.DECISAO2Code.GDNewObject9Objects1.length = 0;
gdjs.DECISAO2Code.GDNewObject9Objects2.length = 0;

gdjs.DECISAO2Code.eventsList2(runtimeScene);
return;

}

gdjs['DECISAO2Code'] = gdjs.DECISAO2Code;
