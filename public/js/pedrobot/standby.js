(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.right_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#010202").ss(2,0,1).p("ABWgNQAAgmgZgdQgVgJgWAAQgpAAgfAeQgeAfAAApQAAAnAZAdQATAJAXAAQAqAAAegeQAfgfAAgqg");
	this.shape.setTransform(8.6,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("Ag8BRQgZgdAAgnQAAgpAfgfQAegeAqAAQAWAAAUAKQAZAcAAAmQABArgfAeQgeAegqAAQgXAAgUgJg");
	this.shape_1.setTransform(8.6,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_eye, new cjs.Rectangle(-1,-1,19.1,20), null);


(lib.left_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#010202").ss(2,0,1).p("ABWgNQAAgmgZgdQgVgJgWAAQgpAAgfAeQgeAfAAApQAAAnAZAdQATAJAXAAQAqAAAegeQAfgfAAgqg");
	this.shape.setTransform(8.6,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("Ag8BRQgZgdAAgnQAAgpAfgfQAegeAqAAQAWAAAUAKQAZAcAAAmQABArgfAeQgeAegqAAQgXAAgUgJg");
	this.shape_1.setTransform(8.6,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.left_eye, new cjs.Rectangle(-1,-1,19.1,20), null);


// stage content:
(lib.standby = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// left_eye
	this.instance = new lib.left_eye();
	this.instance.parent = this;
	this.instance.setTransform(197.6,178.5,1,1,0,0,0,8.6,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},3).wait(6).to({alpha:1},3).wait(6));

	// right_eye
	this.instance_1 = new lib.right_eye();
	this.instance_1.parent = this;
	this.instance_1.setTransform(232.6,178.5,1,1,0,0,0,8.6,9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},3).wait(6).to({alpha:0},3).wait(6));

	// pedrobot
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#010202").ss(2,0,1).p("ABWgNQAAgmgZgdQgVgJgWAAQgpAAgfAeQgeAfAAApQAAAnAZAdQATAJAXAAQAqAAAegeQAfgfAAgqg");
	this.shape.setTransform(231.8,178.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#010202").ss(2,0,1).p("AAehjQAZAdAAAmQAAAqgeAeQgdAegrAAQgXAAgUgJQAfAkAvAAQArAAAegeQAegeAAgqQAAgfgRgaQgQgZgcgMg");
	this.shape_1.setTransform(234.8,180.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaA/QATAJAXAAQArAAAdgeQAfgfAAgqQAAgmgZgdQAcAMAQAaQARAZAAAfQAAAqgfAfQgeAegqAAQgvAAgfgkg");
	this.shape_2.setTransform(234.8,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#010202").ss(2,0,1).p("AhAAOQAAg+AtgtQAsgtA/AAIAVACQgfgPgjAAQg+AAgtAtQgtAsAAA/QAAA6AmArQAmArA3AHQgmgSgYglQgYgmAAgtg");
	this.shape_3.setTransform(224.7,178.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBmQglgrgBg6QABg/AsgsQAtgtA+AAQAjAAAgAPIgWgCQg/AAgsAtQgsAtgBA+QAAAtAZAmQAXAlAnASQg3gHgngrg");
	this.shape_4.setTransform(224.7,178.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#010202").ss(2,0,1).p("ABtBtQguAsg/AAQg+AAgtgtQgtgsAAhAQAAg+AtgtQAtgtA+AAQBAAAAsAtQAtAtAAA+QAAA/gsAug");
	this.shape_5.setTransform(233.6,179.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhrBsQgtgsAAhAQAAg+AtgtQAsgtA/AAQBAAAAsAtQAtAtAAA+QAAA/gsAuQguAsg/AAQg/AAgsgtg");
	this.shape_6.setTransform(233.6,179.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#010202").ss(2,0,1).p("AAJgDQAFANgIAEQgEACgDgDQgFgDgCgGQgFgMAIgFQAEgBAEACQAEAEACAFg");
	this.shape_7.setTransform(154.5,190.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#010202").ss(2,0,1).p("AAJgDQADAFgBAGQgBAFgEABQgEACgDgDQgFgDgCgGQgFgMAIgFQAEgBAEACQAEAEACAFg");
	this.shape_8.setTransform(158.1,193.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#010202").ss(2,0,1).p("AAJgDQADAFgBAFQgCAFgDACQgEABgEgDQgEgDgCgFQgDgFABgFQABgFAEgCQAEgCADADQAFADACAGg");
	this.shape_9.setTransform(161.8,196.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#010202").ss(2,0,1).p("AAJgDQADAFgBAFQgCAFgDACQgEABgDgDQgFgDgCgFQgCgFABgFQABgFADgCQAEgCAEADQAEADACAGg");
	this.shape_10.setTransform(165.5,199.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#010202").ss(2,0,1).p("ABkBLIjHiV");
	this.shape_11.setTransform(160,189.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#010202").ss(2,0,1).p("ABWgNQAAgmgZgdQgVgJgWAAQgpAAgfAeQgeAfAAApQAAAnAZAdQATAJAXAAQAqAAAegeQAfgfAAgqg");
	this.shape_12.setTransform(196.8,178.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#010202").ss(2,0,1).p("AAehjQAZAdAAAmQAAAqgeAeQgdAegrAAQgXAAgUgJQAfAkAvAAQArAAAegeQAegeAAgqQAAgfgRgaQgQgZgcgMg");
	this.shape_13.setTransform(199.8,180.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhaA/QATAJAXAAQArAAAdgeQAfgfAAgqQAAgmgZgdQAcAMAQAaQARAZAAAfQAAAqgfAfQgeAegqAAQgvAAgfgkg");
	this.shape_14.setTransform(199.8,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#010202").ss(2,0,1).p("AhAAOQAAg+AtgtQAsgtA/AAIAVACQgfgPgjAAQg+AAgtAtQgtAsAAA/QAAA6AmArQAmArA3AHQgmgSgYglQgYgmAAgtg");
	this.shape_15.setTransform(189.7,178.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhHBmQglgrgBg6QAAg/AtgsQAtgtA+AAQAjAAAgAPIgWgCQg/AAgsAtQgtAtAAA+QAAAtAZAmQAXAlAmASQg3gHgmgrg");
	this.shape_16.setTransform(189.7,178.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#010202").ss(2,0,1).p("ABtBtQguAsg/AAQg+AAgtgtQgtgsAAhAQAAg+AtgtQAtgtA+AAQBAAAAsAtQAtAtAAA+QAAA/gsAug");
	this.shape_17.setTransform(198.6,179.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhrBsQgtgsAAhAQAAg+AtgtQAsgtA/AAQBAAAAsAtQAtAtAAA+QAAA/gsAuQguAsg/AAQg/AAgsgtg");
	this.shape_18.setTransform(198.6,179.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#010202").ss(2,0,1).p("AmPHHIAAqTQAAhkBGhGQBGhGBkAAIE/AAQBjAABGBGQBHBGAABk");
	this.shape_19.setTransform(210,199.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#010202").ss(4,0,1).p("AH0INIsgAAIjHiWIAAqTQAAhkBGhGQBGhGBjAAIFYAAQBPAABAAuICtB9QAwAuAaA9QAaA9AABCg");
	this.shape_20.setTransform(200,192.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkrINIjIiWIAAqTQAAhkBGhGQBGhGBjAAIFYAAQBPAAA/AvICuB8QAwAuAaA9QAaA9AABCIAAKEg");
	this.shape_21.setTransform(200,192.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABWCGQgQgFgPgLIiWhxQgVgOAAgaIAAhHQAAgMAHgHQAGgJAMAAQAQAAAVAQICWBwQAVAPAAAaIAABMQAAAKgHAHQgHAHgKAAgAhMgjQAAAGAFADICUBuIAAgxQAAgFgFgEIiUhvg");
	this.shape_22.setTransform(161.7,246.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABWCGQgQgFgPgLIiWhxQgVgOAAgaIAAhHQAAgVAQgGQASgGAcAUICWBxQAVAPAAAaIAABMQAAAMgKAHQgGAFgIAAIgHgBg");
	this.shape_23.setTransform(161.7,246.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#010202").s().p("AgzCUQghAAgcgUIiXhyQgVgOAAgaIAAhGQAAgVAPgPQAPgPAVAAIEbAAQAkAAAbAVICXBxQAVAPAAAZIAABNQAAASgNANQgNANgSAAg");
	this.shape_24.setTransform(178.5,245.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#010202").s().p("AgyCUQgiAAgcgUIiXhyQgVgOAAgaIAAhGQAAgVAPgPQAPgPAVAAIEcAAQAjAAAcAVICWBxQAVAOAAAaIAABNQAAASgNANQgNANgRAAg");
	this.shape_25.setTransform(220.4,245.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(348,338,104,122);
// library properties:
lib.properties = {
	width: 400,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;