class ModuleStorage {
    setItem() {
        throw new Error('抽象方法setItem不能直接调用');
    }
    getItem() {
        throw new Error('抽象方法getItem不能直接调用');
    }
    removeItem(){
        throw new Error('抽象方法removeItem不能直接调用');
    }
    clear(){
        throw new Error('抽象方法clear不能直接调用');
    }

}
module.exports = ModuleStorage;