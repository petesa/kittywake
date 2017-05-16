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


(lib.Text_hel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#767676").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape.setTransform(241.9,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgLQgEgMAAgNQAAgLAEgMQAEgLAIgIQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAIAEAKQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngHIgDgMQgCgIgFgFQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAGIBMAAIAAAAg");
	this.shape_1.setTransform(232.4,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#767676").s().p("AgZA5QgDgDAAgDIAAhjQAAgEADgDQADgDADABQADgBADADQADADAAAEIAAAKQAFgHAGgFQAHgFAHgCIAGgBQADAAADACQACACAAAFQAAADgDACQgCACgFABQgIABgJAFQgIAFgEAIIAABJQAAADgDADQgDACgDABQgDgBgDgCg");
	this.shape_2.setTransform(222.4,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgLQgEgMAAgNQAAgLAEgMQAEgLAIgIQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAIAEAKQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngHIgDgMQgCgIgFgFQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAGIBMAAIAAAAg");
	this.shape_3.setTransform(211,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#767676").s().p("AAhBOQgDgDAAgDIAAhEQAAgHgCgFQgBgFgEgDQgDgDgFgBQgFgCgGAAQgJAAgKAFQgJAGgFAIIAABLQAAADgDADQgDADgDAAQgEAAgDgDQgCgDAAgDIAAiPQAAgDACgDQADgDAEAAQADAAADADQADADAAADIAAA1QAHgIAKgFIAMgFQAFgCAGAAQAJAAAHACQAHACAFAFQAFAFACAHQACAGAAAKIAABJQAAADgCADQgDADgEAAQgEAAgCgDg");
	this.shape_4.setTransform(197.6,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#767676").s().p("AABBKQgDgCgEgDQgDgEgCgFQgBgFAAgHIAAhKIgMAAQgEAAgCgDQgCgCAAgDQAAgDACgDQACgCAEAAIAMAAIAAgYQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIAAAYIAQAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAIgQAAIAABHQAAAGADAEQADAFAGAAQAFAAAEgDQAHAAAAAIQAAAFgEACQgHAEgKAAQgGAAgFgCg");
	this.shape_5.setTransform(187.4,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#767676").s().p("AgGBQQgCgDAAgEIAAhjQAAgDACgDQAEgDACAAQAEAAADADQACADAAADIAABjQAAAEgCADQgDACgEAAQgCAAgEgCgAgIg9QgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_6.setTransform(175.1,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#767676").s().p("AAxBOQgCgDAAgEIAAhBIhdAAIAABBQAAAEgDADQgDADgEAAQgEAAgDgDQgCgDgBgEIAAiNQABgEACgDQADgDAEAAQAEAAADADQADADAAAEIAAA8IBdAAIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADABAEIAACNQgBAEgCADQgDADgEAAQgEAAgEgDg");
	this.shape_7.setTransform(163.9,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text_hel1, new cjs.Rectangle(0,0,400,28), null);


(lib.Emoji = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhUBVQgjgjAAgyQAAgxAjgjQAjgjAxAAQAyAAAjAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjgAhFABQgIACgDAIQgFAGADAJQAJAbAWAQQAXASAcgBQAcABAXgSQAYgQAIgbQADgJgEgGQgEgIgIgCQgJgCgGADQgIAEgCAIQgFAOgMAKQgNAJgPAAQgPAAgMgJQgNgKgEgOQgCgIgHgEQgFgCgFAAIgGABgAAdhCQgJAJAAANQAAAMAJAJQAIAJANAAQAMAAAJgJQAJgJAAgMQAAgNgJgJQgJgIgMAAQgNAAgIAIgAhGhCQgJAJAAANQAAAMAJAJQAJAJAMAAQANAAAIgJQAJgJAAgMQAAgNgJgJQgIgIgNAAQgMAAgJAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Emoji, new cjs.Rectangle(-12,-12,24,24), null);


(lib.Subtitles_hel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Text1
	this.instance = new lib.Text_hel1();
	this.instance.parent = this;
	this.instance.setTransform(200,27,1,1,0,0,0,200,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,28);


// stage content:
(lib.hello = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		init("standby");
		//query_field.val("");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Subtitles
	this.instance = new lib.Subtitles_hel();
	Subtitles = this.instance;
	this.instance.parent = this;
	this.instance.setTransform(200,354.1,1,1,0,0,0,200,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Emoji
	this.instance_1 = new lib.Emoji();
	this.instance_1.parent = this;
	this.instance_1.setTransform(267.1,115.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1,scaleY:1},0).wait(96));

	// Bubble
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,0,1).p("ACGggQAAgwghgiQgighgwAAQgvAAgiAhQghAiAAAwQAAAuAiAjQgUAzg0AUQAbAWAgAFQArAGAkgVQAlgUARgmQAigMAUgdQAVgeAAgjg");
	this.shape.setTransform(263.4,130);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKCTQgggFgbgWQA0gUAUgzQgigjAAguQAAgwAhgiQAighAvAAQAwAAAiAhQAhAiAAAwQAAAjgVAeQgUAdgiAMQgRAmglAUQgbAQggAAQgKAAgKgBg");
	this.shape_1.setTransform(263.4,130);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,0,1).p("ACZggQAAhAgtgtQgsgthAAAQg+AAgtAtQgtAtAABAQAAAnATAiQASAhAgAVQgWAugvASQAbAVAgAFQAqAGAlgUQAkgTASglQAxgNAggpQAggpAAg0g");
	this.shape_2.setTransform(265.5,126.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhdC5QgggFgbgVQAvgSAWguQgggVgSghQgTgiAAgnQAAhAAtgtQAtgtA+AAQBAAAAsAtQAtAtAABAQAAA0ggApQggApgxANQgSAlgkATQgcAQggAAIgTgCg");
	this.shape_3.setTransform(265.5,126.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,0,1).p("ADAggQAAhPg4g4Qg5g5hPAAQhPAAg4A5Qg4A4AABPQAAAwAXArQAXApAnAbQgUAyg0AUQAaAWAiAFQAoAGAkgTQAjgSASgjQBMgEA0g3QA1g4AAhLg");
	this.shape_4.setTransform(267.6,122.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah2DgQgigFgagWQA0gUAUgyQgngbgXgpQgXgrAAgwQAAhPA4g4QA4g5BPAAQBPAAA5A5QA4A4AABPQAABLg1A4Qg0A3hMAEQgSAjgjASQgbAOgeAAIgTgBg");
	this.shape_5.setTransform(267.6,122.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,0,1).p("ADmggQAAhfhDhEQhEhDhfAAQheAAhEBDQhDBEAABfQAABAAhA3QAhA1A4AeQgWAvgwASQAZAWAiAFQAoAGAkgTQAjgSATgjQBbgEBAhDQA/hCAAhbg");
	this.shape_6.setTransform(267.6,119.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah2EGQghgFgbgWQAxgSAWgvQg4geghg1Qghg3AAhAQAAhfBEhEQBDhDBeAAQBfAABDBDQBEBEAABfQAABbhABCQg/BDhcAEQgSAjgjASQgbAOgeAAIgTgBg");
	this.shape_7.setTransform(267.6,119.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,0,1).p("AAAkVQhqAAhMBMQhMBMAABrQAABIAmA9QAkA8A+AiQgWAcgiANQAbAVAhAFQAfAFAdgKQAcgKAVgWQADABAGAAQBrAABMhMQBMhMAAhqQAAhrhMhMQhMhMhrAAg");
	this.shape_8.setTransform(267.4,117.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah2EUQghgFgbgVQAigNAWgcQg+gigkg8Qgmg9AAhIQAAhrBMhMQBMhMBqAAQBrAABMBMQBMBMAABrQAABqhMBMQhMBMhrAAIgJgBQgVAWgcAKQgUAHgVAAIgTgCg");
	this.shape_9.setTransform(267.4,117.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},19).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(96));

	// Pedrobot
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQAFAMgIAFQgEACgDgDQgFgEgCgFQgFgMAIgFQAEgCAEADQAEAEACAFg");
	this.shape_10.setTransform(154.5,190.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQADAFgBAGQgBAFgEABQgEACgDgDQgFgEgCgFQgFgMAIgFQAEgCAEADQAEAEACAFg");
	this.shape_11.setTransform(158.1,193.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQADAFgBAFQgCAFgDACQgEABgEgDQgEgDgCgFQgDgFABgFQABgFAEgCQAEgCADADQAFADACAGg");
	this.shape_12.setTransform(161.8,196.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQADAFgBAFQgCAFgDACQgEABgDgDQgFgDgCgFQgCgFABgFQABgFADgCQAEgCAEADQAEADACAGg");
	this.shape_13.setTransform(165.5,199.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,0,1).p("ABkBLIjHiV");
	this.shape_14.setTransform(160,189.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,0,1).p("AAehjQAZAdAAAmQAAAqgfAeQgdAegrAAQgXAAgTgJQAfAkAvAAQAqAAAegeQAfgeAAgqQAAgfgRgaQgQgZgcgMg");
	this.shape_15.setTransform(199.8,180.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhaA/QAUAJAXAAQAqAAAegeQAegfAAgqQAAgmgZgdQAcAMAQAaQARAZAAAfQAAAqgeAfQgeAegqAAQgwAAgfgkg");
	this.shape_16.setTransform(199.8,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,0,1).p("Ag/AOQAAg+AtgtQArgtBAAAIAVACQgggPgiAAQg/AAgsAtQgtAsAAA/QAAA6AmArQAmArA3AHQgmgSgYglQgYgmAAgtg");
	this.shape_17.setTransform(189.7,178.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhGBmQgmgrAAg6QgBg/AugsQAsgtA/AAQAiAAAfAPIgUgCQhAAAgrAtQguAtABA+QAAAtAXAmQAYAlAmASQg2gHgmgrg");
	this.shape_18.setTransform(189.7,178.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,0,1).p("ABnAAQAAArgeAfQgeAegrAAQgqAAgegeQgfgfAAgrQAAgqAfgeQAegfAqAAQArAAAeAfQAeAeAAAqg");
	this.shape_19.setTransform(198.6,179.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhIBJQgfgeABgrQgBgpAfgfQAegfAqABQArgBAeAfQAeAfAAApQAAArgeAeQgeAfgrAAQgqAAgegfg");
	this.shape_20.setTransform(198.6,179.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,0,1).p("ABsBtQgtAsg/AAQg/AAgsgtQgtgsAAhAQAAg/AtgsQAsgtA/AAQA/AAAtAtQAtAsAAA/QAAA/gtAug");
	this.shape_21.setTransform(198.6,179.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhrBsQgtgtAAg/QAAg/AtgsQAsgtA/AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg/AAgsgtg");
	this.shape_22.setTransform(198.6,179.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,0,1).p("AAehjQAZAdAAAmQAAAqgfAeQgdAegrAAQgXAAgTgJQAfAkAvAAQAqAAAegeQAfgeAAgqQAAgfgRgaQgQgZgcgMg");
	this.shape_23.setTransform(234.8,180.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhaA/QAUAJAWAAQArAAAegeQAegfAAgqQAAgmgZgdQAbAMARAaQARAZAAAfQAAAqgeAfQgfAegpAAQgwAAgfgkg");
	this.shape_24.setTransform(234.8,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,0,1).p("Ag/AOQAAg+AtgtQArgtBAAAIAVACQgggPgiAAQg/AAgsAtQgtAsAAA/QAAA6AmArQAmArA3AHQgmgSgYglQgYgmAAgtg");
	this.shape_25.setTransform(224.7,178.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhGBmQgngrAAg6QAAg/AtgsQAtgtA/AAQAiAAAgAPIgVgCQhAAAgsAtQgtAtAAA+QAAAtAYAmQAYAlAmASQg3gHglgrg");
	this.shape_26.setTransform(224.7,178.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,0,1).p("ABnAAQAAArgeAfQgeAegrAAQgqAAgegeQgfgfAAgrQAAgqAfgeQAegfAqAAQArAAAeAfQAeAeAAAqg");
	this.shape_27.setTransform(233.6,179.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhIBJQgfgeAAgrQAAgpAfgfQAegfAqABQArgBAeAfQAeAfAAApQAAArgeAeQgeAfgrAAQgqAAgegfg");
	this.shape_28.setTransform(233.6,179.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,0,1).p("ACZAAQAABAgtAsQgtAtg/AAQg/AAgsgtQgtgsAAhAQAAg/AtgsQAsgtA/AAQA/AAAtAtQAtAsAAA/g");
	this.shape_29.setTransform(233.6,179.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_30.setTransform(233.6,179.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,0,1).p("AmPHHIAAqTQAAhjBGhHQBHhGBjAAIE/AAQBjAABGBGQBHBHAABj");
	this.shape_31.setTransform(210,199.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(4,0,1).p("AH0INIsgAAIjHiWIAAqUQAAhjBGhGQBGhGBjAAIFYAAQBPAABAAuICuB9QAvAuAaA9QAaA9AABCg");
	this.shape_32.setTransform(200,192.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AksINIjHiWIAAqUQAAhjBGhGQBGhGBjAAIFYAAQBPAAA/AvICvB9QAvAtAaA9QAaA9AABCIAAKEg");
	this.shape_33.setTransform(200,192.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("ABWCGQgQgFgPgKIiWhyQgVgOAAgaIAAhGQAAgNAHgHQAGgJAMAAQAQAAAVAPICWBxQAVAPAAAaIAABMQAAAKgHAHQgHAHgKAAgAhMgjQAAAGAFADICUBuIAAgxQAAgFgFgEIiUhvg");
	this.shape_34.setTransform(161.7,246.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ABWCGQgQgFgPgLIiWhxQgVgOAAgaIAAhHQAAgVAQgGQASgGAcAUICWBxQAVAPAAAaIAABMQAAAMgKAHQgGAFgIAAIgHgBg");
	this.shape_35.setTransform(161.7,246.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgyCUQgjAAgbgUIiXhyQgVgOAAgaIAAhGQAAgVAPgPQAOgPAWAAIEbAAQAkAAAbAVICYBxQAUAPAAAZIAABNQAAASgNANQgNANgSAAg");
	this.shape_36.setTransform(178.5,245.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgyCUQgiAAgbgUIiZhyQgUgOAAgaIAAhGQAAgVAPgPQAPgPAVAAIEbAAQAlAAAaAVICYBxQAUAOAAAaIAABNQAAASgMANQgOANgSAAg");
	this.shape_37.setTransform(220.4,245.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,338,400,217.1);
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
