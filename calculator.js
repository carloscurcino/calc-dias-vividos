function calcDias() {
    window.alert("Calculando...")
    let res = document.querySelector("div#res")
    let nome = document.querySelector("input#nome").value
    let AnoAT = document.querySelector("input#AnoAT")
    let MesAT = document.querySelector("input#MesAT")
    let DiaAT = document.querySelector("input#DiaAT")

    let AnoNas = document.querySelector("input#AnoNas")
    let MesNas = document.querySelector("input#MesNas")
    let DiaNas = document.querySelector("input#DiaNas")
    
    let AnoNasC = Number(AnoNas)
    let MesNasC = Number(MesNas)
    let DiaNasC = Number(DiaNas)
    
    let AnoATC = Number(AnoAT)
    let MesATC = Number(MesAT)
    let DiaATC = Number(DiaAT)
    

    let AV = '' //Anos Inteiros Vividos
    let AB = '' //Quantidade de anos bissexto
    let AC = '' //Quantidade de anos comuns
    let DVint = '' //Dias vividos de Anos Inteiros
    let MVint = '' //Meses vividos de dias inteiros
    let TMV = '' //Total de meses vividos
    let d30 = '' //Quantidade de meses com 30 dias
    let d31 = '' //Quantidade de meses com 31 dias
    let fev = '' //Quantidade de fevereiros
    let d28 = '' //Fevereiros com 27
    let DV = '' //Dias vividos
    let TDV = '' //Total de dias vividos

    /*let AVC = Number(AV)
    let ABC = Number(AB)
    let ACC = Number(AC)
    let DVintC = Number(DVint)
    let MVintC = Number(MVint)
    let TMVC = Number(TMV)
    let d30C = Number(d30)
    let d31C = Number(d31)
    let fevC = Number(fev)
    let d28C = Number(d28)
    let DVC = Number(DV)
    let TDVC = Number(TDV)*/

    AV = AnoATC - AnoNasC 
    AB = AV/4 
    if(AV%4 != 0){
        AB++
    }
    AC = AV - AB
    DVint = (AC*365)+(AB*366) 
    MVint = DVint/30  
    TMV = MVint+(MesATC-MesNasC)
    d31 = TMV*58.33/100 
    d30 = TMV*33.33/100
    fev = TMV-d31-d30 
    dv28 = fev-AB 
    DV = (d30*30)+(d31*31)+(d28*28)+(AB*29)  
    TDV = DV-((DiaATC+DiaNasC)*27)
    res.innerHTML = `Olá, ${nome}! você já viveu ${TDV} ${typeof(TDV)} dias!`
         
    
   
 }