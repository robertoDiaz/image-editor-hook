YUI.add("aui-image-editor-canvas",function(e,t){var n=e.Lang,r="image-editor-canvas",i="height",s="width",o=e.Base.create(r,e.ImageEditorBase,[],{initializer:function(){var t=this,n=t.get("imageNode"),r=t.get("srcNode"),o,u,a,f;r&&n&&(a=n.get(s),f=n.get(i),o=e.config.doc.createElement("canvas"),u=o.getContext("2d"),o.setAttribute(s,a),o.setAttribute(i,f),u.drawImage(n.getDOMNode(),0,0),n.insert(o,"after"),t._canvas=o,t._ctx=u,t._initialData=u.getImageData(0,0,a,f),t._currentData=t._cloneImageData(t._initialData),t._previewData=t._cloneImageData(t._initialData))},clear:function(){var e=this;e._ctx.putImageData(e._currentData,0,0),e._notifyStateChange("clear")},getImage:function(){var e=this,t,n;return n=e._canvas.getAttribute(s),t=e._canvas.getAttribute(i),e._cloneImageData(e._ctx.getImageData(0,0,n,t))},getImageData:function(){var e=this;return e._canvas.toDataURL(e.get("imageType"))},process:function(t,r,i){var s=this,o;o=e.instanceOf(t,e.Base)?t.get("async"):t.async,s.putImage(s._currentData),s._previewData=s._cloneImageData(s._currentData),n.isFunction(t.process)&&(t.process({bitmapData:s._previewData,statusNode:s._processorInfo,_ctx:s._ctx,_canvas:s._canvas},r,e.bind("_onProcessComplete",s,o,i)),o||s._onProcessComplete(o,i))},putImage:function(e,t,n){var r=this;t=t||0,n=n||0,r._currentData=r._cloneImageData(e),r._previewData=r._cloneImageData(e),r._ctx.putImageData(e,t,n)},reset:function(){var e=this;e._ctx.putImageData(e._initialData,0,0),e._currentData=e._cloneImageData(e._initialData),e._notifyStateChange("reset")},save:function(){var e=this;e._notifyStateChange("save",e._cloneImageData(e._currentData),e.getImage()),e._currentData=e.getImage()},_onProcessComplete:function(e,t){var n=this;e||n._ctx.putImageData(n._previewData,0,0),t&&t()},_cloneImageData:function(e){var t=this,n=t._ctx.createImageData(e.width,e.height),r=n.data,i=e.data,s,o;if(r.set)r.set(e.data);else{o=i.length;for(s=0;s<o;s++)r[s]=i[s]}return n}},{});e.ImageEditorCanvas=o},"2.0.0");