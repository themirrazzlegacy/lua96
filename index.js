//!wrt $BSPEC:{"frn":"Lua96","aut":"themirrazz","dsc":"Run Lua programs on Windows 96","cpr":"Licensed under GNU GPL v3","ver":0.1,"ssy":"gui","icn":"C:/system/local/share/lua96/lua_logo.png"}
const {Theme} = w96.ui;
var term = this.boxedEnv.term;
var term_instance;
if(!term) {
    term_instance = await w96.util.requestTerminal("Lua");
    term = term_instance.terminal;
}
class Lua96App extends WApplication {
    constructor() { super() }
    async main(argv) {
        if(!argv[1]) {
            term.println("\x1b[31mNo file specified\x1b[0m");
        }
        await term.pause();
        term_instance.stopHost();
    }
}

return await WApplication.execAsync(new Lua96App(), this.boxedEnv.args, this);