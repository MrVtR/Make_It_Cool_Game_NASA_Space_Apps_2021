gdjs.FASE3Code = {};
gdjs.FASE3Code.GDFUNDOObjects1= [];
gdjs.FASE3Code.GDFUNDOObjects2= [];
gdjs.FASE3Code.GDPLAYERObjects1= [];
gdjs.FASE3Code.GDPLAYERObjects2= [];
gdjs.FASE3Code.GDRUIMObjects1= [];
gdjs.FASE3Code.GDRUIMObjects2= [];
gdjs.FASE3Code.GDBOMObjects1= [];
gdjs.FASE3Code.GDBOMObjects2= [];
gdjs.FASE3Code.GDHITBOXObjects1= [];
gdjs.FASE3Code.GDHITBOXObjects2= [];
gdjs.FASE3Code.GDPREDIOSObjects1= [];
gdjs.FASE3Code.GDPREDIOSObjects2= [];
gdjs.FASE3Code.GDCHAOHITBOXObjects1= [];
gdjs.FASE3Code.GDCHAOHITBOXObjects2= [];
gdjs.FASE3Code.GDNewObjectObjects1= [];
gdjs.FASE3Code.GDNewObjectObjects2= [];

gdjs.FASE3Code.conditionTrue_0 = {val:false};
gdjs.FASE3Code.condition0IsTrue_0 = {val:false};
gdjs.FASE3Code.condition1IsTrue_0 = {val:false};


gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDBOMObjects1Objects = Hashtable.newFrom({"BOM": gdjs.FASE3Code.GDBOMObjects1});gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDRUIMObjects1Objects = Hashtable.newFrom({"RUIM": gdjs.FASE3Code.GDRUIMObjects1});gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDPLAYERObjects1Objects = Hashtable.newFrom({"PLAYER": gdjs.FASE3Code.GDPLAYERObjects1});gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDRUIMObjects1Objects = Hashtable.newFrom({"RUIM": gdjs.FASE3Code.GDRUIMObjects1});gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDPLAYERObjects1Objects = Hashtable.newFrom({"PLAYER": gdjs.FASE3Code.GDPLAYERObjects1});gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDBOMObjects1Objects = Hashtable.newFrom({"BOM": gdjs.FASE3Code.GDBOMObjects1});gdjs.FASE3Code.eventsList0 = function(runtimeScene) {

{



}


{


{
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("HITBOX"), gdjs.FASE3Code.GDHITBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.FASE3Code.GDPLAYERObjects1);
{for(var i = 0, len = gdjs.FASE3Code.GDPLAYERObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDPLAYERObjects1[i].setPosition((( gdjs.FASE3Code.GDHITBOXObjects1.length === 0 ) ? 0 :gdjs.FASE3Code.GDHITBOXObjects1[0].getPointX("")),(( gdjs.FASE3Code.GDHITBOXObjects1.length === 0 ) ? 0 :gdjs.FASE3Code.GDHITBOXObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.FASE3Code.GDHITBOXObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDHITBOXObjects1[i].hide();
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("CHAOHITBOX"), gdjs.FASE3Code.GDCHAOHITBOXObjects1);
{for(var i = 0, len = gdjs.FASE3Code.GDCHAOHITBOXObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDCHAOHITBOXObjects1[i].setX(gdjs.FASE3Code.GDCHAOHITBOXObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CHAOHITBOX"), gdjs.FASE3Code.GDCHAOHITBOXObjects1);

gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FASE3Code.GDCHAOHITBOXObjects1.length;i<l;++i) {
    if ( gdjs.FASE3Code.GDCHAOHITBOXObjects1[i].getX() <= -((gdjs.FASE3Code.GDCHAOHITBOXObjects1[i].getWidth())) ) {
        gdjs.FASE3Code.condition0IsTrue_0.val = true;
        gdjs.FASE3Code.GDCHAOHITBOXObjects1[k] = gdjs.FASE3Code.GDCHAOHITBOXObjects1[i];
        ++k;
    }
}
gdjs.FASE3Code.GDCHAOHITBOXObjects1.length = k;}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE3Code.GDCHAOHITBOXObjects1 */
{for(var i = 0, len = gdjs.FASE3Code.GDCHAOHITBOXObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDCHAOHITBOXObjects1[i].setX((gdjs.FASE3Code.GDCHAOHITBOXObjects1[i].getWidth()));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("FUNDO"), gdjs.FASE3Code.GDFUNDOObjects1);
{for(var i = 0, len = gdjs.FASE3Code.GDFUNDOObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDFUNDOObjects1[i].setX(gdjs.FASE3Code.GDFUNDOObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FUNDO"), gdjs.FASE3Code.GDFUNDOObjects1);

gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FASE3Code.GDFUNDOObjects1.length;i<l;++i) {
    if ( gdjs.FASE3Code.GDFUNDOObjects1[i].getX() <= -((gdjs.FASE3Code.GDFUNDOObjects1[i].getWidth())) ) {
        gdjs.FASE3Code.condition0IsTrue_0.val = true;
        gdjs.FASE3Code.GDFUNDOObjects1[k] = gdjs.FASE3Code.GDFUNDOObjects1[i];
        ++k;
    }
}
gdjs.FASE3Code.GDFUNDOObjects1.length = k;}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE3Code.GDFUNDOObjects1 */
{for(var i = 0, len = gdjs.FASE3Code.GDFUNDOObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDFUNDOObjects1[i].setX((gdjs.FASE3Code.GDFUNDOObjects1[i].getWidth()));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("PREDIOS"), gdjs.FASE3Code.GDPREDIOSObjects1);
{for(var i = 0, len = gdjs.FASE3Code.GDPREDIOSObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDPREDIOSObjects1[i].setX(gdjs.FASE3Code.GDPREDIOSObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PREDIOS"), gdjs.FASE3Code.GDPREDIOSObjects1);

gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FASE3Code.GDPREDIOSObjects1.length;i<l;++i) {
    if ( gdjs.FASE3Code.GDPREDIOSObjects1[i].getX() <= -((gdjs.FASE3Code.GDPREDIOSObjects1[i].getWidth())) ) {
        gdjs.FASE3Code.condition0IsTrue_0.val = true;
        gdjs.FASE3Code.GDPREDIOSObjects1[k] = gdjs.FASE3Code.GDPREDIOSObjects1[i];
        ++k;
    }
}
gdjs.FASE3Code.GDPREDIOSObjects1.length = k;}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FUNDO"), gdjs.FASE3Code.GDFUNDOObjects1);
/* Reuse gdjs.FASE3Code.GDPREDIOSObjects1 */
{for(var i = 0, len = gdjs.FASE3Code.GDPREDIOSObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDPREDIOSObjects1[i].setX((( gdjs.FASE3Code.GDFUNDOObjects1.length === 0 ) ? 0 :gdjs.FASE3Code.GDFUNDOObjects1[0].getWidth()));
}
}}

}


{



}


{


gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
gdjs.FASE3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HITBOX"), gdjs.FASE3Code.GDHITBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.FASE3Code.GDPLAYERObjects1);
{for(var i = 0, len = gdjs.FASE3Code.GDHITBOXObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDHITBOXObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.FASE3Code.GDPLAYERObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDPLAYERObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
gdjs.FASE3Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.FASE3Code.GDPLAYERObjects1);
{for(var i = 0, len = gdjs.FASE3Code.GDPLAYERObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDPLAYERObjects1[i].setAnimation(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("HITBOX"), gdjs.FASE3Code.GDHITBOXObjects1);
{for(var i = 0, len = gdjs.FASE3Code.GDHITBOXObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDHITBOXObjects1[i].setX(300);
}
}}

}


{



}


{


gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
gdjs.FASE3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(0.7, 6), "TEMPOBOM");
}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
gdjs.FASE3Code.GDBOMObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDBOMObjects1Objects, 1100, gdjs.randomInRange(260, 410), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TEMPOBOM");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BOM"), gdjs.FASE3Code.GDBOMObjects1);
{for(var i = 0, len = gdjs.FASE3Code.GDBOMObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDBOMObjects1[i].setX(gdjs.FASE3Code.GDBOMObjects1[i].getX() - (8.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOM"), gdjs.FASE3Code.GDBOMObjects1);

gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FASE3Code.GDBOMObjects1.length;i<l;++i) {
    if ( gdjs.FASE3Code.GDBOMObjects1[i].getX() == -(9) ) {
        gdjs.FASE3Code.condition0IsTrue_0.val = true;
        gdjs.FASE3Code.GDBOMObjects1[k] = gdjs.FASE3Code.GDBOMObjects1[i];
        ++k;
    }
}
gdjs.FASE3Code.GDBOMObjects1.length = k;}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE3Code.GDBOMObjects1 */
{for(var i = 0, len = gdjs.FASE3Code.GDBOMObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDBOMObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
gdjs.FASE3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(0.6, 5), "TEMPORUIM");
}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
gdjs.FASE3Code.GDRUIMObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDRUIMObjects1Objects, 1100, gdjs.randomInRange(140, 410), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TEMPORUIM");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("RUIM"), gdjs.FASE3Code.GDRUIMObjects1);
{for(var i = 0, len = gdjs.FASE3Code.GDRUIMObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDRUIMObjects1[i].setX(gdjs.FASE3Code.GDRUIMObjects1[i].getX() - (8.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RUIM"), gdjs.FASE3Code.GDRUIMObjects1);

gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FASE3Code.GDRUIMObjects1.length;i<l;++i) {
    if ( gdjs.FASE3Code.GDRUIMObjects1[i].getX() == -(9) ) {
        gdjs.FASE3Code.condition0IsTrue_0.val = true;
        gdjs.FASE3Code.GDRUIMObjects1[k] = gdjs.FASE3Code.GDRUIMObjects1[i];
        ++k;
    }
}
gdjs.FASE3Code.GDRUIMObjects1.length = k;}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE3Code.GDRUIMObjects1 */
{for(var i = 0, len = gdjs.FASE3Code.GDRUIMObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDRUIMObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.FASE3Code.GDPLAYERObjects1);
gdjs.copyArray(runtimeScene.getObjects("RUIM"), gdjs.FASE3Code.GDRUIMObjects1);

gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
gdjs.FASE3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDPLAYERObjects1Objects, gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDRUIMObjects1Objects, false, runtimeScene, false);
}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE3Code.GDRUIMObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(2);
}{for(var i = 0, len = gdjs.FASE3Code.GDRUIMObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDRUIMObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOM"), gdjs.FASE3Code.GDBOMObjects1);
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.FASE3Code.GDPLAYERObjects1);

gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
gdjs.FASE3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDPLAYERObjects1Objects, gdjs.FASE3Code.mapOfGDgdjs_46FASE3Code_46GDBOMObjects1Objects, false, runtimeScene, false);
}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE3Code.GDBOMObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.FASE3Code.GDBOMObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDBOMObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.FASE3Code.condition0IsTrue_0.val = false;
{
gdjs.FASE3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 40, "Final");
}if (gdjs.FASE3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DECISAO3", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.FASE3Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.FASE3Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.FASE3Code.GDNewObjectObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}}

}


};

gdjs.FASE3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FASE3Code.GDFUNDOObjects1.length = 0;
gdjs.FASE3Code.GDFUNDOObjects2.length = 0;
gdjs.FASE3Code.GDPLAYERObjects1.length = 0;
gdjs.FASE3Code.GDPLAYERObjects2.length = 0;
gdjs.FASE3Code.GDRUIMObjects1.length = 0;
gdjs.FASE3Code.GDRUIMObjects2.length = 0;
gdjs.FASE3Code.GDBOMObjects1.length = 0;
gdjs.FASE3Code.GDBOMObjects2.length = 0;
gdjs.FASE3Code.GDHITBOXObjects1.length = 0;
gdjs.FASE3Code.GDHITBOXObjects2.length = 0;
gdjs.FASE3Code.GDPREDIOSObjects1.length = 0;
gdjs.FASE3Code.GDPREDIOSObjects2.length = 0;
gdjs.FASE3Code.GDCHAOHITBOXObjects1.length = 0;
gdjs.FASE3Code.GDCHAOHITBOXObjects2.length = 0;
gdjs.FASE3Code.GDNewObjectObjects1.length = 0;
gdjs.FASE3Code.GDNewObjectObjects2.length = 0;

gdjs.FASE3Code.eventsList0(runtimeScene);
return;

}

gdjs['FASE3Code'] = gdjs.FASE3Code;
