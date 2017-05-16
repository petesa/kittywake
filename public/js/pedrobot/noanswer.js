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


(lib.Text_non1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#767676").s().p("AgIBOQgEgEAAgGQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgEAAgEgEgAgHAcIgDhiQAAgEADgDQADgEAEAAQAEAAAEADQADAEAAAEIgDBiQgBAIgHAAQgHAAAAgIg");
	this.shape.setTransform(299.7,39);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#767676").s().p("AgIBOQgEgEAAgGQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgEAAgEgEgAgHAcIgDhiQAAgEADgDQADgEAEAAQAEAAAEADQADAEAAAEIgDBiQgBAIgHAAQgHAAAAgIg");
	this.shape_1.setTransform(294.2,39);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgMQgEgKAAgOQAAgMAEgLQAEgKAIgJQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAHAEALQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngGIgDgOQgCgGgFgGQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAHIBMAAIAAAAg");
	this.shape_2.setTransform(284.7,41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#767676").s().p("AABBKQgDgCgEgDQgDgEgCgFQgBgFAAgHIAAhKIgMAAQgEAAgCgDQgCgCAAgDQAAgDACgDQACgCAEAAIAMAAIAAgYQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIAAAYIAQAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAIgQAAIAABHQAAAGADAEQADAFAGAAQAFAAAEgDQAHAAAAAIQAAAFgEACQgHAEgKAAQgGAAgFgCg");
	this.shape_3.setTransform(274.3,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#767676").s().p("AgaA5QgHgCgFgEQgFgFgCgHQgCgGAAgKIAAhJQAAgEACgDQADgCAEAAQADAAADACQADADAAAEIAABEQAAAHACAFQABAFAEADQADADAFACQAFABAGAAQAJAAAKgGQAJgFAFgGIAAhNQAAgEADgDQACgCAEAAQAEAAACACQADADAAAEIAABjQAAAEgDACQgCADgEAAQgEAAgCgDQgDgCAAgEIAAgIQgHAIgKAFQgOAGgJAAQgJAAgHgDg");
	this.shape_4.setTransform(264.3,41.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#767676").s().p("AgzBQQgCgDAAgEIAAiPQAAgEACgDQADgCAEAAQADAAADACQADADAAAEIAAAJQAGgIAKgGIALgFQAGgBAFAAQALAAAKAEQAJAFAHAIQAHAHAEAMQADALAAAOQAAANgDALQgEALgHAJQgHAHgJAEQgKAFgLAAQgLAAgKgFQgKgGgHgKIAAA2QAAAEgDADQgDACgDAAQgEAAgDgCgAgVg8QgJAGgFAIIAAAzQAFAIAJAFQAKAGAKAAQAIAAAHgEQAHgDAFgGQAEgGADgHQADgIAAgKQAAgJgDgJQgDgIgEgGQgFgGgHgEQgHgDgIAAQgKAAgKAFg");
	this.shape_5.setTransform(251.1,43.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#767676").s().p("AA/A5QgCgCAAgEIAAhGQAAgLgFgGQgDgDgEgCQgEgCgFAAQgJAAgJAFQgIAGgFAHIAABMQAAAEgDACQgDADgDAAQgCAAgDgDQgDgCAAgEIAAhGQAAgLgFgGQgDgDgEgCQgEgCgFAAQgJAAgJAFQgIAGgFAIIAABLQAAAEgDACQgDADgDAAQgDAAgDgDQgDgCAAgEIAAhjQAAgEADgDQADgCADAAQADAAADACQADADAAAEIAAAJQAEgHAKgFQAFgEAGgCQAGgCAHAAQAGAAAFACQAFABAEAEQAHAFACAKQAGgJAKgGIALgFQAHgCAFAAQAJAAAGACQAFACAEAFQAFAFACAGQACAHAAAIIAABLQAAAEgDACQgCADgEAAQgEAAgDgDg");
	this.shape_6.setTransform(234.3,41.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#767676").s().p("AgXA4QgKgEgIgJQgIgJgEgLQgDgKAAgNQAAgMADgLQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEALAAAMQAAANgEAKQgEALgHAJQgIAJgKAEQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_7.setTransform(217.7,41.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#767676").s().p("AgOA4QgKgFgIgHQgIgJgEgLQgEgLAAgNQAAgMAEgLQAEgLAIgIQAIgJAKgEQALgFAMAAQAMAAAJAEQAJADAHAIQADADAAACQAAAJgIAAQgEAAgCgCQgFgGgHgDQgGgCgHAAQgJAAgHADQgHAEgFAGQgGAGgCAIQgDAJAAAIQAAAKADAIQACAIAGAGQAFAGAHADQAHAEAJAAQAHAAAGgDQAHgCAFgFQACgDAEAAQAIABAAAHQAAAFgDACQgHAGgJAEQgJAEgMAAQgMAAgLgFg");
	this.shape_8.setTransform(205,41.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#767676").s().p("AABBKQgDgCgEgDQgDgEgCgFQgBgFAAgHIAAhKIgMAAQgEAAgCgDQgCgCAAgDQAAgDACgDQACgCAEAAIAMAAIAAgYQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIAAAYIAQAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAIgQAAIAABHQAAAGADAEQADAFAGAAQAFAAAEgDQAHAAAAAIQAAAFgEACQgHAEgKAAQgGAAgFgCg");
	this.shape_9.setTransform(189.3,39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#767676").s().p("AgXA4QgKgEgIgJQgIgJgEgLQgDgKAAgNQAAgMADgLQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEALAAAMQAAANgEAKQgEALgHAJQgIAJgKAEQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_10.setTransform(179,41.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#767676").s().p("AAhA5QgDgCAAgEIAAhDQAAgHgCgGQgCgFgDgDQgDgDgFgBQgFgCgGAAQgJAAgKAFQgJAGgFAIIAABLQAAAEgDACQgDADgDAAQgEAAgDgDQgCgCAAgEIAAhjQAAgEACgDQADgCAEAAQADAAADACQADADAAAEIAAAJQAGgIALgFQAFgEAGgBQAGgCAGAAQAJAAAHACQAHADAFAFQAEAEADAHQACAHAAAJIAABJQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_11.setTransform(165.5,41.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#767676").s().p("AgWA5QgLgDgIgHQgDgCAAgEQAAgDACgDQACgCAEAAIAEABQAHAFAIAEQAJADAIABQAHgBAFgBIAJgEQAHgGAAgIQAAgEgDgEQgCgDgFgDQgFgDgOgEQgVgFgIgDQgGgEgDgGQgEgGAAgIQAAgHADgGQADgHAFgEQAGgFAIgCQAIgDAKAAQALAAAKAEQAJADAHAGQADACAAAEQAAADgCADQgCACgDAAIgEgCQgGgFgHgCQgIgDgIAAQgMAAgHAEQgHAFAAAJQAAADADADIAGAGQAFADAOADIAPAEQAIADAGACQAHAEADAGQAEAHAAAJQAAAHgDAGQgDAHgGAEQgFAFgJADQgJADgKAAQgMAAgKgEg");
	this.shape_12.setTransform(147.1,41.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#767676").s().p("AgUA4QgLgEgIgIQgIgIgEgMQgEgKAAgOQAAgMAEgLQAEgKAIgJQAHgJALgEQALgFALAAQAMAAALAFQAKAEAIAJQAHAHAEALQADAKAAAMQAAADgCACQgDADgFAAIhTAAQABAIADAHQADAIAGAFQAFAGAHADQAIADAIAAQAJAAAIgDQAIgCAGgGIAEgBQAIAAAAAHQAAAEgDACQgJAHgKADQgKAEgMAAQgMAAgLgFgAAngGIgDgOQgCgGgFgGQgFgGgHgEQgHgDgKAAQgHAAgIADQgHAEgEAFQgFAGgDAHQgCAHgBAHIBMAAIAAAAg");
	this.shape_13.setTransform(134.9,41.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#767676").s().p("AgXA4QgKgEgIgJQgIgJgEgLQgDgKAAgNQAAgMADgLQAEgLAIgIQAIgJAKgEQALgFAMAAQANAAALAFQAKAEAIAJQAHAIAEALQAEALAAAMQAAANgEAKQgEALgHAJQgIAJgKAEQgLAFgNAAQgMAAgLgFgAgQgoQgHADgFAHQgFAGgCAIQgDAIAAAIQAAAJADAIQACAIAFAGQAFAHAHADQAIAEAIAAQAJAAAHgEQAHgDAFgHQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgGQgFgHgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_14.setTransform(121.3,41.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#767676").s().p("Ag5BQQgFAAgDgDQgCgDAAgFIAAiJQAAgGACgCQADgDAFAAIAsAAQAJAAAIACQAIABAIADQAHADAHAFIAMAJIAJALQAFAHACAIQADAGACAIQABAIAAAIQAAAJgBAHQgCAJgDAHQgCAHgFAGQgEAHgFAFIgMAKIgOAHQgIADgIABQgIACgJAAgAgwA+IAjAAQAKAAAPgEQALgGAIgIQAIgJAFgLQAEgLAAgNQAAgMgEgLQgEgLgIgJQgIgJgMgEQgPgFgKgBIgjAAg");
	this.shape_15.setTransform(106.3,39);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#767676").s().p("AgIBOQgEgEAAgGQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgEAAgEgEgAgHAcIgDhiQAAgEADgDQADgEAEAAQAEAAAEADQADAEAAAEIgDBiQgBAIgHAAQgHAAAAgIg");
	this.shape_16.setTransform(265.8,13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#767676").s().p("AgIBOQgEgEAAgGQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgEAAgEgEgAgHAcIgDhiQAAgEADgDQADgEAEAAQAEAAAEADQADAEAAAEIgDBiQgBAIgHAAQgHAAAAgIg");
	this.shape_17.setTransform(260.3,13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#767676").s().p("AgIBOQgEgEAAgGQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgEAAgEgEgAgHAcIgDhiQAAgEADgDQADgEAEAAQAEAAAEADQADAEAAAEIgDBiQgBAIgHAAQgHAAAAgIg");
	this.shape_18.setTransform(254.8,13);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#767676").s().p("AgiA6QgFAAgDgDQgCgCAAgFQAAgDACgCIA+hUIg4AAQgDAAgDgCQgCgDAAgDQAAgDACgCQADgDADAAIBHAAQAEAAACADQAEACAAAEQAAADgDADIg+BVIA6AAQAHgBAAAIQAAAIgHAAg");
	this.shape_19.setTransform(246.4,15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#767676").s().p("AgjA6QgDAAgEgDQgCgCAAgFQAAgDABgCIA/hUIg4AAQgDAAgDgCQgCgDAAgDQAAgDACgCQADgDADAAIBHAAQAEAAADADQACACAAAEQAAADgBADIg/BVIA5AAQAIgBAAAIQAAAIgIAAg");
	this.shape_20.setTransform(235.1,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#767676").s().p("AgiA6QgFAAgCgDQgDgCAAgFQAAgDACgCIA+hUIg5AAQgCAAgDgCQgCgDAAgDQAAgDACgCQADgDACAAIBIAAQAEAAACADQADACABAEQgBADgCADIg+BVIA6AAQAHgBAAAIQAAAIgHAAg");
	this.shape_21.setTransform(223.8,15.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#767676").s().p("AgwBQQgFAAgDgDQgCgDgBgFIAAiJQABgGACgCQADgDAFAAIA7AAQALAAAIADQAIADAHAGQAFAFAEAHQACAIAAAJQABAHgDAHQgCAFgEAGQgEAEgFADQgFADgFABQAFACAGACQAGADAEAGQAEAGADAGQACAGAAAIQAAAKgDAHQgDAJgGAFQgFAGgKADQgIADgLAAgAgnA+IAwAAQAHAAAFgCQAGgCAEgDQAEgEACgFQACgFAAgHQAAgFgCgFQgCgFgEgEQgEgDgFgDQgGgCgHAAIgwAAgAgngKIAvAAQAHAAAFgCQAFgCAEgDQADgDACgFQACgFAAgGQAAgFgCgFQgCgEgDgEQgEgDgFgCQgFgCgHgBIgvAAg");
	this.shape_22.setTransform(210.9,13);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#767676").s().p("AgIBOQgEgEAAgGQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgEAAgEgEgAgHAcIgDhiQAAgEADgDQADgEAEAAQAEAAAEADQADAEAAAEIgDBiQgBAIgHAAQgHAAAAgIg");
	this.shape_23.setTransform(194.2,13);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#767676").s().p("AgIBOQgEgEAAgGQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgEAAgEgEgAgHAcIgDhiQAAgEADgDQADgEAEAAQAEAAAEADQADAEAAAEIgDBiQgBAIgHAAQgHAAAAgIg");
	this.shape_24.setTransform(188.7,13);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#767676").s().p("AgIBOQgEgEAAgGQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgEAAgEgEgAgHAcIgDhiQAAgEADgDQADgEAEAAQAEAAAEADQADAEAAAEIgDBiQgBAIgHAAQgHAAAAgIg");
	this.shape_25.setTransform(183.2,13);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#767676").s().p("AgjA6QgDAAgEgDQgCgCAAgFQAAgDABgCIA/hUIg5AAQgCAAgDgCQgCgDAAgDQAAgDACgCQADgDACAAIBIAAQAEAAADADQACACAAAEQAAADgBADIg/BVIA5AAQAIgBAAAIQAAAIgIAAg");
	this.shape_26.setTransform(174.8,15.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#767676").s().p("AgiA6QgFAAgCgDQgDgCAAgFQAAgDACgCIA+hUIg5AAQgCAAgDgCQgCgDAAgDQAAgDACgCQADgDACAAIBIAAQAEAAACADQADACABAEQgBADgCADIg+BVIA6AAQAHgBAAAIQAAAIgHAAg");
	this.shape_27.setTransform(163.5,15.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#767676").s().p("AgjA6QgDAAgEgDQgCgCAAgFQAAgDABgCIA/hUIg4AAQgDAAgDgCQgCgDAAgDQAAgDACgCQADgDADAAIBHAAQAEAAADADQACACAAAEQAAADgBADIg/BVIA5AAQAIgBAAAIQAAAIgIAAg");
	this.shape_28.setTransform(152.2,15.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#767676").s().p("AgwBQQgFAAgDgDQgCgDAAgFIAAiJQAAgGACgCQADgDAFAAIA8AAQAKAAAJADQAHADAGAGQAGAFADAHQADAIABAJQAAAHgDAHQgCAFgEAGQgEAEgFADQgFADgGABQAGACAHACQAFADAFAGQADAGADAGQACAGABAIQAAAKgDAHQgEAJgFAFQgGAGgJADQgJADgLAAgAgnA+IAwAAQAHAAAGgCQAFgCAEgDQAEgEACgFQACgFAAgHQAAgFgCgFQgCgFgDgEQgFgDgFgDQgGgCgHAAIgwAAgAgngKIAvAAQAHAAAFgCQAFgCADgDQAEgDACgFQACgFAAgGQAAgFgCgFQgCgEgEgEQgDgDgFgCQgFgCgHgBIgvAAg");
	this.shape_29.setTransform(139.3,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text_non1, new cjs.Rectangle(0,0,400,54), null);


(lib.Ray2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxgcQADgGAGgCQAGgDAHACIAzAMIBcg4IhABvQgEAHgHADQgIADgHgCIgzgQIhaA5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ray2, new cjs.Rectangle(-11.6,-8.2,23.2,16.5), null);


(lib.Ray1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPA6QgIgCgFgGQgEgHAAgIIADg1IhPhIIB7AjQAHACAEAFQAEAFAAAHIABA1IBOBKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ray1, new cjs.Rectangle(-10.9,-9.1,21.8,18.3), null);


(lib.Eye_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,1).p("ABWgMQAAgmgZgeQgVgJgWAAQgpAAgfAfQgfAeAAAqQAAAmAZAdQAUAJAXAAQAqAAAegeQAfgfAAgpg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8BRQgZgdAAgmQAAgqAfgfQAegeAqAAQAWAAAUAKQAaAcgBAmQAAArgeAeQgeAegqAAQgXAAgUgJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Eye_R, new cjs.Rectangle(-9.5,-10,19.1,20), null);


(lib.Eye_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,1).p("ABWgMQAAgmgZgeQgVgJgWAAQgpAAgfAfQgfAeAAAqQAAAmAZAdQAUAJAXAAQAqAAAegeQAfgfAAgpg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8BRQgYgdAAgnQAAgpAegeQAegfAqAAQAWAAAVAKQAYAcAAAmQAAArgeAeQgeAegqAAQgXAAgUgJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Eye_L, new cjs.Rectangle(-9.5,-10,19.1,20), null);


(lib.Subtitles_non = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Text1
	this.instance = new lib.Text_non1();
	this.instance.parent = this;
	this.instance.setTransform(200,27,1,1,0,0,0,200,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,54);


(lib.Pedrobot_non = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ray1
	this.instance = new lib.Ray1();
	this.instance.parent = this;
	this.instance.setTransform(-59.9,-19.9,0.478,0.478,0,0,0,10.1,9.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regX:10,scaleX:1,scaleY:1,x:-65,y:-25},4).to({_off:true},1).wait(3).to({_off:false,regX:10.1,scaleX:0.48,scaleY:0.48,x:-59.9,y:-19.9},0).to({regX:10,scaleX:1,scaleY:1,x:-65,y:-25},4).to({_off:true},1).wait(208));

	// Ray2
	this.instance_1 = new lib.Ray2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59.9,-20.1,0.433,0.433,0,0,0,11.7,-11.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regX:11.5,scaleX:1,scaleY:1,x:-65,y:-15},4).to({_off:true},1).wait(3).to({_off:false,regX:11.7,scaleX:0.43,scaleY:0.43,x:-59.9,y:-20.1},0).to({regX:11.5,scaleX:1,scaleY:1,x:-65,y:-15},4).to({_off:true},1).wait(208));

	// Eye_L
	this.instance_2 = new lib.Eye_L();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3,-21.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).wait(2).to({alpha:0},2).wait(209));

	// Eye_R
	this.instance_3 = new lib.Eye_R();
	this.instance_3.parent = this;
	this.instance_3.setTransform(32,-21.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).wait(2).to({alpha:0},2).wait(209));

	// Lager 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,1).p("ABWgMQAAgmgZgeQgVgJgWAAQgpAAgfAfQgfAeAAAqQAAAmAZAdQAUAJAXAAQAqAAAegeQAfgfAAgpg");
	this.shape.setTransform(31.8,-21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,0,1).p("AAehjQAZAdAAAmQAAAqgfAeQgdAegrAAQgXAAgTgJQAfAkAvAAQAqAAAegeQAfgeAAgqQAAgfgRgaQgQgZgcgMg");
	this.shape_1.setTransform(34.8,-19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaA/QAUAJAWAAQArAAAegeQAegfAAgqQAAgmgZgdQAbAMARAaQARAZAAAfQAAAqgfAfQgdAegrAAQgvAAgfgkg");
	this.shape_2.setTransform(34.8,-20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,0,1).p("Ag/AOQAAg+AtgtQArgtBAAAIAVACQgggPgiAAQg/AAgsAtQgtAsAAA/QAAA6AmArQAmArA3AHQgmgSgYglQgYgmAAgtg");
	this.shape_3.setTransform(24.7,-21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBmQgmgrAAg6QAAg/AtgsQAtgtA+AAQAjAAAfAPIgVgCQg/AAgrAtQguAtAAA+QABAtAYAmQAXAlAmASQg2gHgngrg");
	this.shape_4.setTransform(24.7,-21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,0,1).p("ABsBsQgtAtg/AAQg/AAgsgtQgtgtAAg/QAAg/AtgsQAsgtA/AAQA/AAAtAtQAtAsAAA/QAAA/gtAtg");
	this.shape_5.setTransform(33.6,-20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhrBsQgtgtAAg/QAAg+AtgtQAsgtA/AAQBAAAAsAtQAtAtAAA+QAAA/gsAtQguAtg/AAQg/AAgsgtg");
	this.shape_6.setTransform(33.6,-20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQAFANgIAEQgEACgDgDQgFgDgCgGQgFgMAIgFQAEgBAEADQAEADACAFg");
	this.shape_7.setTransform(-45.5,-9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQADAFgBAGQgBAFgEABQgEACgDgDQgFgDgCgGQgFgMAIgFQAEgBAEADQAEADACAFg");
	this.shape_8.setTransform(-41.9,-6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQADAFgBAFQgCAFgDACQgEABgEgDQgEgDgCgFQgDgFABgFQABgFAEgCQAEgCADADQAFADACAGg");
	this.shape_9.setTransform(-38.2,-3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,0,1).p("AAJgDQADAFgBAFQgCAFgDACQgEABgDgDQgFgDgCgFQgCgFABgFQABgFADgCQAEgCAEADQAEADACAGg");
	this.shape_10.setTransform(-34.5,-0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,0,1).p("ABkBLIjHiV");
	this.shape_11.setTransform(-40,-10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,0,1).p("ABWgMQAAgmgZgeQgVgJgWAAQgpAAgfAfQgfAeAAAqQAAAmAZAdQAUAJAXAAQAqAAAegeQAfgfAAgpg");
	this.shape_12.setTransform(-3.2,-21.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,0,1).p("AAehjQAZAdAAAmQAAAqgfAeQgdAegrAAQgXAAgTgJQAfAkAvAAQAqAAAegeQAfgeAAgqQAAgfgRgaQgQgZgcgMg");
	this.shape_13.setTransform(-0.2,-19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhaA/QATAJAXAAQAsAAAcgeQAfgfAAgqQAAgmgZgdQAcAMAQAaQARAZAAAfQAAAqgfAfQgeAegqAAQgvAAgfgkg");
	this.shape_14.setTransform(-0.2,-20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,0,1).p("Ag/AOQAAg+AtgtQArgtBAAAIAVACQgggPgiAAQg/AAgsAtQgtAsAAA/QAAA6AmArQAmArA3AHQgmgSgYglQgYgmAAgtg");
	this.shape_15.setTransform(-10.3,-21.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhGBmQgngrABg6QgBg/AugsQAsgtA/AAQAiAAAfAPIgUgCQhAAAgsAtQgsAtAAA+QAAAtAXAmQAZAlAmASQg4gHglgrg");
	this.shape_16.setTransform(-10.3,-21.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,0,1).p("ABsBsQgtAtg/AAQg/AAgsgtQgtgtAAg/QAAg/AtgsQAsgtA/AAQA/AAAtAtQAtAsAAA/QAAA/gtAtg");
	this.shape_17.setTransform(-1.4,-20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQBAAAAsAtQAtAsAAA/QAAA/gsAtQguAtg/AAQg/AAgsgtg");
	this.shape_18.setTransform(-1.4,-20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,0,1).p("AmPHHIAAqTQAAhjBGhHQBHhGBjAAIE/AAQBjAABGBGQBHBHAABj");
	this.shape_19.setTransform(10,-0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(4,0,1).p("AH0INIsgAAIjHiWIAAqUQAAhjBGhGQBGhGBjAAIFYAAQBPAABAAuICuB9QAvAuAaA9QAaA9AABCg");
	this.shape_20.setTransform(0,-7.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AksINIjHiWIAAqTQAAhkBGhGQBGhGBjAAIFYAAQBPAAA/AuICvB+QAvAtAaA9QAaA9AABCIAAKEg");
	this.shape_21.setTransform(0,-7.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABWCGQgQgFgPgKIiWhyQgVgOAAgaIAAhGQAAgNAHgIQAGgIAMAAQAQAAAVAPICWBxQAVAPAAAaIAABMQAAAKgHAHQgHAHgKAAgAhMgjQAAAGAFADICUBuIAAgxQAAgGgFgDIiUhug");
	this.shape_22.setTransform(-38.3,46.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABWCGQgQgFgPgLIiWhxQgVgOAAgaIAAhHQAAgVAQgGQASgGAcAUICWBxQAVAPAAAaIAABMQAAAMgKAHQgGAFgIAAIgHgBg");
	this.shape_23.setTransform(-38.3,46.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgyCUQgjAAgbgUIiYhyQgUgOAAgaIAAhGQAAgVAPgPQAPgPAVAAIEbAAQAkAAAbAVICYBxQAUAPAAAZIAABNQAAASgNANQgNANgSAAg");
	this.shape_24.setTransform(-21.5,45.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgyCUQgiAAgcgUIiYhyQgUgOAAgaIAAhGQAAgVAPgPQAPgPAWAAIEaAAQAlAAAaAVICXBxQAVAOAAAaIAABNQAAASgMANQgOANgSAAg");
	this.shape_25.setTransform(20.4,45.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-62,104,122);


// stage content:
(lib.noanswer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		init("standby");
		//query_field.val("");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Subtitles
	this.instance = new lib.Subtitles_non();
	Subtitles = this.instance;
	this.instance.parent = this;
	this.instance.setTransform(200,354.1,1,1,0,0,0,200,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Pedrobot
	this.instance_1 = new lib.Pedrobot_non();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,260,1,1,0,0,0,50,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({regY:60.1,rotation:4.9,x:244.6,y:254.2},5).wait(2).to({regY:60,rotation:0,x:250,y:260},3).wait(91));

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
