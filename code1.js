gdjs.HISTORIACode = {};
gdjs.HISTORIACode.GDNewObjectObjects1= [];
gdjs.HISTORIACode.GDNewObjectObjects2= [];
gdjs.HISTORIACode.GDBOTAOObjects1= [];
gdjs.HISTORIACode.GDBOTAOObjects2= [];
gdjs.HISTORIACode.GDNewObject2Objects1= [];
gdjs.HISTORIACode.GDNewObject2Objects2= [];
gdjs.HISTORIACode.GDNewObject4Objects1= [];
gdjs.HISTORIACode.GDNewObject4Objects2= [];
gdjs.HISTORIACode.GDNewObject5Objects1= [];
gdjs.HISTORIACode.GDNewObject5Objects2= [];
gdjs.HISTORIACode.GDNewObject3Objects1= [];
gdjs.HISTORIACode.GDNewObject3Objects2= [];
gdjs.HISTORIACode.GDNewObject6Objects1= [];
gdjs.HISTORIACode.GDNewObject6Objects2= [];

gdjs.HISTORIACode.conditionTrue_0 = {val:false};
gdjs.HISTORIACode.condition0IsTrue_0 = {val:false};
gdjs.HISTORIACode.condition1IsTrue_0 = {val:false};
gdjs.HISTORIACode.condition2IsTrue_0 = {val:false};
gdjs.HISTORIACode.conditionTrue_1 = {val:false};
gdjs.HISTORIACode.condition0IsTrue_1 = {val:false};
gdjs.HISTORIACode.condition1IsTrue_1 = {val:false};
gdjs.HISTORIACode.condition2IsTrue_1 = {val:false};


gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDBOTAOObjects1Objects = Hashtable.newFrom({"BOTAO": gdjs.HISTORIACode.GDBOTAOObjects1});gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDBOTAOObjects1Objects = Hashtable.newFrom({"BOTAO": gdjs.HISTORIACode.GDBOTAOObjects1});gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDBOTAOObjects1Objects = Hashtable.newFrom({"BOTAO": gdjs.HISTORIACode.GDBOTAOObjects1});gdjs.HISTORIACode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BOTAO"), gdjs.HISTORIACode.GDBOTAOObjects1);

gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDBOTAOObjects1Objects, runtimeScene, true, false);
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENUSECUNDARIO", false);
}}

}


};gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.HISTORIACode.GDNewObject4Objects1});gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.HISTORIACode.GDNewObject4Objects1});gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.HISTORIACode.GDNewObject5Objects1});gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.HISTORIACode.GDNewObject5Objects1});gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.HISTORIACode.GDNewObject4Objects1});gdjs.HISTORIACode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.HISTORIACode.GDNewObject4Objects1);

gdjs.HISTORIACode.condition0IsTrue_0.val = false;
gdjs.HISTORIACode.condition1IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.HISTORIACode.condition0IsTrue_0.val ) {
{
{gdjs.HISTORIACode.conditionTrue_1 = gdjs.HISTORIACode.condition1IsTrue_0;
gdjs.HISTORIACode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9720708);
}
}}
if (gdjs.HISTORIACode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.HISTORIACode.GDNewObject3Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.HISTORIACode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.HISTORIACode.GDNewObject3Objects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.HISTORIACode.GDNewObject5Objects1});gdjs.HISTORIACode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.HISTORIACode.GDNewObject5Objects1);

gdjs.HISTORIACode.condition0IsTrue_0.val = false;
gdjs.HISTORIACode.condition1IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.HISTORIACode.condition0IsTrue_0.val ) {
{
{gdjs.HISTORIACode.conditionTrue_1 = gdjs.HISTORIACode.condition1IsTrue_0;
gdjs.HISTORIACode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9722892);
}
}}
if (gdjs.HISTORIACode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.HISTORIACode.GDNewObject3Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.HISTORIACode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.HISTORIACode.GDNewObject3Objects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.HISTORIACode.eventsList3 = function(runtimeScene) {

{


gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HISTORIACode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.HISTORIACode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BOTAO"), gdjs.HISTORIACode.GDBOTAOObjects1);

gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDBOTAOObjects1Objects, runtimeScene, true, false);
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {
/* Reuse gdjs.HISTORIACode.GDBOTAOObjects1 */
{for(var i = 0, len = gdjs.HISTORIACode.GDBOTAOObjects1.length ;i < len;++i) {
    gdjs.HISTORIACode.GDBOTAOObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOTAO"), gdjs.HISTORIACode.GDBOTAOObjects1);

gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDBOTAOObjects1Objects, runtimeScene, true, true);
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {
/* Reuse gdjs.HISTORIACode.GDBOTAOObjects1 */
{for(var i = 0, len = gdjs.HISTORIACode.GDBOTAOObjects1.length ;i < len;++i) {
    gdjs.HISTORIACode.GDBOTAOObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HISTORIACode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.HISTORIACode.GDNewObject4Objects1);

gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {
/* Reuse gdjs.HISTORIACode.GDNewObject4Objects1 */
{for(var i = 0, len = gdjs.HISTORIACode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.HISTORIACode.GDNewObject4Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.HISTORIACode.GDNewObject4Objects1);

gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject4Objects1Objects, runtimeScene, true, true);
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {
/* Reuse gdjs.HISTORIACode.GDNewObject4Objects1 */
{for(var i = 0, len = gdjs.HISTORIACode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.HISTORIACode.GDNewObject4Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.HISTORIACode.GDNewObject5Objects1);

gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {
/* Reuse gdjs.HISTORIACode.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.HISTORIACode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.HISTORIACode.GDNewObject5Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.HISTORIACode.GDNewObject5Objects1);

gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HISTORIACode.mapOfGDgdjs_46HISTORIACode_46GDNewObject5Objects1Objects, runtimeScene, true, true);
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {
/* Reuse gdjs.HISTORIACode.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.HISTORIACode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.HISTORIACode.GDNewObject5Objects1[i].setAnimation(0);
}
}}

}


{



}


{


gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HISTORIACode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.HISTORIACode.condition0IsTrue_0.val = false;
{
gdjs.HISTORIACode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 1;
}if (gdjs.HISTORIACode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HISTORIACode.eventsList3(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.HISTORIACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HISTORIACode.GDNewObjectObjects1.length = 0;
gdjs.HISTORIACode.GDNewObjectObjects2.length = 0;
gdjs.HISTORIACode.GDBOTAOObjects1.length = 0;
gdjs.HISTORIACode.GDBOTAOObjects2.length = 0;
gdjs.HISTORIACode.GDNewObject2Objects1.length = 0;
gdjs.HISTORIACode.GDNewObject2Objects2.length = 0;
gdjs.HISTORIACode.GDNewObject4Objects1.length = 0;
gdjs.HISTORIACode.GDNewObject4Objects2.length = 0;
gdjs.HISTORIACode.GDNewObject5Objects1.length = 0;
gdjs.HISTORIACode.GDNewObject5Objects2.length = 0;
gdjs.HISTORIACode.GDNewObject3Objects1.length = 0;
gdjs.HISTORIACode.GDNewObject3Objects2.length = 0;
gdjs.HISTORIACode.GDNewObject6Objects1.length = 0;
gdjs.HISTORIACode.GDNewObject6Objects2.length = 0;

gdjs.HISTORIACode.eventsList4(runtimeScene);
return;

}

gdjs['HISTORIACode'] = gdjs.HISTORIACode;
