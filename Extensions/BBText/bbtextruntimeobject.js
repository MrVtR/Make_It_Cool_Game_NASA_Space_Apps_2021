var gdjs;
(function(gdjs2) {
  class BBTextRuntimeObject extends gdjs2.RuntimeObject {
    constructor(runtimeScene, objectData) {
      super(runtimeScene, objectData);
      this._wrappingWidth = 250;
      this._opacity = parseFloat(objectData.content.opacity);
      this._text = objectData.content.text;
      this._color = gdjs2.rgbOrHexToRGBColor(objectData.content.color);
      this._fontFamily = objectData.content.fontFamily;
      this._fontSize = parseFloat(objectData.content.fontSize);
      this._wordWrap = objectData.content.wordWrap;
      this._align = objectData.content.align;
      this._renderer = new gdjs2.BBTextRuntimeObjectRenderer(this, runtimeScene);
      this.hidden = !objectData.content.visible;
      this.onCreated();
    }
    getRendererObject() {
      return this._renderer.getRendererObject();
    }
    updateFromObjectData(oldObjectData, newObjectData) {
      if (oldObjectData.content.opacity !== newObjectData.content.opacity) {
        this.setOpacity(newObjectData.content.opacity);
      }
      if (oldObjectData.content.visible !== newObjectData.content.visible) {
        this.hide(!newObjectData.content.visible);
      }
      if (oldObjectData.content.text !== newObjectData.content.text) {
        this.setBBText(newObjectData.content.text);
      }
      if (oldObjectData.content.color !== newObjectData.content.color) {
        this._color = gdjs2.rgbOrHexToRGBColor(newObjectData.content.color);
        this._renderer.updateColor();
      }
      if (oldObjectData.content.fontFamily !== newObjectData.content.fontFamily) {
        this.setFontFamily(newObjectData.content.fontFamily);
      }
      if (oldObjectData.content.fontSize !== newObjectData.content.fontSize) {
        this.setFontSize(newObjectData.content.fontSize);
      }
      if (oldObjectData.content.wordWrap !== newObjectData.content.wordWrap) {
        this.setWordWrap(newObjectData.content.wordWrap);
      }
      if (oldObjectData.content.align !== newObjectData.content.align) {
        this.setAlignment(newObjectData.content.align);
      }
      return true;
    }
    extraInitializationFromInitialInstance(initialInstanceData) {
      if (initialInstanceData.customSize) {
        this.setWrappingWidth(initialInstanceData.width);
      } else {
        this.setWrappingWidth(250);
      }
    }
    onDestroyFromScene(runtimeScene) {
      super.onDestroyFromScene(runtimeScene);
    }
    setBBText(text) {
      this._text = text;
      this._renderer.updateText();
    }
    getBBText() {
      return this._text;
    }
    setColor(rgbColorString) {
      this._color = gdjs2.rgbOrHexToRGBColor(rgbColorString);
      this._renderer.updateColor();
    }
    getColor() {
      return this._color[0] + ";" + this._color[1] + ";" + this._color[2];
    }
    setFontSize(fontSize) {
      this._fontSize = fontSize;
      this._renderer.updateFontSize();
    }
    getFontSize() {
      return this._fontSize;
    }
    setFontFamily(fontFamily) {
      this._fontFamily = fontFamily;
      this._renderer.updateFontFamily();
    }
    getFontFamily() {
      return this._fontFamily;
    }
    setAlignment(align) {
      this._align = align;
      this._renderer.updateAlignment();
    }
    getAlignment() {
      return this._align;
    }
    setX(x) {
      super.setX(x);
      this._renderer.updatePosition();
    }
    setY(y) {
      super.setY(y);
      this._renderer.updatePosition();
    }
    setAngle(angle) {
      super.setAngle(angle);
      this._renderer.updateAngle();
    }
    setOpacity(opacity) {
      if (opacity < 0) {
        opacity = 0;
      }
      if (opacity > 255) {
        opacity = 255;
      }
      this._opacity = opacity;
      this._renderer.updateOpacity();
    }
    getOpacity() {
      return this._opacity;
    }
    setWrappingWidth(width) {
      if (this._wrappingWidth === width)
        return;
      this._wrappingWidth = width;
      this._renderer.updateWrappingWidth();
      this.hitBoxesDirty = true;
    }
    getWrappingWidth() {
      return this._wrappingWidth;
    }
    setWordWrap(wordWrap) {
      if (this._wordWrap === wordWrap)
        return;
      this._wordWrap = wordWrap;
      this._renderer.updateWordWrap();
      this.hitBoxesDirty = true;
    }
    getWordWrap() {
      return this._wordWrap;
    }
    getWidth() {
      return this._renderer.getWidth();
    }
    getHeight() {
      return this._renderer.getHeight();
    }
  }
  gdjs2.BBTextRuntimeObject = BBTextRuntimeObject;
  gdjs2.registerObject("BBText::BBText", gdjs2.BBTextRuntimeObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=bbtextruntimeobject.js.map
