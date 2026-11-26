(function(){
      var l = (navigator.language||"es").slice(0,2) === "en" ? "en" : "es";
      try { var s = localStorage.getItem("lang"); if (s === "es" || s === "en") l = s; } catch(e){}
      function set(v){ l = v; document.documentElement.lang = v;
        document.getElementById("lang").textContent = v === "es" ? "EN" : "ES";
        document.getElementById("back").textContent = v === "es" ? "← Volver" : "← Back";
        var ol = document.getElementById("other-legal"); if (ol) ol.textContent = v === "es" ? "Política de privacidad" : "Privacy policy";
        var sk = document.querySelector(".skip"); if (sk) sk.textContent = v === "es" ? "Saltar al contenido" : "Skip to content";
        document.title = (v === "es" ? "Aviso legal" : "Legal notice") + " — Buski87";
        try { localStorage.setItem("lang", v); } catch(e){} }
      document.getElementById("lang").onclick = function(){ set(l === "es" ? "en" : "es"); };
      document.getElementById("year").textContent = new Date().getFullYear();
      set(l);
    })();
