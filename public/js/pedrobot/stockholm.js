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


(lib.Text_sto2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#767676").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape.setTransform(262.6,45.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#767676").s().p("AgaA5QgCgDAAgDIAAhjQAAgEACgDQADgCAEAAQADAAAEACQACADAAAEIAAALQAFgIAGgFQAHgFAHgCIAFgBQAFAAABADQADABAAAFQAAACgDADQgDADgEAAQgIABgJAFQgIAFgEAIIAABJQAAADgCADQgEACgDABQgEgBgDgCg");
	this.shape_1.setTransform(256.7,41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgMQgEgKAAgOQAAgMAEgLQAEgKAIgJQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAHAEALQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngGIgDgOQgCgGgFgGQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAHIBMAAIAAAAg");
	this.shape_2.setTransform(245.2,41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#767676").s().p("AAhBOQgDgCAAgEIAAhEQAAgHgCgFQgBgFgEgDQgDgDgFgBQgFgCgGAAQgJAAgKAFQgJAGgFAIIAABLQAAAEgDACQgDADgDAAQgEAAgDgDQgCgCAAgEIAAiPQAAgDACgDQADgDAEAAQADAAADADQADADAAADIAAA1QAHgIAKgFIAMgFQAFgCAGAAQAJAAAHACQAHACAFAFQAFAFACAHQACAGAAAKIAABJQAAAEgCACQgDADgEAAQgEAAgCgDg");
	this.shape_3.setTransform(231.9,39);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#767676").s().p("AABBKQgDgCgEgDQgDgEgCgFQgBgFAAgHIAAhKIgMAAQgEAAgCgDQgCgCAAgDQAAgDACgDQACgCAEAAIAMAAIAAgYQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIAAAYIAQAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAIgQAAIAABHQAAAGADAEQADAFAGAAQAFAAAEgDQAHAAAAAIQAAAFgEACQgHAEgKAAQgGAAgFgCg");
	this.shape_4.setTransform(221.7,39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#767676").s().p("AgWA6QgHgCgFgFQgHgFgDgHQgDgHgBgKQABgJADgIQADgGAHgEQAFgFAHgDQAIgCAHAAQALABAJADQAKAEAHAHIAAgUQAAgGgCgEQgCgFgEgDQgEgDgFgBQgFgCgHAAQgHAAgIACQgIAEgGAFIgFACQgHAAAAgIQAAgDADgCQAJgJAKgDQAKgEALAAQAKAAAIACQAIACAHAFQAGAFADAHQADAIAAAKIAABHQAAAEgCACQgDADgDAAQgEAAgDgDQgCgCgBgEIAAgFQgHAHgJAFQgKAEgLAAQgHAAgIgDgAgMAAQgFABgEADQgEAEgCAEQgCAFAAAFQAAAGACAFQACAFAEADIAJAFQAFACAGAAQAKAAAHgDQAKgFAEgHIAAgWQgEgGgKgEQgHgDgKAAQgGAAgFACg");
	this.shape_5.setTransform(211.6,41.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgMQgEgKAAgOQAAgMAEgLQAEgKAIgJQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAHAEALQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngGIgDgOQgCgGgFgGQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAHIBMAAIAAAAg");
	this.shape_6.setTransform(198.9,41.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#767676").s().p("AAcAyIgchUIgbBUQgCAJgJAAQgEAAgEgDQgCgBgBgFIgghgIAAgDQAAgEACgDQADgCADAAQAIAAABAHIAbBWIAchWQACgHAHAAQAHAAADAHIAcBWIAbhWQACgHAGAAQAEAAADACQACADAAAEIAAADIgfBgQgBAFgEABQgDADgEAAQgJAAgCgJg");
	this.shape_7.setTransform(183.3,41.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgMQgEgKAAgOQAAgMAEgLQAEgKAIgJQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAHAEALQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngGIgDgOQgCgGgFgGQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAHIBMAAIAAAAg");
	this.shape_8.setTransform(161.6,41.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#767676").s().p("AAhBOQgDgCAAgEIAAhEQAAgHgCgFQgBgFgEgDQgDgDgFgBQgFgCgGAAQgJAAgKAFQgJAGgFAIIAABLQAAAEgDACQgDADgDAAQgEAAgDgDQgCgCAAgEIAAiPQAAgDACgDQADgDAEAAQADAAADADQADADAAADIAAA1QAHgIAKgFIAMgFQAFgCAGAAQAJAAAHACQAHACAFAFQAFAFACAHQACAGAAAKIAABJQAAAEgCACQgDADgEAAQgEAAgCgDg");
	this.shape_9.setTransform(148.3,39);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#767676").s().p("AABBKQgDgCgEgDQgDgEgCgFQgBgFAAgHIAAhKIgMAAQgEAAgCgDQgCgCAAgDQAAgDACgDQACgCAEAAIAMAAIAAgYQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIAAAYIAQAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAIgQAAIAABHQAAAGADAEQADAFAGAAQAFAAAEgDQAHAAAAAIQAAAFgEACQgHAEgKAAQgGAAgFgCg");
	this.shape_10.setTransform(138.1,39.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgLQgEgMAAgNQAAgLAEgMQAEgLAIgIQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAIAEAKQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngHIgDgMQgCgIgFgFQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAGIBMAAIAAAAg");
	this.shape_11.setTransform(302.7,15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#767676").s().p("AAgBOIgpgyIgUATIAAAZQAAADgDADQgDADgDAAQgDAAgDgDQgDgDAAgDIAAiPQAAgDADgDQADgDADAAQADAAADADQADADAAADIAABhIA+g7QACgDADAAQAEAAACADQADACgBADQABAEgDACIgqAnIAsAxQACACAAAEQAAADgCADQgDADgEAAQgFAAgCgDg");
	this.shape_12.setTransform(290.2,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#767676").s().p("AgFBQQgDgDAAgEIAAhjQAAgDADgDQADgDACAAQADAAADADQADADAAADIAABjQAAAEgDADQgDACgDAAQgCAAgDgCgAgHg9QgEgDAAgFQAAgFAEgEQADgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_13.setTransform(280.9,12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#767676").s().p("AgFBOQgDgDAAgDIAAiPQAAgDADgDQADgDACAAQADAAADADQADADAAADIAACPQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_14.setTransform(275.5,13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#767676").s().p("AgGBOQgDgDAAgEIAAiNQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAACNQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_15.setTransform(263.8,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgLQgEgMAAgNQAAgLAEgMQAEgLAIgIQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAIAEAKQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngHIgDgMQgCgIgFgFQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAGIBMAAIAAAAg");
	this.shape_16.setTransform(248.1,15.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#767676").s().p("AgWA5QgLgDgIgHQgDgCAAgEQAAgDACgDQACgCAEAAIAEABQAHAGAIADQAJADAIAAQAHAAAFgBIAJgEQAHgGAAgIQAAgEgDgEQgCgDgFgDQgFgDgOgDQgVgGgIgDQgGgEgDgGQgEgGAAgIQAAgHADgGQADgHAFgEQAGgFAIgCQAIgDAKAAQALAAAKAEQAJADAHAGQADACAAAEQAAADgCADQgCABgDAAIgEgBQgGgFgHgCQgIgDgIAAQgMAAgHAEQgHAGAAAIQAAADADADIAGAFQAFADAOAEIAPAEQAIADAGACQAHAEADAGQAEAHAAAJQAAAHgDAGQgDAHgGAEQgFAGgJACQgJADgKAAQgMAAgKgEg");
	this.shape_17.setTransform(235.7,15.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#767676").s().p("AgaA5QgHgCgFgEQgFgFgCgHQgCgGAAgKIAAhJQAAgDACgDQADgDAEAAQADAAADADQADADAAADIAABEQAAAHACAFQABAFAEADQADADAFACQAFABAGAAQAJAAAKgGQAJgFAFgGIAAhNQAAgDADgDQACgDAEAAQAEAAACADQADADAAADIAABjQAAADgDADQgCADgEAAQgEAAgCgDQgDgDAAgDIAAgIQgHAIgKAFQgOAGgJAAQgJAAgHgDg");
	this.shape_18.setTransform(223.6,15.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#767676").s().p("AgWA6QgHgCgFgFQgHgFgDgHQgEgIAAgJQAAgJAEgIQADgGAHgFQAFgEAHgDQAIgCAHAAQALABAJADQALAEAGAHIAAgTQABgHgDgEQgCgEgEgEQgEgDgFgBQgGgCgGAAQgHAAgIACQgIAEgGAFIgFACQgHAAAAgIQAAgEADgBQAJgJAKgDQAKgEALAAQAKAAAIACQAIACAHAFQAFAFAEAHQADAIAAAKIAABHQABADgDADQgDADgEAAQgDAAgDgDQgCgDgBgDIAAgFQgHAHgJAFQgKAEgLAAQgHAAgIgDgAgMAAQgFABgEADQgEAEgCAEQgCAFAAAFQAAAGACAFQACAEAEAEIAJAFQAFACAHAAQAIAAAJgDQAIgFAFgGIAAgXQgFgGgIgEQgJgCgIAAQgHAAgFABg");
	this.shape_19.setTransform(210.4,15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#767676").s().p("AgOA4QgKgFgIgHQgIgJgEgLQgEgLAAgNQAAgMAEgLQAEgLAIgIQAIgJAKgEQALgFAMAAQAMAAAJAEQAJADAHAIQADACAAADQAAAJgIAAQgEAAgCgDQgFgFgHgDQgGgCgHAAQgJAAgHADQgHAEgFAGQgGAGgCAIQgDAJAAAIQAAAKADAIQACAIAGAGQAFAGAHADQAHAEAJAAQAHAAAGgCQAHgDAFgFQACgCAEgBQAIABAAAHQAAAFgDABQgHAHgJAEQgJAEgMAAQgMAAgLgFg");
	this.shape_20.setTransform(198.5,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgLQgEgMAAgNQAAgLAEgMQAEgLAIgIQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAIAEAKQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngHIgDgMQgCgIgFgFQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAGIBMAAIAAAAg");
	this.shape_21.setTransform(185.8,15.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#767676").s().p("AgIBQIgLgEQgJgFgHgJIAAAJQAAADgDADQgDADgDAAQgEAAgDgDQgCgDAAgDIAAiPQAAgDACgDQADgDAEAAQADAAADADQADADAAADIAAA2QAHgKAKgFQAKgGALAAQALAAAKAFQAJAEAHAIQAHAIAEALQADAKAAAOQAAAOgDAMQgEAKgHAJQgHAHgJAEQgKAFgLAAQgFAAgGgCgAgVgRQgJAFgFAIIAAA0QAFAHAJAFQAKAGAKAAQAIAAAHgEQAHgDAFgGQAFgGACgIQADgIAAgKQAAgKgDgHQgCgIgFgGQgFgGgHgEQgHgDgIAAQgKAAgKAGg");
	this.shape_22.setTransform(172.4,13.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#767676").s().p("AgnBRQgHgBgBgGQABgDADgDQACgCADAAIAFAAQAFAAAFgDQAEgDADgGIAHgSIgrhoIgBgEQAAgDADgDQACgDAEAAQAGAAACAGIAkBZIAlhZQABgGAHAAQADAAADADQADADAAADIgBAEIg1B/QgCAGgDAEIgIAIQgIAFgMAAg");
	this.shape_23.setTransform(153.2,17.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#767676").s().p("AgGBOQgCgDAAgDIAAiPQAAgDACgDQADgDADAAQAEAAADADQACADAAADIAACPQAAADgCADQgDADgEAAQgDAAgDgDg");
	this.shape_24.setTransform(144.6,13);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#767676").s().p("AABBKQgDgCgEgDQgDgEgCgFQgBgFAAgHIAAhKIgMAAQgEAAgCgDQgCgCAAgDQAAgDACgDQACgCAEAAIAMAAIAAgYQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIAAAYIAQAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAIgQAAIAABHQAAAGADAEQADAFAGAAQAFAAAEgDQAHAAAAAIQAAAFgEACQgHAEgKAAQgGAAgFgCg");
	this.shape_25.setTransform(138.3,13.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#767676").s().p("AgWA5QgLgDgIgHQgDgCAAgEQAAgDACgDQACgCAEAAIAEABQAHAGAIADQAJADAIAAQAHAAAFgBIAJgEQAHgGAAgIQAAgEgDgEQgCgDgFgDQgFgDgOgDQgVgGgIgDQgGgEgDgGQgEgGAAgIQAAgHADgGQADgHAFgEQAGgFAIgCQAIgDAKAAQALAAAKAEQAJADAHAGQADACAAAEQAAADgCADQgCABgDAAIgEgBQgGgFgHgCQgIgDgIAAQgMAAgHAEQgHAGAAAIQAAADADADIAGAFQAFADAOAEIAPAEQAIADAGACQAHAEADAGQAEAHAAAJQAAAHgDAGQgDAHgGAEQgFAGgJACQgJADgKAAQgMAAgKgEg");
	this.shape_26.setTransform(129.2,15.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#767676").s().p("AgXA4QgKgFgIgIQgIgJgEgLQgDgKAAgNQAAgLADgMQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEAMAAALQAAANgEAKQgEALgHAJQgIAIgKAFQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_27.setTransform(116.9,15.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#767676").s().p("AA9BOQgDgDAAgEIAAh7Ig1CBQgBAEgEAAQgDAAgCgEIg1iBIAAB7QAAAEgDADQgCADgEAAQgFAAgDgDQgCgDAAgEIAAiHQAAgGAEgFQAFgFAHAAQAGAAAEADQAEACACAGIAtBvIAuhvQACgGAEgCQAEgDAFAAQAHAAAFAFQAFAFAAAGIAACHQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_28.setTransform(100.3,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text_sto2, new cjs.Rectangle(0,0,400,54), null);


(lib.Text_sto1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#767676").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape.setTransform(273.8,45.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#767676").s().p("AgXA4QgKgEgIgJQgIgJgEgLQgDgKAAgNQAAgMADgLQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEALAAAMQAAANgEAKQgEALgHAJQgIAJgKAEQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_1.setTransform(264.2,41.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#767676").s().p("AgXBQQgKgCgJgIQgDgDAAgEQAAgDACgCQACgDAEAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQAHAFAIACQAIADAKAAQAGAAAHgBQAHgDAFgDQAFgFADgGQADgHAAgJIAAgRQgHAJgKAGQgOAFgHAAQgLAAgKgDQgJgFgHgHQgHgJgEgLQgDgKAAgNQAAgOADgLQAEgMAHgHQAHgIAJgFQAKgEALAAQALAAAKAGQAKAFAHAKIAAgKQAAgEADgDQACgCAEAAQAEAAACACQADADAAAEIAABoQAAAOgFAJQgEAKgIAGQgHAGgLACQgJADgKAAQgOAAgJgDgAgNg/QgHAEgFAGQgFAFgCAJQgDAIAAAKQAAAJADAIQACAHAFAGQAFAGAHADQAHADAHABQALAAAKgGQAJgFAFgJIAAgxQgFgIgJgFQgKgGgLAAQgHAAgHADg");
	this.shape_2.setTransform(250.2,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#767676").s().p("AgWA6QgHgCgFgFQgGgFgEgHQgEgHAAgKQAAgJAEgIQAEgGAGgEQAFgFAHgDQAIgCAHAAQALABAJADQALAEAGAHIAAgUQABgGgDgEQgCgFgEgDQgDgDgGgBQgGgCgGAAQgIAAgHACQgHAEgHAFIgFACQgHAAAAgIQAAgDADgCQAIgJALgDQAKgEALAAQAKAAAIACQAIACAHAFQAFAFAEAHQAEAIgBAKIAABHQABAEgDACQgDADgEAAQgEAAgCgDQgCgCgBgEIAAgFQgGAHgKAFQgKAEgLAAQgHAAgIgDgAgMAAQgFABgEADQgEAEgCAEQgCAFAAAFQAAAGACAFQACAFAEADIAJAFQAFACAHAAQAIAAAJgDQAIgFAFgHIAAgWQgFgGgIgEQgJgDgIAAQgHAAgFACg");
	this.shape_3.setTransform(237,41.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#767676").s().p("AgWA5QgLgDgIgHQgDgCAAgEQAAgDACgDQACgCAEAAIAEABQAHAFAIAEQAJADAIABQAHgBAFgBIAJgEQAHgGAAgIQAAgEgDgEQgCgDgFgDQgFgDgOgEQgVgFgIgDQgGgEgDgGQgEgGAAgIQAAgHADgGQADgHAFgEQAGgFAIgCQAIgDAKAAQALAAAKAEQAJADAHAGQADACAAAEQAAADgCADQgCACgDAAIgEgCQgGgFgHgCQgIgDgIAAQgMAAgHAEQgHAFAAAJQAAADADADIAGAGQAFADAOADIAPAEQAIADAGACQAHAEADAGQAEAHAAAJQAAAHgDAGQgDAHgGAEQgFAFgJADQgJADgKAAQgMAAgKgEg");
	this.shape_4.setTransform(219.2,41.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#767676").s().p("AgaA5QgCgDAAgDIAAhjQAAgEACgDQADgCAEAAQAEAAADACQACADAAAEIAAALQAGgIAFgFQAHgFAHgCIAGgBQADAAACADQADABAAAFQAAACgDADQgDADgEAAQgIABgJAFQgIAFgEAIIAABJQAAADgCADQgDACgEABQgEgBgDgCg");
	this.shape_5.setTransform(210.5,41.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#767676").s().p("AgWA6QgHgCgFgFQgGgFgEgHQgEgHAAgKQAAgJAEgIQAEgGAGgEQAFgFAHgDQAIgCAHAAQALABAJADQALAEAGAHIAAgUQABgGgDgEQgCgFgEgDQgDgDgGgBQgGgCgGAAQgIAAgHACQgHAEgHAFIgFACQgHAAAAgIQAAgDADgCQAIgJALgDQAKgEALAAQAKAAAIACQAIACAHAFQAFAFAEAHQAEAIgBAKIAABHQABAEgDACQgDADgEAAQgEAAgCgDQgCgCgBgEIAAgFQgGAHgKAFQgKAEgLAAQgHAAgIgDgAgMAAQgFABgEADQgEAEgCAEQgCAFAAAFQAAAGACAFQACAFAEADIAJAFQAFACAHAAQAIAAAJgDQAIgFAFgHIAAgWQgFgGgIgEQgJgDgIAAQgHAAgFACg");
	this.shape_6.setTransform(199.2,41.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgMQgEgKAAgOQAAgMAEgLQAEgKAIgJQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAHAEALQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngGIgDgOQgCgGgFgGQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAHIBMAAIAAAAg");
	this.shape_7.setTransform(186.5,41.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#767676").s().p("AgmBRQgJAAABgIQAAgCACgDQADgCAEAAIADAAQAHAAADgDQAFgDACgGIAIgSIgshoIAAgEQAAgEACgDQADgCADAAQAHAAACAGIAkBZIAkhZQADgGAFAAQAEAAAEACQACADAAAEIgBAEIg1B/QgCAGgEAEIgHAIQgJAFgMAAg");
	this.shape_8.setTransform(173.9,43.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#767676").s().p("AgXA4QgKgEgIgJQgIgJgEgLQgDgKAAgNQAAgMADgLQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEALAAAMQAAANgEAKQgEALgHAJQgIAJgKAEQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_9.setTransform(155,41.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#767676").s().p("AAcAyIgchUIgbBUQgCAJgJAAQgEAAgEgDQgCgBgBgFIgghgIgBgDQAAgEADgDQADgCADAAQAIAAABAHIAbBWIAchWQACgHAHAAQAHAAADAHIAcBWIAbhWQACgHAGAAQAEAAADACQACADAAAEIAAADIgfBgQgBAFgEABQgDADgEAAQgJAAgCgJg");
	this.shape_10.setTransform(139.3,41.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#767676").s().p("AABBKQgDgCgEgDQgDgEgCgFQgBgFAAgHIAAhKIgMAAQgEAAgCgDQgCgCAAgDQAAgDACgDQACgCAEAAIAMAAIAAgYQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIAAAYIAQAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAIgQAAIAABHQAAAGADAEQADAFAGAAQAFAAAEgDQAHAAAAAIQAAAFgEACQgHAEgKAAQgGAAgFgCg");
	this.shape_11.setTransform(126.9,39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#767676").s().p("AABBKQgDgCgEgDQgDgEgCgFQgBgFAAgHIAAhKIgMAAQgEAAgCgDQgCgCAAgDQAAgDACgDQACgCAEAAIAMAAIAAgYQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIAAAYIAQAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAIgQAAIAABHQAAAGADAEQADAFAGAAQAFAAAEgDQAHAAAAAIQAAAFgEACQgHAEgKAAQgGAAgFgCg");
	this.shape_12.setTransform(347.9,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#767676").s().p("AgWA5QgLgDgIgHQgDgCAAgEQAAgDACgDQACgCAEAAIAEABQAHAGAIADQAJADAIAAQAHAAAFgBIAJgEQAHgGAAgIQAAgEgDgEQgCgDgFgDQgFgDgOgDQgVgGgIgDQgGgEgDgGQgEgGAAgIQAAgHADgGQADgHAFgEQAGgFAIgCQAIgDAKAAQALAAAKAEQAJADAHAGQADACAAAEQAAADgCADQgCABgDAAIgEgBQgGgFgHgCQgIgDgIAAQgMAAgHAEQgHAGAAAIQAAADADADIAGAFQAFADAOAEIAPAEQAIADAGACQAHAEADAGQAEAHAAAJQAAAHgDAGQgDAHgGAEQgFAGgJACQgJADgKAAQgMAAgKgEg");
	this.shape_13.setTransform(338.8,15.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#767676").s().p("AgXA4QgKgFgIgIQgIgJgEgLQgDgKAAgNQAAgLADgMQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEAMAAALQAAANgEAKQgEALgHAJQgIAIgKAFQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_14.setTransform(326.5,15.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#767676").s().p("AA/A5QgCgDAAgDIAAhFQAAgMgFgGQgDgDgEgCQgEgCgFAAQgJAAgJAFQgIAGgFAHIAABMQAAADgDADQgDADgDAAQgCAAgDgDQgDgDAAgDIAAhFQAAgMgFgGQgDgDgEgCQgEgCgGAAQgIAAgJAFQgIAGgFAIIAABLQAAADgDADQgDADgDAAQgDAAgDgDQgDgDAAgDIAAhjQAAgDADgDQADgDADAAQADAAADADQADADAAADIAAAJQAEgHAKgFQAFgEAGgCQAGgCAHAAQAGAAAFACQAFACAEADQAHAFACAKQAGgJAKgGIALgFQAHgCAGAAQAIAAAFACQAHACADAFQAFAEACAHQACAGAAAJIAABLQAAADgDADQgDADgDAAQgEAAgDgDg");
	this.shape_15.setTransform(310,15.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#767676").s().p("AgFBOQgDgDAAgDIAAiPQAAgDADgDQADgDACAAQADAAADADQADADAAADIAACPQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_16.setTransform(297.6,13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#767676").s().p("AgVA6QgIgCgGgFQgFgFgEgHQgDgIAAgJQAAgJADgIQAEgGAFgFQAGgEAIgDQAGgCAIAAQALABAKADQAKAEAHAHIAAgTQAAgHgDgEQgCgEgEgEQgDgDgGgBQgGgCgGAAQgHAAgIACQgHAEgHAFIgFACQgHAAAAgIQAAgEADgBQAIgJALgDQAKgEAMAAQAJAAAIACQAJACAFAFQAHAFADAHQAEAIAAAKIAABHQAAADgDADQgDADgDAAQgEAAgDgDQgCgDAAgDIAAgFQgIAHgJAFQgKAEgLAAQgIAAgGgDgAgMAAQgFABgEADQgEAEgCAEQgCAFAAAFQAAAGACAFQACAEAEAEIAJAFQAGACAFAAQAKAAAHgDQAJgFAGgGIAAgXQgGgGgJgEQgHgCgKAAQgFAAgGABg");
	this.shape_17.setTransform(288.3,15.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#767676").s().p("AA/A5QgCgDAAgDIAAhFQAAgMgFgGQgDgDgEgCQgEgCgGAAQgIAAgJAFQgJAGgEAHIAABMQAAADgDADQgCADgEAAQgCAAgEgDQgCgDAAgDIAAhFQAAgMgFgGQgDgDgEgCQgEgCgFAAQgJAAgJAFQgIAGgFAIIAABLQAAADgCADQgDADgEAAQgDAAgDgDQgDgDAAgDIAAhjQAAgDADgDQADgDADAAQAEAAADADQACADAAADIAAAJQAEgHAKgFQAGgEAFgCQAGgCAGAAQAHAAAGACQAEACAFADQAGAFADAKQAFgJAKgGIAMgFQAFgCAGAAQAIAAAHACQAGACAEAFQAEAEACAHQACAGAAAJIAABLQAAADgDADQgCADgEAAQgEAAgDgDg");
	this.shape_18.setTransform(266.5,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#767676").s().p("AgFBOQgDgDAAgDIAAiPQAAgDADgDQADgDACAAQAEAAACADQADADAAADIAACPQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_19.setTransform(254.1,13);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#767676").s().p("AgXA4QgKgFgIgIQgIgJgEgLQgDgKAAgNQAAgLADgMQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEAMAAALQAAANgEAKQgEALgHAJQgIAIgKAFQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_20.setTransform(244.5,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#767676").s().p("AAhBOQgDgDAAgDIAAhEQAAgHgCgFQgBgFgEgDQgDgDgFgBQgFgCgGAAQgJAAgKAFQgJAGgFAIIAABLQAAADgDADQgDADgDAAQgEAAgDgDQgCgDAAgDIAAiPQAAgDACgDQADgDAEAAQADAAADADQADADAAADIAAA1QAHgIAKgFIAMgFQAFgCAGAAQAJAAAHACQAHACAFAFQAFAFACAHQACAGAAAKIAABJQAAADgCADQgDADgEAAQgEAAgCgDg");
	this.shape_21.setTransform(231.1,13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#767676").s().p("AAgBOIgpgyIgUATIAAAZQAAADgDADQgDADgDAAQgEAAgDgDQgCgDAAgDIAAiPQAAgDACgDQADgDAEAAQADAAADADQADADAAADIAABhIA+g7QACgDADAAQAEAAACADQADACgBADQABAEgDACIgqAnIAsAxQACACAAAEQAAADgDADQgCADgEAAQgEAAgDgDg");
	this.shape_22.setTransform(218.8,13);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#767676").s().p("AgOA4QgKgFgIgHQgIgJgEgLQgEgLAAgNQAAgMAEgLQAEgLAIgIQAIgJAKgEQALgFAMAAQAMAAAJAEQAJADAHAIQADACAAADQAAAJgIAAQgEAAgCgDQgFgFgHgDQgGgCgHAAQgJAAgHADQgHAEgFAGQgGAGgCAIQgDAJAAAIQAAAKADAIQACAIAGAGQAFAGAHADQAHAEAJAAQAHAAAGgCQAHgDAFgFQACgCAEgBQAIABAAAHQAAAFgDABQgHAHgJAEQgJAEgMAAQgMAAgLgFg");
	this.shape_23.setTransform(206.3,15.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#767676").s().p("AgXA4QgKgFgIgIQgIgJgEgLQgDgKAAgNQAAgLADgMQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEAMAAALQAAANgEAKQgEALgHAJQgIAIgKAFQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_24.setTransform(193.5,15.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#767676").s().p("AABBKQgDgCgEgDQgDgEgCgFQgBgFAAgHIAAhKIgMAAQgEAAgCgDQgCgCAAgDQAAgDACgDQACgCAEAAIAMAAIAAgYQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIAAAYIAQAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAIgQAAIAABHQAAAGADAEQADAFAGAAQAFAAAEgDQAHAAAAAIQAAAFgEACQgHAEgKAAQgGAAgFgCg");
	this.shape_25.setTransform(183,13.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#767676").s().p("AgPBRIgQgEIgMgGIgLgIQgEgDAAgEQAAgEADgDQADgDAEAAQADAAADACQAJAIAKAEIALAEIANABQAKAAAIgDQAGgCAFgEQAEgEADgFQABgFAAgFQAAgHgDgFQgDgEgGgEIgNgGIgOgEQgagHgLgFQgIgGgFgHQgEgIgBgLQAAgKAFgIQAEgJAHgFQAIgGAKgEQALgDALAAQAPAAAMAFQAMAEAKAIQAFACAAAFQAAAEgDADQgDADgEAAQgDAAgDgCQgIgHgKgEQgLgDgJAAQgIAAgHACQgFACgFADQgFADgCAFQgDAFABAFQAAAGACAFQADAEAGADQAHADATAGIAUAGQALAEAHADQAIAGAFAIQAFAJAAAMQAAAJgDAIQgDAIgHAHQgHAHgLAEQgNAEgPAAQgIAAgHgCg");
	this.shape_26.setTransform(172.6,13);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#767676").s().p("AgXA4QgKgFgIgIQgIgJgEgLQgDgKAAgNQAAgLADgMQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEAMAAALQAAANgEAKQgEALgHAJQgIAIgKAFQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_27.setTransform(152.5,15.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#767676").s().p("AABBKQgDgCgEgDQgDgEgCgFQgBgFAAgHIAAhKIgMAAQgEAAgCgDQgCgCAAgDQAAgDACgDQACgCAEAAIAMAAIAAgYQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIAAAYIAQAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAIgQAAIAABHQAAAGADAEQADAFAGAAQAFAAAEgDQAHAAAAAIQAAAFgEACQgHAEgKAAQgGAAgFgCg");
	this.shape_28.setTransform(142.1,13.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#767676").s().p("AgXBNQgJgEgHgHQgHgJgEgKQgDgMAAgOQAAgOADgKQAEgLAHgIQAHgIAJgEQAKgFALAAQALAAAKAGQAKAFAHAKIAAg2QAAgDADgDQACgDAEAAQAEAAADADQACADAAADIAACPQAAADgCADQgDADgEAAQgEAAgCgDQgDgDAAgDIAAgJQgGAJgKAFQgPAGgHAAQgLAAgKgFgAgNgUQgHAEgFAGQgFAGgCAIQgDAHAAAKQAAAKADAIQACAIAFAGQAFAGAHADQAHAEAHAAQALAAAKgGQAJgFAFgHIAAg0QgFgIgJgFQgKgGgLAAQgHAAgHADg");
	this.shape_29.setTransform(125.2,13.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgLQgEgMAAgNQAAgLAEgMQAEgLAIgIQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAIAEAKQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngHIgDgMQgCgIgFgFQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAGIBMAAIAAAAg");
	this.shape_30.setTransform(111.9,15.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#767676").s().p("AgHA4QgEgBgBgFIgohfIgBgEQAAgDACgDQADgDAEAAQAGAAACAGIAkBZIAlhZQABgGAHAAQADAAAEADQACADAAADIgBAEIgpBfQgBAFgDABQgEADgEAAQgDAAgEgDg");
	this.shape_31.setTransform(99.3,15.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#767676").s().p("AgXA4QgKgFgIgIQgIgJgEgLQgDgKAAgNQAAgLADgMQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEAMAAALQAAANgEAKQgEALgHAJQgIAIgKAFQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_32.setTransform(86.6,15.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#767676").s().p("ABAA5QgDgDAAgDIAAhFQAAgMgFgGQgDgDgEgCQgEgCgGAAQgIAAgJAFQgIAGgFAHIAABMQAAADgDADQgCADgEAAQgDAAgDgDQgCgDAAgDIAAhFQAAgMgFgGQgDgDgEgCQgEgCgGAAQgIAAgJAFQgIAGgFAIIAABLQAAADgCADQgDADgEAAQgDAAgEgDQgCgDAAgDIAAhjQAAgDACgDQAEgDADAAQAEAAADADQACADAAADIAAAJQAEgHAKgFQAGgEAFgCQAHgCAFAAQAHAAAGACQAEACAFADQAGAFADAKQAFgJAKgGIAMgFQAGgCAFAAQAJAAAGACQAFACAFAFQAEAEACAHQACAGAAAJIAABLQAAADgDADQgDADgDAAQgEAAgCgDg");
	this.shape_33.setTransform(70.1,15.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#767676").s().p("AgGBOQgDgDAAgEIAAiNQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAACNQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_34.setTransform(51.4,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text_sto1, new cjs.Rectangle(0,0,400,54), null);


(lib.Mesita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,1).p("ABIioICJCQIh1CRIgyAsIj8kb");
	this.shape.setTransform(10.5,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,0,1).p("ABtB7IjZj1");
	this.shape_1.setTransform(8.3,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,0,1).p("AkJAgIFdAAICyhA");
	this.shape_2.setTransform(-4.7,-16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,0,1).p("AgRglIAACtIiyBFIhEAAIAAkdIFdAAICyhAIAAg8IldAAIiyBAIAAA8");
	this.shape_3.setTransform(-4.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,0,1).p("AAACPIAAkd");
	this.shape_4.setTransform(-25.2,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ak4D1QgQAAgMgMQgLgLgBgRIAAlYQAAgNAHgLQAHgKAMgEICyhBQAGgCAIAAIFdAAQARAAAMAMQALALAAARIAAA8QAAAOgJALIBgBmQALALAAANQABAPgJAMIh1CSIg3AyQgMAKgPAAQgRAAgMgNIiPigIAABFQAAAMgHAKQgHALgLAFIizBEQgGADgIAAgAk4iLIAAFYIBEAAICyhFIAAisIDUDsIAzgsIB0iSIiIiPIAmgLIAAg8IldAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ak4DNIAAlYICyhBIFdAAIAAA8IgmALICICPIh0CSIgzAsIjUjtIAACtIiyBFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mesita, new cjs.Rectangle(-35.3,-24.5,70.7,49), null);


(lib.Llave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXBYQgKgCgJgEIighRQgPgHgFgRQgFgRAJgOIAKgRQAMgTAWAAQAKAAAIAEICaBPIA2gsQALgIAOAAQAQAAALAKIAPAOQAOANgBASQgBASgOALIhFA2QgPAMgTAAgAiKghICgBPQACACADgBIAfADIACABQAFAAAEgDIBFg2IgPgNIhFA2IgTgDIijhSg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6AzIgegDQgDAAgDgCIighPIAKgRICjBTIAUACIBEg2IAPAOIhFA1QgDADgFAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Llave, new cjs.Rectangle(-17.8,-9.1,35.7,18.2), null);


(lib.casco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("AAYAAIgYAYIgXgYIAXgXg");
	this.shape.setTransform(8.6,-6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAAIAXgXIAYAXIgYAYg");
	this.shape_1.setTransform(8.6,-6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2).p("AAYAAIgYAYIgXgYIAXgYg");
	this.shape_2.setTransform(9.5,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAAIAXgYIAYAYIgYAZg");
	this.shape_3.setTransform(9.5,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2).p("AAgAAIggAgIgfggIAfgfg");
	this.shape_4.setTransform(9.5,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_5.setTransform(9.5,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,0,1).p("AF8BZQAAgwgThDQgcAfgsATQgvAUhKAKQAAh/gYiUQgViGgghoQgvghgsgGQgxAIgyAkIACABQAhBqAWCGQAZCVABB/QhzgFhdgWQhpgaghglQgRBCAAAyQAAA8ByApQBpAmCQADIAFABIAnAAIADgBIAagBIgSDFIB0BIIBQhpIhNirQBogPA7gjQA7gjAAgxg");
	this.shape_6.setTransform(0,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnGrIASjFIgaABIgDABIgnAAIgFgBQiQgDhpgmQhygpAAg8QAAgyARhCQAhAlBpAaQBdAWBzAFQgBh/gZiVQgWiGghhqIgCgBQAygkAxgIQAsAGAvAhQAgBoAVCGQAYCUAAB/QBKgKAvgUQAsgTAcgfQATBDAAAwQAAAxg7AjQg7AjhoAPIBNCrIhQBpg");
	this.shape_7.setTransform(0,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,0,1).p("Agzj4IgZBgIAQgNQAQAuAXCZQAUCOABA0QAGAKAXAeIAwAAIhloXg");
	this.shape_8.setTransform(-4.6,-20.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAdEMQgXgegGgKQgBg0gUiOQgXiZgQgtIgQAMIAZhgIAbgTIBlIXg");
	this.shape_9.setTransform(-4.6,-20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,0,1).p("AAgAZQhcABhXgMQhigNg0gWQAFgbACgHQgNgBgcAIQgcAIgCAGQAlArB5AaQBtAXB+AAQB1gBBWgXQBYgYAngrQgCgGgcgJQgagJgNABIAGAiQg3AYhAALQhAAMhUAAg");
	this.shape_10.setTransform(-0.1,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjLAjQh5gaglgrQACgGAcgIQAcgIANABIgHAiQA0AWBiANQBXAMBcgBQBUAABAgMQBAgLA3gYIgGgiQANgBAaAJQAcAJACAGQgnArhYAYQhWAXh1ABIgGAAQh6AAhrgXg");
	this.shape_11.setTransform(-0.1,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,0,1).p("AAAkmQhyAUhlCvQhbCeAAB5QAAAzBgAhQBZAfB5gBQB5AABagfQBgghAAgyQAAh0hhikQhoiyhqgQg");
	this.shape_12.setTransform(0,-13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjSEIQhgghAAgzQAAh5BbidQBliwBygUQBqAQBoCyQBhCkAAB0QAAAyhgAhQhaAfh5AAIgDABQh3gBhYgeg");
	this.shape_13.setTransform(0,-13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#231F20").ss(2,0,1).p("AAdgDIg5AH");
	this.shape_14.setTransform(3,22.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,0,1).p("ABODMIgyAEIhphBIAileg");
	this.shape_15.setTransform(7.9,29.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhMCPIAhleIB4GbIgyAEg");
	this.shape_16.setTransform(7.9,29.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABqIdQgLAAgKgGIhohBQgJgGgGgKQgFgKABgMIAQiiQiVgFhsgnQiMgyAAhYQAAg3AThIQAHgdAxgNQAKgEAMgCQAXhLAnhJQAuhVA4g6IAThLIAAgFQABgTAQgMQA6goA6gKIAGgBIAGABQA1AHA3AnQALAIAEANQAMAnAMA1QA2A5AvBUQApBLAaBNQBFANAJAjQAVBJAAA2QAAA6g1AqQg1ArhiAVIA3B8QAKAWgOASIhOBoIgGAGQgLAMgRAAIguADgAlNgrQgbAIgCAGQgRBCAAAzQAAA8ByApQBpAlCQAEIAFAAIAgAAIgUDOIBpBBIAxgEIAAABIABgBIBPhpIhNirQBogPA7giQA7gjAAgxQAAgwgThEQgCgGgagJQgZgIgPAAIgBAAIACAQQgVhTgvhZQgzheg7g8QgLg2gOgtQgvghgsgHQgxAJgyAjIACACIgZBgQg5A4gvBXQgsBTgVBSIAAAAIgCAAQgOAAgaAHg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AABG0IAUjOIggAAIgFAAQiQgEhpglQhygpAAg8QAAgzARhCQACgGAcgIQAcgIANABIAAABQAVhTAshSQAvhYA5g4IAZhgIgCgCQAygjAxgJQAsAHAvAhQAOAtALA2QA7A8AzBeQAvBZAVBTIgCgQQANgBAaAJQAcAJACAGQATBEAAAwQAAAxg7AjQg7AihoAPIBNCrIhPBpIgBABIAAgBIgxAEgAEwAMIAAACQASgJAPgLQgPAKgSAIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.casco, new cjs.Rectangle(-42,-54,84.1,108.2), null);


(lib.Cajón = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("ABFAMQgIAAgUAFIgTAFQgWAEgWgEQgkgKgKAAIAAgjQAOAAAgAJQAWAFAWgFIATgEQAUgFAIAAg");
	this.shape.setTransform(10.4,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAWQgkgKgKAAIAAgjQAOAAAgAJQAWAFAWgFIATgEQAUgFAIAAIAAAjQgIAAgUAFIgTAFQgLACgLAAQgLAAgLgCg");
	this.shape_1.setTransform(10.4,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,0,1).p("AAAhPIAACf");
	this.shape_2.setTransform(-8.5,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,0,1).p("AEOAgIlmAAIiyhA");
	this.shape_3.setTransform(0.3,-8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhVCYQgHABgGgDIizhBQgMgEgHgLQgHgKAAgNIAAieQAAgRAMgLQALgMARgBIFdAAQAHABAGACICzBBQAMAEAHAKQAHALAAANIAACfQAAAQgLAMQgMALgRAAgAkHAvICyBCIFdAAIAAifIiyhBIldAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhVBwIiyhBIAAieIFdAAICyBBIAACfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cajón, new cjs.Rectangle(-30.4,-15.2,60.9,30.5), null);


(lib.Caja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAWQgEgBgBgCIgCgGIgWgDIgBADQgBAEgFgBQgEgCAAgEIAAgBIAOgbQACgEAGAAQAGACACAFIAPAhIABABQgBAEgDAAIgCgBgAgHACIAOADIgHgTg");
	this.shape.setTransform(4.2,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANAWIgYgEQgGgBAAgFIAAgeQAAgFAGABIAYAFQAFABAAAEQAAADgFgBIgTgDIAAAIIASAEQAFABAAADQAAADgFgBIgSgDIAAAJIATAEQAFABAAAEQAAABAAAAQgBABAAAAQAAAAgBABQgBAAAAAAIgCgBg");
	this.shape_1.setTransform(-0.4,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAVQgEgBAAgEIAAggQAAgEAEABQAFABAAAEIAAAgQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgCABIgCAAg");
	this.shape_2.setTransform(-3.7,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAXIgEgCIgPgSIgFADIAAAJQAAAEgEgBQgGgBAAgEIAAggQAAgEAGABQAEABAAAEIAAAOIATgOIADAAQAFABAAAEIgBACIgPAKIAQARQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABgBABQAAAAgBAAQgBAAAAAAIgCAAg");
	this.shape_3.setTransform(-7,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWgOIAtAJIAAATQgPgOgegOg");
	this.shape_4.setTransform(7.6,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAGIAAgUQARAPAcANg");
	this.shape_5.setTransform(-10.9,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWACQAdgCAQgJIAAATg");
	this.shape_6.setTransform(7.6,15.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWgJIAtAIQgdACgQAJg");
	this.shape_7.setTransform(-10.9,5.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,0,1).p("AAABBIAAiB");
	this.shape_8.setTransform(15.5,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,0,1).p("AhFAZICLgx");
	this.shape_9.setTransform(-45.4,-8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,0,1).p("AINABIlyCEIqmiHIAAiCIKmCHIFyiDg");
	this.shape_10.setTransform(0,6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,0,1).p("ACdBjIFug7IqmiKIlvA6g");
	this.shape_11.setTransform(0.2,-10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ACTDwIqniHQgNgDgKgLQgIgLgBgPIAAiAQAAgNAIgLQAHgKAMgEIAFgCQgNgEgHgLQgJgLABgOQABgOAJgLQAJgKAOgDIFvg6IAGgBIAJABIKlCMQAOACAJALQAKALAAAOIAACDQAAANgIAJQgHALgMAEIlyCEQgGACgHAAIgIgBgAoIiOICJAcIiNAzIAACAIKnCHIFxiCIAAiDIqmiKg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AoMBBIAAiAICNgzIiJgcIFug5IKmCKIAACDIlxCCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Caja, new cjs.Rectangle(-56.4,-24,112.9,48.1), null);


(lib.Subtitles_sto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// Lager 1
	this.instance = new lib.Text_sto1();
	this.instance.parent = this;
	this.instance.setTransform(200,27,1,1,0,0,0,200,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({alpha:0},5).to({_off:true},1).wait(120));

	// Lager 2
	this.instance_1 = new lib.Text_sto2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(200,27,1,1,0,0,0,200,27);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},5).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,54);


// stage content:
(lib.stockholm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_239 = function() {
		init("standby");
		//query_field.val("");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// Lager 7
	this.instance = new lib.Subtitles_sto();
	Subtitles = this.instance;
	this.instance.parent = this;
	this.instance.setTransform(200,354.1,1,1,0,0,0,200,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// Llave
	this.instance_1 = new lib.Llave();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.5,306.5,0.451,0.451);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({scaleX:1.39,scaleY:1.39},2).to({scaleX:1,scaleY:1},2).wait(177));

	// Mesita
	this.instance_2 = new lib.Mesita();
	this.instance_2.parent = this;
	this.instance_2.setTransform(306.5,245.5,0.463,0.463);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({scaleX:1.25,scaleY:1.25},2).to({scaleX:1,scaleY:1},2).wait(203));

	// Caja
	this.instance_3 = new lib.Caja();
	this.instance_3.parent = this;
	this.instance_3.setTransform(228.8,289.3,0.415,0.415);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({scaleX:1.18,scaleY:1.18},2).to({scaleX:1,scaleY:1},2).wait(207));

	// Cajón
	this.instance_4 = new lib.Cajón();
	this.instance_4.parent = this;
	this.instance_4.setTransform(119.6,269.5,0.475,0.475);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).to({scaleX:1.26,scaleY:1.26},2).to({scaleX:1,scaleY:1},2).wait(199));

	// Hjälm
	this.instance_5 = new lib.casco();
	this.instance_5.parent = this;
	this.instance_5.setTransform(201.5,108.5,0.477,0.477);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:200.6,y:112.5},2).to({scaleX:1,scaleY:1,x:201.5,y:136.5},2).wait(219));

	// Pedrobot
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQAFANgIAEQgEABgDgCQgFgDgCgGQgFgNAIgEQAEgBAEACQAEADACAGg");
	this.shape.setTransform(154.5,190.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQADAFgBAGQgBAFgEABQgEABgDgCQgFgDgCgGQgFgNAIgEQAEgBAEACQAEADACAGg");
	this.shape_1.setTransform(158.1,193.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQADAFgBAFQgCAFgDACQgEABgEgDQgEgDgCgFQgDgFABgFQABgFAEgCQAEgCADADQAFADACAGg");
	this.shape_2.setTransform(161.8,196.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQADAFgBAFQgCAFgDACQgEABgDgDQgFgDgCgFQgCgFABgFQABgFADgCQAEgCAEADQAEADACAGg");
	this.shape_3.setTransform(165.5,199.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,0,1).p("ABkBLIjHiV");
	this.shape_4.setTransform(160,189.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,0,1).p("AAehjQAZAdAAAmQAAAqgeAeQgdAegrAAQgXAAgUgJQAfAkAvAAQArAAAegeQAegeAAgqQAAgfgRgaQgQgZgcgMg");
	this.shape_5.setTransform(199.8,180.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhaA/QAUAJAXAAQAqAAAegeQAegfAAgqQAAgmgZgdQAbAMARAaQARAZAAAfQAAAqgeAfQgfAegpAAQgwAAgfgkg");
	this.shape_6.setTransform(199.8,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,0,1).p("AhAAOQAAg+AtgtQAsgtA/AAIAVACQgfgPgjAAQg+AAgtAtQgtAsAAA/QAAA6AmArQAmArA3AHQgmgSgYglQgYgmAAgtg");
	this.shape_7.setTransform(189.7,178.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhHBmQgmgrAAg6QAAg/AtgsQAtgtA/AAQAiAAAgAPIgVgCQhAAAgsAtQgtAtAAA+QAAAtAYAmQAYAlAmASQg2gHgngrg");
	this.shape_8.setTransform(189.7,178.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,0,1).p("ABoAAQAAArgfAfQgeAegrAAQgqAAgegeQgegfAAgrQAAgqAegeQAegfAqAAQArAAAeAfQAfAeAAAqg");
	this.shape_9.setTransform(198.6,179.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhIBJQgfgeABgrQgBgpAfgfQAegfAqABQArgBAeAfQAeAfABApQgBArgeAeQgeAfgrAAQgqAAgegfg");
	this.shape_10.setTransform(198.6,179.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,0,1).p("ABtBtQguAsg/AAQg+AAgtgtQgtgsAAhAQAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/QAAA/gsAug");
	this.shape_11.setTransform(198.6,179.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_12.setTransform(198.6,179.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,0,1).p("AAehjQAZAdAAAmQAAAqgeAeQgdAegrAAQgXAAgUgJQAfAkAvAAQArAAAegeQAegeAAgqQAAgfgRgaQgQgZgcgMg");
	this.shape_13.setTransform(234.8,180.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhaA/QAUAJAXAAQAqAAAdgeQAfgfAAgqQAAgmgZgdQAbAMARAaQARAZAAAfQAAAqgeAfQgfAegqAAQgvAAgfgkg");
	this.shape_14.setTransform(234.8,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,0,1).p("AhAAOQAAg+AtgtQAsgtA/AAIAVACQgfgPgjAAQg+AAgtAtQgtAsAAA/QAAA6AmArQAmArA3AHQgmgSgYglQgYgmAAgtg");
	this.shape_15.setTransform(224.7,178.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhGBmQgngrAAg6QAAg/AtgsQAtgtA+AAQAjAAAgAPIgWgCQg/AAgsAtQgtAtAAA+QAAAtAYAmQAYAlAmASQg2gHgmgrg");
	this.shape_16.setTransform(224.7,178.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,0,1).p("ABoAAQAAArgfAfQgeAegrAAQgqAAgegeQgegfAAgrQAAgqAegeQAegfAqAAQArAAAeAfQAfAeAAAqg");
	this.shape_17.setTransform(233.6,179.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhIBJQgegeAAgrQAAgpAegfQAfgfApABQArgBAeAfQAfAfAAApQAAArgfAeQgeAfgrAAQgqAAgegfg");
	this.shape_18.setTransform(233.6,179.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,0,1).p("ACZAAQAABAgtAsQgsAthAAAQg+AAgtgtQgtgsAAhAQAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/g");
	this.shape_19.setTransform(233.6,179.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_20.setTransform(233.6,179.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,0,1).p("AmPHHIAAqTQAAhkBGhGQBGhGBkAAIE/AAQBjAABGBGQBHBGAABk");
	this.shape_21.setTransform(210,199.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(4,0,1).p("AH0INIsgAAIjHiWIAAqUQAAhjBGhGQBGhGBjAAIFYAAQBPAABAAuICtB9QAwAuAaA9QAaA9AABCg");
	this.shape_22.setTransform(200,192.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AkrINIjIiWIAAqUQAAhjBGhGQBGhGBjAAIFYAAQBPAAA/AvICvB9QAvAuAaA8QAaA9AABCIAAKEg");
	this.shape_23.setTransform(200,192.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ABWCGQgQgFgPgKIiWhyQgVgOAAgaIAAhGQAAgNAHgHQAGgJAMAAQAQAAAVAPICWByQAVAOAAAaIAABMQAAAKgHAHQgHAHgKAAgAhMgjQAAAGAFADICUBvIAAgyQAAgFgFgFIiUhug");
	this.shape_24.setTransform(161.7,246.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABWCGQgQgFgPgLIiWhxQgVgOAAgaIAAhHQAAgVAQgGQASgGAcAUICWBxQAVAPAAAaIAABMQAAAMgKAHQgGAFgIAAIgHgBg");
	this.shape_25.setTransform(161.7,246.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgyCUQgjAAgbgUIiYhyQgUgOAAgaIAAhGQAAgVAPgPQAOgPAWAAIEbAAQAkAAAbAVICYBxQAUAPAAAZIAABNQAAASgNANQgNANgSAAg");
	this.shape_26.setTransform(178.5,245.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgyCUQgiAAgcgUIiXhyQgVgOAAgaIAAhGQAAgVAPgPQAPgPAVAAIEcAAQAkAAAaAVICYBxQAUAOAAAaIAABNQAAASgMANQgOANgSAAg");
	this.shape_27.setTransform(220.4,245.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,338,400,243.1);
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
