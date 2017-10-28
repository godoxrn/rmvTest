//============================================
//xorn_skipTitle.js
//============================================
/*:
*@plugindesc 跳过默认标题画面
*@author xorn

*@desc

*@help 
*/

//=============================================================================
// ** Game_Interpreter
//=============================================================================	
var _alias_mog_weather_ex_pluginCommand = Game_Interpreter.prototype.pluginCommand
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_weather_ex_pluginCommand.call(this,command, args)
	if (command === "xorn_test") { alert("hello")}; 
		SceneManager.push(Scene_Menu);
	return true;
};