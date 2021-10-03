gdjs.FASE1Code = {};
gdjs.FASE1Code.GDFUNDOObjects1= [];
gdjs.FASE1Code.GDFUNDOObjects2= [];
gdjs.FASE1Code.GDPLAYERObjects1= [];
gdjs.FASE1Code.GDPLAYERObjects2= [];
gdjs.FASE1Code.GDRUIMObjects1= [];
gdjs.FASE1Code.GDRUIMObjects2= [];
gdjs.FASE1Code.GDBOMObjects1= [];
gdjs.FASE1Code.GDBOMObjects2= [];
gdjs.FASE1Code.GDHITBOXObjects1= [];
gdjs.FASE1Code.GDHITBOXObjects2= [];
gdjs.FASE1Code.GDPREDIOSObjects1= [];
gdjs.FASE1Code.GDPREDIOSObjects2= [];
gdjs.FASE1Code.GDCHAOHITBOXObjects1= [];
gdjs.FASE1Code.GDCHAOHITBOXObjects2= [];
gdjs.FASE1Code.GDNewObjectObjects1= [];
gdjs.FASE1Code.GDNewObjectObjects2= [];

gdjs.FASE1Code.conditionTrue_0 = {val:false};
gdjs.FASE1Code.condition0IsTrue_0 = {val:false};
gdjs.FASE1Code.condition1IsTrue_0 = {val:false};


gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDBOMObjects1Objects = Hashtable.newFrom({"BOM": gdjs.FASE1Code.GDBOMObjects1});gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDRUIMObjects1Objects = Hashtable.newFrom({"RUIM": gdjs.FASE1Code.GDRUIMObjects1});gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDPLAYERObjects1Objects = Hashtable.newFrom({"PLAYER": gdjs.FASE1Code.GDPLAYERObjects1});gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDRUIMObjects1Objects = Hashtable.newFrom({"RUIM": gdjs.FASE1Code.GDRUIMObjects1});gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDPLAYERObjects1Objects = Hashtable.newFrom({"PLAYER": gdjs.FASE1Code.GDPLAYERObjects1});gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDBOMObjects1Objects = Hashtable.newFrom({"BOM": gdjs.FASE1Code.GDBOMObjects1});gdjs.FASE1Code.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("HITBOX"), gdjs.FASE1Code.GDHITBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.FASE1Code.GDPLAYERObjects1);
{for(var i = 0, len = gdjs.FASE1Code.GDPLAYERObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDPLAYERObjects1[i].setPosition((( gdjs.FASE1Code.GDHITBOXObjects1.length === 0 ) ? 0 :gdjs.FASE1Code.GDHITBOXObjects1[0].getPointX("")),(( gdjs.FASE1Code.GDHITBOXObjects1.length === 0 ) ? 0 :gdjs.FASE1Code.GDHITBOXObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.FASE1Code.GDHITBOXObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDHITBOXObjects1[i].hide();
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("CHAOHITBOX"), gdjs.FASE1Code.GDCHAOHITBOXObjects1);
{for(var i = 0, len = gdjs.FASE1Code.GDCHAOHITBOXObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDCHAOHITBOXObjects1[i].setX(gdjs.FASE1Code.GDCHAOHITBOXObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CHAOHITBOX"), gdjs.FASE1Code.GDCHAOHITBOXObjects1);

gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FASE1Code.GDCHAOHITBOXObjects1.length;i<l;++i) {
    if ( gdjs.FASE1Code.GDCHAOHITBOXObjects1[i].getX() <= -((gdjs.FASE1Code.GDCHAOHITBOXObjects1[i].getWidth())) ) {
        gdjs.FASE1Code.condition0IsTrue_0.val = true;
        gdjs.FASE1Code.GDCHAOHITBOXObjects1[k] = gdjs.FASE1Code.GDCHAOHITBOXObjects1[i];
        ++k;
    }
}
gdjs.FASE1Code.GDCHAOHITBOXObjects1.length = k;}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE1Code.GDCHAOHITBOXObjects1 */
{for(var i = 0, len = gdjs.FASE1Code.GDCHAOHITBOXObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDCHAOHITBOXObjects1[i].setX((gdjs.FASE1Code.GDCHAOHITBOXObjects1[i].getWidth()));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("FUNDO"), gdjs.FASE1Code.GDFUNDOObjects1);
{for(var i = 0, len = gdjs.FASE1Code.GDFUNDOObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDFUNDOObjects1[i].setX(gdjs.FASE1Code.GDFUNDOObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FUNDO"), gdjs.FASE1Code.GDFUNDOObjects1);

gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FASE1Code.GDFUNDOObjects1.length;i<l;++i) {
    if ( gdjs.FASE1Code.GDFUNDOObjects1[i].getX() <= -((gdjs.FASE1Code.GDFUNDOObjects1[i].getWidth())) ) {
        gdjs.FASE1Code.condition0IsTrue_0.val = true;
        gdjs.FASE1Code.GDFUNDOObjects1[k] = gdjs.FASE1Code.GDFUNDOObjects1[i];
        ++k;
    }
}
gdjs.FASE1Code.GDFUNDOObjects1.length = k;}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE1Code.GDFUNDOObjects1 */
{for(var i = 0, len = gdjs.FASE1Code.GDFUNDOObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDFUNDOObjects1[i].setX((gdjs.FASE1Code.GDFUNDOObjects1[i].getWidth()));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("PREDIOS"), gdjs.FASE1Code.GDPREDIOSObjects1);
{for(var i = 0, len = gdjs.FASE1Code.GDPREDIOSObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDPREDIOSObjects1[i].setX(gdjs.FASE1Code.GDPREDIOSObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PREDIOS"), gdjs.FASE1Code.GDPREDIOSObjects1);

gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FASE1Code.GDPREDIOSObjects1.length;i<l;++i) {
    if ( gdjs.FASE1Code.GDPREDIOSObjects1[i].getX() <= -((gdjs.FASE1Code.GDPREDIOSObjects1[i].getWidth())) ) {
        gdjs.FASE1Code.condition0IsTrue_0.val = true;
        gdjs.FASE1Code.GDPREDIOSObjects1[k] = gdjs.FASE1Code.GDPREDIOSObjects1[i];
        ++k;
    }
}
gdjs.FASE1Code.GDPREDIOSObjects1.length = k;}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FUNDO"), gdjs.FASE1Code.GDFUNDOObjects1);
/* Reuse gdjs.FASE1Code.GDPREDIOSObjects1 */
{for(var i = 0, len = gdjs.FASE1Code.GDPREDIOSObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDPREDIOSObjects1[i].setX((( gdjs.FASE1Code.GDFUNDOObjects1.length === 0 ) ? 0 :gdjs.FASE1Code.GDFUNDOObjects1[0].getWidth()));
}
}}

}


{



}


{


gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
gdjs.FASE1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HITBOX"), gdjs.FASE1Code.GDHITBOXObjects1);
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.FASE1Code.GDPLAYERObjects1);
{for(var i = 0, len = gdjs.FASE1Code.GDHITBOXObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDHITBOXObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.FASE1Code.GDPLAYERObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDPLAYERObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
gdjs.FASE1Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.FASE1Code.GDPLAYERObjects1);
{for(var i = 0, len = gdjs.FASE1Code.GDPLAYERObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDPLAYERObjects1[i].setAnimation(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("HITBOX"), gdjs.FASE1Code.GDHITBOXObjects1);
{for(var i = 0, len = gdjs.FASE1Code.GDHITBOXObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDHITBOXObjects1[i].setX(300);
}
}}

}


{



}


{


gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
gdjs.FASE1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(2, 6), "TEMPOBOM");
}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
gdjs.FASE1Code.GDBOMObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDBOMObjects1Objects, 1100, gdjs.randomInRange(260, 410), "");
}{for(var i = 0, len = gdjs.FASE1Code.GDBOMObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDBOMObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.FASE1Code.GDBOMObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDBOMObjects1[i].setAnimationFrame(gdjs.random(1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TEMPOBOM");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BOM"), gdjs.FASE1Code.GDBOMObjects1);
{for(var i = 0, len = gdjs.FASE1Code.GDBOMObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDBOMObjects1[i].setX(gdjs.FASE1Code.GDBOMObjects1[i].getX() - (8.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOM"), gdjs.FASE1Code.GDBOMObjects1);

gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FASE1Code.GDBOMObjects1.length;i<l;++i) {
    if ( gdjs.FASE1Code.GDBOMObjects1[i].getX() == -(10) ) {
        gdjs.FASE1Code.condition0IsTrue_0.val = true;
        gdjs.FASE1Code.GDBOMObjects1[k] = gdjs.FASE1Code.GDBOMObjects1[i];
        ++k;
    }
}
gdjs.FASE1Code.GDBOMObjects1.length = k;}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE1Code.GDBOMObjects1 */
{for(var i = 0, len = gdjs.FASE1Code.GDBOMObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDBOMObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
gdjs.FASE1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(1.9, 5.5), "TEMPORUIM");
}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
gdjs.FASE1Code.GDRUIMObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDRUIMObjects1Objects, 1100, gdjs.randomInRange(140, 410), "");
}{for(var i = 0, len = gdjs.FASE1Code.GDRUIMObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDRUIMObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.FASE1Code.GDRUIMObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDRUIMObjects1[i].setAnimationFrame(gdjs.random(1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TEMPORUIM");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("RUIM"), gdjs.FASE1Code.GDRUIMObjects1);
{for(var i = 0, len = gdjs.FASE1Code.GDRUIMObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDRUIMObjects1[i].setX(gdjs.FASE1Code.GDRUIMObjects1[i].getX() - (8.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RUIM"), gdjs.FASE1Code.GDRUIMObjects1);

gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FASE1Code.GDRUIMObjects1.length;i<l;++i) {
    if ( gdjs.FASE1Code.GDRUIMObjects1[i].getX() == -(10) ) {
        gdjs.FASE1Code.condition0IsTrue_0.val = true;
        gdjs.FASE1Code.GDRUIMObjects1[k] = gdjs.FASE1Code.GDRUIMObjects1[i];
        ++k;
    }
}
gdjs.FASE1Code.GDRUIMObjects1.length = k;}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE1Code.GDRUIMObjects1 */
{for(var i = 0, len = gdjs.FASE1Code.GDRUIMObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDRUIMObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.FASE1Code.GDPLAYERObjects1);
gdjs.copyArray(runtimeScene.getObjects("RUIM"), gdjs.FASE1Code.GDRUIMObjects1);

gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
gdjs.FASE1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDPLAYERObjects1Objects, gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDRUIMObjects1Objects, false, runtimeScene, false);
}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE1Code.GDRUIMObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(2);
}{for(var i = 0, len = gdjs.FASE1Code.GDRUIMObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDRUIMObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOM"), gdjs.FASE1Code.GDBOMObjects1);
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.FASE1Code.GDPLAYERObjects1);

gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
gdjs.FASE1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDPLAYERObjects1Objects, gdjs.FASE1Code.mapOfGDgdjs_46FASE1Code_46GDBOMObjects1Objects, false, runtimeScene, false);
}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE1Code.GDBOMObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.FASE1Code.GDBOMObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDBOMObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.FASE1Code.condition0IsTrue_0.val = false;
{
gdjs.FASE1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 40, "Final");
}if (gdjs.FASE1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DECISAO1", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.FASE1Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.FASE1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.FASE1Code.GDNewObjectObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}}

}


};

gdjs.FASE1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FASE1Code.GDFUNDOObjects1.length = 0;
gdjs.FASE1Code.GDFUNDOObjects2.length = 0;
gdjs.FASE1Code.GDPLAYERObjects1.length = 0;
gdjs.FASE1Code.GDPLAYERObjects2.length = 0;
gdjs.FASE1Code.GDRUIMObjects1.length = 0;
gdjs.FASE1Code.GDRUIMObjects2.length = 0;
gdjs.FASE1Code.GDBOMObjects1.length = 0;
gdjs.FASE1Code.GDBOMObjects2.length = 0;
gdjs.FASE1Code.GDHITBOXObjects1.length = 0;
gdjs.FASE1Code.GDHITBOXObjects2.length = 0;
gdjs.FASE1Code.GDPREDIOSObjects1.length = 0;
gdjs.FASE1Code.GDPREDIOSObjects2.length = 0;
gdjs.FASE1Code.GDCHAOHITBOXObjects1.length = 0;
gdjs.FASE1Code.GDCHAOHITBOXObjects2.length = 0;
gdjs.FASE1Code.GDNewObjectObjects1.length = 0;
gdjs.FASE1Code.GDNewObjectObjects2.length = 0;

gdjs.FASE1Code.eventsList0(runtimeScene);
return;

}

gdjs['FASE1Code'] = gdjs.FASE1Code;
