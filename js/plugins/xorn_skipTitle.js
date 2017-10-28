//============================================
//xorn_skipTitle.js
//============================================
/*:
*@plugindesc 跳过默认标题画面
*@author xorn copy from VIPArcher
*@param Test Only
*@desc 设置为 true 时仅当测试时跳过，否则全跳过
*@default false
*@help 没有要操作的指令，不需要帮助
*/


void function(){
	var parameters = PluginManager.parameters('xorn_skipTitle');
	var testOnly = parameters['Test Only'] !== 'false';
	if(!testOnly || location.search === '?test'){
		Scene_Title.prototype.start = function(){
			Stage.prototype.initialize.call(this);
			SceneManager.goto(Scene_Map);
		};
	}

}();