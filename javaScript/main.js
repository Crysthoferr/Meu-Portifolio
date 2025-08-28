const botaoTopo = document.getElementById("botao-topo")

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botaoTopo.style.display = "block"
    } else {
        botaoTopo.style.display = "none"
    }
}