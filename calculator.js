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
    
    let AnoNasC = Number(AnoNas.value)
    let MesNasC = Number(MesNas.value)
    let DiaNasC = Number(DiaNas.value)
    
    let AnoATC = Number(AnoAT.value)
    let MesATC = Number(MesAT.value)
    let DiaATC = Number(DiaAT.value)
    

    let AV = 0 //Anos Inteiros Vividos
    let AB = parseInt(0) //Quantidade de anos bissexto
    let AC = 0 //Quantidade de anos comuns
    let DVint = 0 //Dias vividos de Anos Inteiros
    let MVint = 0 //Meses vividos de dias inteiros
    let TMV = 0 //Total de meses vividos
    let d30 = 0 //Quantidade de meses com 30 dias
    let d31 = 0 //Quantidade de meses com 31 dias
    let fev = 0 //Quantidade de fevereiros
    let d28 = 0 //Fevereiros com 27
    let DV = 0 //Dias vividos
    let TDV = 0 //Total de dias vividos


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
