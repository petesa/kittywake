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



(lib.Interpolera11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgrDdQgNgDgJgKQgJgKgBgOQgMAKgPAAQgMAAgKgHQglgYgZgmQgIgLABgOQABgOAJgKQgNAAgLgJQgKgJgDgOQgEgVAAgXQAAgVAEgWQADgNAKgJQALgJANgBQgJgKgBgOQgBgNAIgMQAZglAlgZQAKgHAMAAQAPAAAMAKQABgNAJgLQAJgKANgDQAWgEAVAAQAXAAAVAEQANADAJAKQAKALAAANQAMgKAPAAQAMAAAKAHQAmAZAYAlQAIAMgBANQgBAOgJAKQAOABAKAJQAKAJADANQAEAWAAAVQAAAXgEAVQgDAOgKAJQgKAJgOAAQAJAKABAOQABAOgIALQgZAlglAZQgLAHgLAAQgPAAgMgKQAAAOgKAKQgJAKgNADQgVAEgXAAQgVAAgWgEgAglCLIACArQAVADAOAAQAQAAAUgDIADgrQARgEAPgJIAgAcQAfgUAUgfIgcggQAJgPAEgRIArgDQADgUAAgQQAAgOgDgVIgrgCQgEgRgJgQIAcggQgUgegfgVIggAcQgRgJgPgEIgDgqQgSgEgSAAQgQAAgTAEIgCAqQgOADgTAKIgggcQgeAVgVAeIAcAgQgJAQgEARIgqACQgEATAAAQQAAASAEASIAqADQAEARAJAPIgcAgQAVAfAeAUIAggcQAQAJARAEgAgkAlQgPgPAAgWQAAgUAPgQQAQgPAUAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgWAAQgUAAgQgPgAgHgHQgEADAAAEQAAAFAEAEQADADAEAAQAFAAAEgDQADgEAAgFQAAgEgDgDQgEgEgFAAQgEAAgDAEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjC2IgCgrQgRgEgQgJIggAcQgegUgVgfIAcggQgJgPgEgRIgqgDQgEgSAAgSQAAgQAEgTIAqgCQAEgRAJgQIgcggQAVgeAegVIAgAcQATgKAOgDIACgqQATgEAQAAQASAAASAEIADAqQAPAEARAJIAggcQAfAVAUAeIgcAgQAJAQAEARIArACQADAVAAAOQAAAQgDAUIgrADQgEARgJAPIAcAgQgUAfgfAUIgggcQgPAJgRAEIgDArQgUADgQAAQgOAAgVgDgAgkgkQgPAQAAAUQAAAWAPAPQAQAPAUAAQAWAAAPgPQAPgPAAgWQAAgUgPgQQgPgPgWAAQgUAAgQAPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45.1,45.1);


(lib.Interpolera9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AhXCEQgogbgTgsQgZg9AZg8QAag9A8gZQAdgMAfAAQAwAAAoAbQAoAbATAsQAZA8gZA9QgZA9g9AZQgdAMggAAQgwAAgngbgAg0h/Qg1AWgWA1QgWA0AWA1QAQAoAkAXQAiAXApAAQAbAAAagLQA1gWAWg1QAWg1gWg0QgQgogkgXQgjgXgpAAQgaAAgaALg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AAmE9QgKgGgFgLIgJgRIgcAAIgIARQgFALgKAGQgKAGgLAAIgJgBQg9gNgzghQgMgIgEgNQgFgNAFgNIAGgTIgUgUIgTAGQgGACgHAAQgWAAgMgSQgSgdgKgZQgMgcgGgfQgDgNAGgMQAGgNAMgGIASgIIAAgcIgSgJQgMgGgGgMQgGgNADgNQANg+AhgzQAMgSAWAAQAHAAAGACIATAGIAUgUIgGgTQgFgNAFgNQAEgNAMgHQAXgQAfgNQAcgLAegHIAJgBQALAAAKAGQAKAGAFALIAIARIAcAAIAJgRQAFgLAKgGQAKgGALAAIAIABQA+ANAzAiQAMAHAEANQAFANgFANIgHATIAVAUIATgGQAFgCAIAAQAWAAALASQARAZAMAdQAMAcAGAfQADANgGANQgGAMgNAGIgSAJQABANgBAPIASAIQANAGAGANQAGAMgDANQgMA9gjA0QgLASgWAAQgIAAgFgCIgTgGIgVAUIAHATQAFANgFANQgEANgMAIQgaARgcALQgfANgcAFIgIABQgMAAgJgGgAA7EbQAdgGAXgKQAYgKAXgPIgQgtQAggXAXgfIAtAPQAegtALg2IgrgVQAGgmgGglIArgVQgGgcgKgYQgKgagPgVIgtAQQgXgfgggYIAQgtQgtgeg2gLIgVArQgSgDgUAAQgSAAgUADIgUgrQgdAGgXAKQgZAKgXAPIAQAtQghAZgVAeIgtgQQgeAtgLA2IArAVQgGAlAGAmIgrAVQAFAZALAbQAKAZAPAWIAtgPQAWAeAgAYIgQAtQAvAeA1ALIAUgrQAXADAPAAQAQAAAWgDgAglA6QgSgMgIgTQgLgbALgZQALgbAagLQAMgFAOAAQAVAAARALQASAMAIATQALAagLAaQgLAbgbALQgMAFgOAAQgUAAgRgLgAgKgaQgMAFgEALQgFAKAFALQAHASATAAQAGAAAFgCQAMgFAEgLQAFgLgFgKQgIgSgTAAQgGAAgEACg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnDwQglAGgogGIgUArQg1gLgugeIAPgtQgggYgWgeIgtAPQgOgWgLgZQgLgbgFgZIArgVQgGgmAGglIgrgVQAMg2AdgtIAtAQQAVgeAhgZIgPgtQAWgPAZgKQAYgKAcgGIAUArQAlgGAoAGIAUgrQA2ALAuAeIgRAtQAgAYAXAfIAtgQQAPAVAKAaQALAYAFAcIgrAVQAGAlgGAmIArAVQgLA2geAtIgtgPQgXAfggAXIARAtQgYAPgYAKQgXAKgdAGgAgag/QgaALgLAbQgLAZALAbQALAaAaALQAaALAagLQAbgLALgbQALgagLgaQgLgagbgLQgNgGgNAAQgMAAgOAGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-32.3,64.6,64.7);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Interpolera9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(188.6,188.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:39.9,y:188.6},8).wait(1));

	// Layer 1
	this.instance_1 = new lib.Interpolera11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(224.6,223.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-80},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(356.3,356.2,90.9,89.8);
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