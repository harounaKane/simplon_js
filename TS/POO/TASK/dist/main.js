// const qs = <T>(sel: string): T => document.querySelector(sel) as T;
function qs(sel) {
    const el = document.querySelector(sel);
    if (!el)
        throw new Error("Un élément HTML non trouvé !");
    return el;
}
let input = qs("#taskTitle");
let select = qs("#priority");
let ul = qs("#taskList");
let btn = qs("#addTask");
export {};
