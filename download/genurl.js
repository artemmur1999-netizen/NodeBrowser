function geturl(file) {
    let base = "https://github.com/artemmur1999-netizen/NodeBrowser/releases/latest/download/";
    let url = base+file.replaceAll(" ", ".");
    return url
};

function genbtn(file) {
    let url = geturl(file);
    let type = file.split(".").slice(1).join(".");
    let isport = type.includes("tar");
    let pretext;
    if (isport) pretext = "Download Portable"; else pretext = "Download Setup";
    let text = pretext+" ("+type+")";
    let btn = `<button>${text}</button>`;
    let a = document.createElement("a");
    a.innerHTML = btn;
    a.download = file;
    a.href = url;
    return a
};

function addbtn(file) {
    document.body.appendChild(genbtn(file));
}